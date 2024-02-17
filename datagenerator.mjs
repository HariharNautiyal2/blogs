import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app";
import fs from "fs";
const privateKey = fs.readFileSync("newkey_pkcs8.pem", "utf8");

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 830190,
    privateKey: privateKey,
    installationId: 47378039,
  },
});

async function main() {
  const dataofall = await extractrepos();
  fs.writeFile("./data.json", JSON.stringify(dataofall), (error) => {
    if (error) {
      console.log('An error has occurred ', error);
      return;
    }
    console.log('Data written successfully to disk');
  });
}

async function extractrepos() {
  let data = await octokit.request(`GET /users/hariharnautiyal2/repos`, {
    owner: "hariharnautiyal2",
  });
  let dataarray = data.data;
  let dataofall = {};
  for (const i of dataarray) {
    let files = await getMdFiles(i);
    if (dataofall[i.name]) {
      dataofall[i.name] = dataofall[i.name].concat(files);
    } else {
      dataofall[i.name] = files;
    }
  }
  dataofall = Object.entries(dataofall).map(([repo, data]) => ({
    repo: repo,
    data: data,
  }));
  return dataofall;
}

async function getMdFiles(repo) {
  let files = [];
  let string="GET /repos/{owner}/{repo}/git/trees/main?recursive=1";
  if(repo.default_branch === "master"){
    string="GET /repos/{owner}/{repo}/git/trees/master?recursive=1";
  }

  let contents = await octokit.request(
    string,
    {
      owner: "hariharnautiyal2",
      repo: repo.name
    }
  );

  for (const item of contents.data.tree) {
    if (item.path.endsWith(".md")) {
      let data = await octokit.request(item.url, {
        owner: "hariharnautiyal2",
        path: item.path,
        repo: repo.name
      });
      let content = Buffer.from(data.data.content, 'base64').toString('utf-8');
      files.push({ file: item.path, content: content });
    }
  }
  return files;
}

main();
