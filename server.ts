import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import path, { dirname, join, resolve } from 'node:path';
import sharp from 'sharp';
import bootstrap from './src/main.server';
const fs = require("fs");
const privateKey = fs.readFileSync("newkey_pkcs8.pem", "utf8");
let array: any = [];
fs.readFile("./data.json", 'utf8', (err: any, data: any) => {
  let arr = JSON.parse(data);
  array = arr;
  // Read/modify file data here
})
const server = express();
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');
const commonEngine = new CommonEngine();

async function title(url: string) {
  
  var arr = url.split("/");

  let data = array.filter((res: any) => { return res.repo === arr[1] })[0].data.filter((res: any) => {
    let filename = "README.md"
    console.log(arr)
    if(arr[2] != ""){
      if(arr[2].toLowerCase() === "readme.md"){
        arr[2]="README.md";
      }
    }

    if (arr.length >= 4) {
      // Join the second and third parts by a slash
      filename = arr[2]+"/"+arr[3];
    }
    if (arr.length >= 3) {
      filename = arr[2];
    }
    if(arr.length >= 5){
      // filename = ${arr[2]}/${arr[3]}/${arr[4]}`;
    }
    console.log(filename)
    return res.file === filename;
  })[0].content;
console.log(data)
  return getTitleAndDesc(data);

}


function getTitleAndDesc(text: any) {
  var regex = /^# (.*)$/m;
  var match = text.match(regex);
  // Assume the string is stored in a variable called str
  var result = text.split("\n") // Split the string by newline characters
    .filter((line: any) => !line.startsWith("#")) // Filter out the lines that start with #
    .join("\n"); // Join the remaining lines back into a string
  // Assume the string is stored in a variable called str
  var firstLine = result.split("\n"); // Get the first element of the array
  var linesArray: any = [];
  firstLine.forEach((line: any) => {
    const replacements = [
      {
        old: "<br>", new: "",
      },
      {
        old: "<h1>", new: ""
      },
      {
        old: "</h1>", new: ""
      },
      {
        old: "<h2>", new: ""
      },
      {
        old: "</h2>", new: ""
      },
      {
        old: "<h3>", new: ""
      },
      {
        old: "</h5>", new: ""
      },
      {
        old: "<h5>", new: ""
      },
      {
        old: "</h3>", new: ""
      },
      {
        old: "<p>", new: ""
      },
      {
        old: "</p>", new: ""
      }];

    // Initialize a variable to store the modified html
    let newline: string = line;

    // Loop over the replacements array and use the replace method on each pair of old and new values
    for (let i = 0; i < replacements.length; i++) {
      // Replace method with regular expression
      newline = newline.replace(new RegExp(replacements[i].old, "g"), replacements[i].new);

    }
    if (newline != "") {
      linesArray.push(newline)
    }
  });
  console.log(result[0])
  return {
    title: match[1] || "Blogs by harihar nautiyal",
    desc: linesArray[0] || "Blogs by harihar nautiyal"
  };

}
async function generateDynamicImage(title: string, desc: string): Promise<Buffer> {
  // Function to generate the dynamic image using Sharp
  let width = 800;
  let height = 400;
  let labela = "Looong Text"; // "Medium Text" "Short"
  function convertToMathematicalSymbols(text: string) {
    const offset = 0x1D434; // Offset for lowercase letters in the Mathematical Alphanumeric Symbols block
    let result = '';

    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      // Convert regular lowercase letters to their mathematical symbol equivalents
      if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(charCode - 97 + offset);
      } else {
        result += text[i]; // Keep non-lowercase letters unchanged
      }
    }

    return result;
  }

  // Example usage
  const originalText = title;

  function truncateString(text: string) {
    let maxLength = 35;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }

  function breakStringToLines(str: string) {
    // Initialize an empty array to store the lines
    var lines = [];
    // Loop through the string by 20 characters
    for (var i = 0; i < str.length; i += 40) {
      // Extract a substring of 20 characters
      var line = str.slice(i, i + 40);
      // Add a newline character at the end
      line += "\n";
      // Push the line to the array
      lines.push(line);
    }
    // Join the array with an empty string
    var result = lines.join("");
    // Return the result
    return lines;
  }
  let lines = breakStringToLines(desc);
  let line1 = "";
  let line2 = "";
  let line3 = "";
  let line4 = "";
  let line5 = "";
  let line6 = "";
  if (lines[0] != undefined) {
    line1 = lines[0];
  }
  if (lines[1] != undefined) {
    line2 = lines[1];
  }
  if (lines[2] != undefined) {
    line3 = lines[2];
  }
  if (lines[3] != undefined) {
    line4 = lines[3];
  }
  if (lines[4] != undefined) {
    line5 = lines[4];
  }
  if (lines[5] != undefined) {
    line6 = lines[5];
  }

  const label = Buffer.from(`

  <svg id="ekaZIxjrT5M1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="800" height="400">
  <style>
    /* Add your CSS styles here */
    text {
      overflow-wrap: break-word;
    }
    .desc {
      width: 100px !Important; /* Change this to your desired width */
    }
  </style>
  <rect width="800" height="400" rx="0" ry="0" transform="translate(0-.061165)" fill="#191919" stroke-width="0"/>
  <path d="M93.79513,316.12731c67.6151-8.45189,43.03604-116.88168,11.23295-88.25889-33.22358,29.90122-12.98043,132.61961-3.20941,171.70366c4.73838,18.95353,12.49657,48.01454,8.02354,67.3977-.60139,2.60602-6.70529,8.30999-4.81412,6.41883c20.68533-20.68533,15.78518-54.10294,17.65178-80.23536.26948-3.77272-2.14842-10.76381,1.60471-11.23295c17.27584-2.15948,30.53321,94.27107,52.95534,91.46831c67.30701-8.41338,6.51738-88.50528,12.83766-104.30596c1.01296-2.5324,5.49114-2.61767,8.02354-1.60471c30.12782,12.05113,40.25951,47.83528,48.14121,75.42124c1.85877,6.50571,4.27922,12.83766,6.41883,19.25649c1.0698,3.20941,4.1388,12.8811,3.20942,9.62824-7.43593-26.02577-21.82882-56.54336-24.07061-83.44477-.49065-5.88778-4.16279-18.93344,1.60471-17.65178c26.68045,5.92899,32.31285,53.59851,59.37416,60.97887c41.15993,11.22543,70.94453-74.40078,54.56004-102.70126-8.30486-14.34475-32.72899-24.41413-46.53651-30.48944-70.92587-31.20738-153.85716-6.1637-213.42605,38.51297-18.07806,13.55855-44.366058,83.50501-16.358958,105.91068c94.37396,75.49917,193.526898-63.69411,273.112098-112.32951c30.21334-18.46371,63.46545-30.02393,97.88714-36.90826" transform="matrix(.407437-.068203 0.071049 0.424444 532.73405 135.12732)" fill="none" stroke="#e35905" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
  <text dx="0" dy="0" font-family="&quot;ekaZIxjrT5M1:::Cookie&quot;" font-size="20" font-weight="400" transform="matrix(1.844251 0 0 1.945297 53.647697 86.788598)" fill="#fff" stroke-width="0"><tspan y="0" font-weight="400" fill="#e35905" font-family='"Courier New"' stroke-width="0"><![CDATA[
      `+ truncateString(originalText + "?") + ` 
      ]]></tspan></text>
  <text dx="0" dy="0" width="200px" height="200px" font-family='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace' font-size="15" font-weight="400" transform="translate(77.379836 230.238224)" fill="#e35905" stroke-width="0" class="desc"><tspan y="0" font-weight="400" stroke-width="0"><![CDATA[
      `+ line1 + `
      ]]></tspan></text>
      <text dx="0" dy="15" width="200px" height="200px" font-family='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace' font-size="15" font-weight="400" transform="translate(77.379836 230.238224)" fill="#e35905" stroke-width="0" class="desc"><tspan y="0" font-weight="400" stroke-width="0"><![CDATA[
        `+ line2 + `
        ]]></tspan></text>
        <text dx="0" dy="30" width="200px" height="200px" font-family='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace' font-size="15" font-weight="400" transform="translate(77.379836 230.238224)" fill="#e35905" stroke-width="0" class="desc"><tspan y="0" font-weight="400" stroke-width="0"><![CDATA[
          `+ line3 + `
          ]]></tspan></text>
          <text dx="0" dy="45" width="200px" height="200px" font-family='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace' font-size="15" font-weight="400" transform="translate(77.379836 230.238224)" fill="#e35905" stroke-width="0" class="desc"><tspan y="0" font-weight="400" stroke-width="0"><![CDATA[
            `+ line4 + `
            ]]></tspan></text>
            <text dx="0" dy="45" width="200px" height="200px" font-family='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace' font-size="15" font-weight="400" transform="translate(77.379836 230.238224)" fill="#e35905" stroke-width="0" class="desc"><tspan y="0" font-weight="400" stroke-width="0"><![CDATA[
              `+ line5 + `
              ]]></tspan></text>
              <text dx="0" dy="45" width="200px" height="200px" font-family='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace' font-size="15" font-weight="400" transform="translate(77.379836 230.238224)" fill="#e35905" stroke-width="0" class="desc"><tspan y="0" font-weight="400" stroke-width="0"><![CDATA[
                `+ line6 + `
                ]]></tspan></text>

  <line x1="401.185146" y1="-41.270704" x2="-401.185146" y2="41.270703" transform="translate(398.814854 147.00809)" fill="none" stroke="#a9470b" stroke-width="3"/>
  <line x1="401.185146" y1="-41.270704" x2="-401.185146" y2="41.270703" transform="translate(398.814854 153.00809)" fill="none" stroke="#a9470b" stroke-width="3"/>
  <line x1="25.518732" y1="-31.085297" x2="-23.350529" y2="26.495955" transform="matrix(1.102355 0 0 0.997691 464.970765 173.44288)" fill="none" stroke="#a9470b" stroke-width="3"/>
  <line x1="-43.985881" y1="-100" x2="43.985881" y2="100" transform="translate(482.541407 300)" fill="none" stroke="#a9470b" stroke-width="3"/>
  </svg>
  `);

  let image = await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    }
  }).composite([{
    input: label,
    top: 0,
    left: 0,
  }]).png().toBuffer();


  return image;
}

server.set('view engine', 'html');
server.set('views', browserDistFolder);

// Serve static files from /browser
server.get('*.*', express.static(browserDistFolder, {
  maxAge: '1y'
}));

// Handle dynamic image route
server.get('/assets/dynamic-image/:title/:desc', async (req, res, next) => {
  try {
    const title = (req.params.title).replaceAll("%20", " ");
    const desc = (req.params.desc).replaceAll("%20", " ");

    // Use title and desc to generate the dynamic image
    const imageBuffer = await generateDynamicImage(title, desc);

    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error generating dynamic image:', error);
    res.status(500).send('Internal Server Error');
  }
});

server.get('*', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then(async (html) => {
      const titmanle: any = await title(originalUrl);
      const replacements = [
        { old: "<title>Blogs by harihar nautiyal</title>", new: "<title>" + titmanle.title + " | Harihar Nautiyal blogs | " + originalUrl + "</title>" },
        { old: '<meta name="description" content="Harihar Blogs | creative blogs by harihar nautiyal">', new: '<meta name="description" content="' + titmanle.desc + '">' },
        { old: '<meta name="keywords" content="HariharNautiyal"/>', new: '<meta name="keywords" content="' + titmanle.desc + '">' },
        { old: '<meta property="og:title" content="Harihar Nautiyal">', new: '<meta property="og:title" content="' + titmanle.title + '">' },
        { old: '<meta property="og:url" content="http://blogs.harihar.site">', new: '<meta property="og:url" content="http://blogs.harihar.site' + originalUrl + '">' },
        { old: '<meta property="og:image" content="https://hello.com/image.jpg">', new: '<meta property="og:image" content="/assets/dynamic-image/' + titmanle.title.replaceAll(" ", "%20") + "/" + titmanle.desc.replaceAll(" ", "%20") + '">' }
      ];

      // Initialize a variable to store the modified html
      let newHtml = html;

      // Loop over the replacements array and use the replace method on each pair of old and new values
      for (let i = 0; i < replacements.length; i++) {
        newHtml = newHtml.replace(replacements[i].old, replacements[i].new);
      }

      res.send(newHtml);
    })
    .catch((err) => next(err));
});
// Handle other routes using Angular SSR

// Start the server
const port = process.env['PORT'] || 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


function lol(){
  setTimeout(()=>{
    lol()
  },50000000000)
}