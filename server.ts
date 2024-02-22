import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import sharp from 'sharp';

let array:any=[
  {
      "repo": "backend56421",
      "data": []
  },
  {
      "repo": "blogs",
      "data": [
          {
              "file": "README.md",
              "content": "# Blogs\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.\n"
          }
      ]
  },
  {
      "repo": "blogs2",
      "data": [
          {
              "file": "README.md",
              "content": "# Test\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.\n"
          }
      ]
  },
  {
      "repo": "for-ashwin",
      "data": [
          {
              "file": "README.md",
              "content": "<h1>\n  Installing Zorin OS 17\n</h1>\n<h3>What is Zorin os</h1>\n<p>Zorin os is a linux distro. Made for low end pc with windows support</p>\n<p>Zorin os is the best os in comparison of all linux distros it had desktop cube and many more feature and really 17 is a god mode os.</p>\n<p>Find more about Zorin os in <a href=\"https://blog.zorin.com/2023/12/20/zorin-os-17-has-arrived/\">Official Site</a></p>\n<h4>Some Videos ⬇️</h4>\n\n```\nhttps://www.youtube.com/watch?v=ZBqS2jKHg6A\n```\n```\nhttps://www.youtube.com/watch?v=d_WoTOpp9Cs\n```\n<h3>Installation of Zorin os 17</h3>\n<h4>Steps</h4>\n<ol>\n  <li>First Download Rufus from <a href=\"https://github.com/pbatard/rufus/releases/download/v2.18/rufus-2.18p.exe\">Here</a></li>\n  <li>Then download file from here <a href=\"https://zorin.com/os/download/17/core\">Core version </a> or <a href=\"https://zorin.com/os/download/16/lite/\">Lite Version</a> Choose the version according to your pc specs.</li>\n  <li>Then right click rufus.exe and run that program as adminstrative.</li>\n  <li>First Select Device</li>\n  \n![s1](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/6bc97b3c-3989-44ad-8980-1a6548dd6eb8)\n\n  <li>Then select File that you downloaded from <a href=\"https://zorin.com/os/download/17/core\">Core version </a>or<a href=\"https://zorin.com/os/download/16/lite/\">Lite Version</a></li>\n  \n![Screenshot from 2023-12-27 15-17-24](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/6ebca5df-e5be-4b62-9a63-1358afdd8be0)\n\n <li>\n   Then select the partition type to <b>MBR</b>\n </li>\n <li>\n   Then Flash you pendrive\n </li>\n <li>Then Reboot your system</li>\n \n ![Screenshot from 2023-12-27 15-20-36](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/153234a1-9181-45ad-a80b-2c9ab79d9573)\n\n  <li>\n    Then as you told me you have asrock mother board press and hold F11 for booting menu \n  </li>\n <li>\n   Select Your usb pendrive in menu\n </li> \n \n ![Screenshot from 2023-12-27 15-30-02](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/c4f49b89-c311-4af1-aa8c-94d88df3cab5)\n \n <li>\n   Finally you entered os\n </li>\n <li>\n   You can try or install from the give menu\n </li>\n\n  <li>\n    If Had Doubts see this video\n  </li>\n    \n  ```\nhttps://www.youtube.com/watch?v=g0FJkX3aWqk\n ```\n</ol>\n \n"
          },
          {
              "file": "fyde.md",
              "content": "<h1>\n  Installing FYDE OS\n</h1>\n<h3>What is fyde os</h1>\n<p>Fyde os is a modified edition of chrome os. Built with added optimisation and features.</p>\n<p>Fyde os is based on android in a linux kernel support android apps, Even you can also install android app as the apk.</p>\n<p>Find more about fyde os in <a href=\"https://fydeos.io\">Official Site</a></p>\n<h4>Some Videos ⬇️</h4>\n\n```\nhttps://www.youtube.com/watch?v=bVcVYENNuLE\n```\n```\nhttps://www.youtube.com/watch?v=GRT_FjG7TVI\n```\n<h3>Installation of fyde os 17</h3>\n<h4>Installation videos is here ⬇️</h4>\n\n``` \nhttps://www.youtube.com/embed/wSkWb9RWqng?si=3Y3rXQJJYmNEIXKN\n```\n<h4>Steps</h4>\n<ol>\n  <li>First Download Rufus from <a href=\"https://github.com/pbatard/rufus/releases/download/v2.18/rufus-2.18p.exe\">Here</a></li>\n  <li>Then download file from <a href=\"https://fydeos.io/download\">here</a> Choose the pc and select according to processor you have.</li>\n  <li>Then right click rufus.exe and run that program as adminstrative.</li>\n  <li>First Select Device</li>\n  \n![s1](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/6bc97b3c-3989-44ad-8980-1a6548dd6eb8)\n\n  <li>Then select File that you downloaded from <a href=\"https://fydeos.io/download\">here</a></li>\n  \n![Screenshot from 2023-12-27 15-17-24](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/6ebca5df-e5be-4b62-9a63-1358afdd8be0)\n\n <li>\n   Then select the partition type to <b>MBR</b>\n </li>\n <li>\n   Then Flash you pendrive\n </li>\n <li>Then Reboot your system</li>\n \n ![Screenshot from 2023-12-27 15-20-36](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/153234a1-9181-45ad-a80b-2c9ab79d9573)\n\n  <li>\n    Then as you told me you have asrock mother board press and hold F11 for booting menu \n  </li>\n <li>\n   Select Your usb pendrive in menu\n </li> \n \n ![Screenshot from 2023-12-27 15-30-02](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/c4f49b89-c311-4af1-aa8c-94d88df3cab5)\n <li>\n   Finally you entered os\n </li>\n <li>\n   You can try or install from the give menu\n </li>\n\n  <li>\n    If Had Doubts see this video\n  </li>\n    \n  ```\nhttps://www.youtube.com/watch?v=g0FJkX3aWqk\n ```\n</ol>\n \n"
          },
          {
              "file": "gamesinlinux.md",
              "content": "<h1>\n  Installing amoung us in linux\n</h1>\n<h3>Steps</h3>\n<ol>\n  <li>\n    Press window key + A then type terminal\n  </li>\n  \n  ![Screenshot from 2023-12-27 15-57-09](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/7cff22bb-24a3-45b2-9101-625be4485a71)\n\n  <li>\n    type this command in terminal\n    \n    \n    sudo snap install steam\n  \n  </li>\n  \n  ![Screenshot from 2023-12-27 15-58-39](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/116281c8-ddfa-4e5f-9b8d-3a89b7491a16)\n\n  <li>\n    Hit enter and install it\n  </li>\n  \n![Screenshot from 2023-12-27 15-59-13](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/fb0f4b27-e843-4c96-9edf-8513aca406eb)\n\n  <li>\n    Press window key + A and type steam and open it\n  </li> \n  \n  ![Screenshot from 2023-12-27 16-03-20](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/2d16bfd9-be47-42e9-8a97-e8c342b7dff4)\n\n <li>\n   Open Your account or just create it \n </li>\n \n![Screenshot from 2023-12-27 16-06-59](https://github.com/HariharNautiyal2/for-ashwin/assets/134691036/1ceea9b9-e71f-4f4a-b400-ffbe62866680)\n\n <li>\nThe other steps are in this video\n\n```\nhttps://www.youtube.com/watch?v=6nArWZwXqjE\n```\n  \n </li>\n</ol>\n"
          }
      ]
  },
  {
      "repo": "frontend5652",
      "data": []
  },
  {
      "repo": "fusionarena",
      "data": []
  },
  {
      "repo": "harihar-portfilo",
      "data": [
          {
              "file": "README.md",
              "content": "# Harihar\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.\n"
          }
      ]
  },
  {
      "repo": "hecta",
      "data": [
          {
              "file": "README.md",
              "content": "# Hecta\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.\n"
          }
      ]
  },
  {
      "repo": "instagram",
      "data": [
          {
              "file": "README.md",
              "content": "# Instagram\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.\n"
          }
      ]
  },
  {
      "repo": "node-js",
      "data": [
          {
              "file": "README.md",
              "content": "### This repository is no longer maintained!\n\n**For the most up to date test app to get you started on Heroku, head on over to [`node-js-getting-started`](https://github.com/heroku/node-js-getting-started).**\n\n---\n\n# node-js-sample\n\nA barebones Node.js app using [Express 4](http://expressjs.com/).\n\n## Running Locally\n\nMake sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.\n\n```sh\ngit clone git@github.com:heroku/node-js-sample.git # or clone your own fork\ncd node-js-sample\nnpm install\nnpm start\n```\n\nYour app should now be running on [localhost:5000](http://localhost:5000/).\n\n## Deploying to Heroku\n\n```\nheroku create\ngit push heroku master\nheroku open\n```\n\nAlternatively, you can deploy your own copy of the app using the web-based flow:\n\n[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)\n\n## Documentation\n\nFor more information about using Node.js on Heroku, see these Dev Center articles:\n\n- [10 Habits of a Happy Node Hacker](https://blog.heroku.com/archives/2014/3/11/node-habits)\n- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)\n- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)\n- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)\n- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)\n"
          }
      ]
  },
  {
      "repo": "notes",
      "data": [
          {
              "file": "Coding_class/README.md",
              "content": "# Skill course : coding\n\nThis is all we learned in skill course provided by school\n\n## All Content\n\n \n1. [What is algorithim](whatisalgorithim.md)\n2. [What are flowcharts](./whatareflowcharts.md)\n3. [Introduction to MS Makecode arcade](./introductiontoacrade.md)\n4. [Introduction to blocks](https://arcade.makecode.com/tutorials/intro)\n\n\nContent is been updated for a while\n"
          },
          {
              "file": "Coding_class/introductiontoacrade.md",
              "content": "# Introduction to MakeCode Arcade\n\n**MakeCode Arcade** is an exciting platform that empowers you to create your own video games. Whether you're a beginner or an experienced coder, you'll find it fun and engaging. Let's dive in!\n\n1. [ Click for website](https://arcade.makecode.com/)\n2. [ Click for App (Android) ](https://play.google.com/store/apps/details?id=org.gtmaker.makecode&hl=en&gl=US)\n3. [ Click for pc offline app](https://arcade.makecode.com/offline-app)\n    \n\n## What Is MakeCode Arcade?\n\nMakeCode Arcade provides two ways to code:\n\n1. **Blocks**: Use visual blocks that snap together to create your game logic. It's like assembling puzzle pieces.\n2. **Text-Based Programming**: If you prefer writing code, you can use JavaScript or Python.\n\n## Key Features:\n\n- **Retro-Style Games**: Build games reminiscent of classic arcade titles.\n- **Multiplayer Interaction**: Create interactive projects that others can play.\n- **Developmentally Appropriate**: Blocks make it accessible for all skill levels.\n\n## Getting Started:\n\n1. **Online Platform**: You can access MakeCode Arcade online here.\n2. **Visual Studio Code Extension**: For text-based coding, you can use the Microsoft MakeCode Arcade extension for Visual Studio Code.\n\nRemember, this curriculum encourages project-based learning, and students spend approximately 75% of their time building projects and practicing the skills they learn. Have fun exploring the world of game development with MakeCode Arcade! 🎮\n\n<li>\n  [Introduction to blocks](https://arcade.makecode.com/tutorials/intro)\n</li>\n"
          },
          {
              "file": "Coding_class/introductiontoblocks.md",
              "content": "# Links to docs\n\n1. [Click here](https://arcade.makecode.com/tutorials/intro)\n"
          },
          {
              "file": "Coding_class/whatareflowcharts.md",
              "content": "Certainly! Let’s dive into the fascinating world of flowcharts and how they relate to algorithms. 🌟\n\n---\n\n# Flowcharts: A Visual Guide to Algorithms\n\n## What is a Flowchart?\n\nA **flowchart** is a graphical representation of an algorithm. It's like a map that guides us through a series of steps to solve a problem. Programmers use flowcharts to plan, design, and communicate the logic of a program. Imagine it as a visual recipe for creating software!\n\n## Basic Symbols in Flowcharts:\n\n![](https://wcs.smartdraw.com/flowchart/img/start-end-flowchart-symbol.png?bn=15100111903)\n\n\n### Start/End Symbol\n<p>The terminator symbol marks the starting or ending point of the system. It usually contains the word \"Start\" or \"End.\"</p>\n\n![](https://wcs.smartdraw.com/flowchart/img/action-process-flowchart-symbol.png?bn=15100111903)\n\n### Action or Process Symbol\n<p>A box can represent a single step (\"add two cups of flour\"), or an entire sub-process (\"make bread\") within a larger process.</p>\n\n![](https://wcs.smartdraw.com/flowchart/img/document-flowchart-symbol.png?bn=15100111903)\n### Document Symbol\n<p>A printed document or report.</p>\n\n![](https://wcs.smartdraw.com/flowchart/img/multiple-document-flowchart-symbol.png?bn=15100111903)\n\n### Multiple Documents Symbol\n<p>Represents multiple documents in the process</p>\n\n![](https://wcs.smartdraw.com/flowchart/img/decision-flowchart-symbol.png?bn=15100111903)\n\n### Decision Symbol\n<p>A decision or branching point. Lines representing different decisions emerge from different points of the diamond.</p>\n\n![](https://wcs.smartdraw.com/flowchart/img/imput-output-flowchart-symbol.png?bn=15100111903)\n\n### Input/Output Symbol\n<p>Represents material or information entering or leaving the system, such as customer order (input) or a product (output).</p>\n\n\n1. **Terminal (Oval)**: Represents the start, stop, or halt points in a program's logic flow. It's where the journey begins and ends.\n\n\n2. **Input/Output (Parallelogram)**: Denotes any function related to input or output. Think of it as the gateway for data coming in or going out.\n\n3. **Processing (Box)**: This symbol represents arithmetic instructions or actions. It's where calculations happen—like adding, subtracting, or multiplying.\n\n4. **Decision (Diamond)**: Indicates a decision point. It's like a fork in the road where you choose different paths based on conditions (yes/no or true/false).\n\n5. **Connectors (Circle)**: Used when flowcharts become complex or span multiple pages.\n\n---\n\nFeel free to share this explanation with kids to help them understand the concept of flowcharts! 😊"
          },
          {
              "file": "Coding_class/whatisalgorithim.md",
              "content": "# Understanding Algorithms\n\n## What is an Algorithm?\n\nAn **algorithm** is like a set of step-by-step instructions that guide you through a specific task. Think of it as a recipe for solving a problem. Just like a cupcake recipe ensures you get cupcakes at the end, an algorithm follows clear steps to achieve a predictable result.\n\n## Why Are Algorithms Important?\n\n1. **Efficiency**: Algorithms save time by efficiently solving problems. They're like super-smart shortcuts for mathematicians, engineers, and computer scientists.\n\n2. **Real-World Applications**: Algorithms are used everywhere! From Google search to social media feeds, they power our digital lives.\n\n3. **Innovation**: Algorithms drive innovation in fields like science, technology, and medicine.\n\n## Examples of Algorithms:\n\n### Sorting Algorithm\n\n- **Description**: Organizing numbers in a specific order.\n- **Example**: Imagine sorting a deck of cards from lowest to highest.\n\n### Linear Search Algorithm\n\n- **Description**: Finding a specific item in a list.\n- **Example**: Searching for a book in a library.\n\n### Summation Algorithm\n\n- **Description**: Adding up a series of numbers.\n- **Example**: Calculating the total score in a game.\n\n## Resources for Learning More:\n\n- [Introduction to alorihms and flowcharts](https://www.toppr.com/guides/computer-science/programming-methodology/problem-solving-methodologies/introduction-to-algorithms-and-flowcharts/): Learn more about Markdown and its syntax.\n- [iD Tech: Algorithms for Kids](https://www.idtech.com/blog/algorithms-for-kids): Explore real-world examples and benefits of algorithms.\n\nRemember, algorithms are like secret recipes that make our digital world work smoothly! 🌟\n"
          },
          {
              "file": "Computer_docs/README.md",
              "content": "## UNDER CONSTRUCTION\n![Alt text](https://media1.tenor.com/m/cUDKyJkDr6kAAAAd/iron-man-iron-man-hammer.gif)"
          },
          {
              "file": "English_docs/README.md",
              "content": "## UNDER CONSTRUCTION\n![Alt text](https://media1.tenor.com/m/cUDKyJkDr6kAAAAd/iron-man-iron-man-hammer.gif)"
          },
          {
              "file": "GK_docs/README.md",
              "content": "## UNDER CONSTRUCTION\n![Alt text](https://media1.tenor.com/m/cUDKyJkDr6kAAAAd/iron-man-iron-man-hammer.gif)"
          },
          {
              "file": "Hindi_docs/README.md",
              "content": "## UNDER CONSTRUCTION"
          },
          {
              "file": "Maths_docs/README.md",
              "content": "# Maths Docs\n\nThis is docs pages of notes by harihar nautiyal. This page is made for concept learning of maths and contain notes with the paid docs of PW \n\n<h3>These Notes will prepare you for final term exam</h3> \n\n## UNDER CONSTRUCTION\n\n![Alt text](https://media1.tenor.com/m/cUDKyJkDr6kAAAAd/iron-man-iron-man-hammer.gif)"
          },
          {
              "file": "README.md",
              "content": "\n\n# Harihar's Class 8 Notes\n\nHello! My name is Harihar Nautiyal and I'm in Class 8. This repository contains my notes for various subjects. I've created this to help my friends and anyone else who might find it useful. Feel free to explore!\n\n## Subjects\n\n1. [Click for Science](/Science_docs/README.md)\n2. [Click for Maths](./Maths_docs/README.md)\n3. [Click for English](./English_docs/README.md)\n4. [Click for Hindi](./Hindi_docs/README.md)\n5. [Click for SST](./SST_docs/README.md)\n6. [Click for Sanskrit](./Sanskrit_docs/README.md)\n7. [Click for Computer](./Computer_docs/README.md)\n8. [Click for Notes of Coding class](./Coding_class/README.md)\n9. [Click for GK](./GK_docs/README.md)\n\nEach subject has its own folder with .md files for different topics. Click on the subject name to view the notes.\n\nHappy Learning!\n"
          },
          {
              "file": "SST_docs/README.md",
              "content": "## UNDER CONSTRUCTION"
          },
          {
              "file": "Sanskrit_docs/README.md",
              "content": "## UNDER CONSTRUCTION\n\n![Alt text](https://media1.tenor.com/m/cUDKyJkDr6kAAAAd/iron-man-iron-man-hammer.gif)\n"
          },
          {
              "file": "Science_docs/Chemical Effects of Electric current/README.md",
              "content": "# Chemical Effects of electric current\n## under contruction\n\n![421610744_410204158244875_6538292808354960270_n (1)](https://github.com/HariharNautiyal2/notes/assets/134691036/0eee4959-d68d-4fe8-a9e3-613054a61791)\n"
          },
          {
              "file": "Science_docs/Chemical Effects of Electric current/newterms.md",
              "content": "<h1>New Terms For Chemical Effects of electric current</h1>\n<h3>Conductors: </h3> A material that allows electric current to pass through it <br>\n<h3>Insulator: </h3> A material that does not allows electric current to pass through it <br>\n<br>\n\n![The example of conductor and insulator](image.png)\n\n<h3>Electrolysis: </h3> The process of causing chemical reaction through the application of electric current.\n\n\n\nExample of electrolysis in water\n![Electrolysis in water](https://raw.githubusercontent.com/HariharNautiyal2/notes/main/Science_docs/Chemical%20Effects%20of%20Electric%20current/image-1.png)\n\n\n<h3>Electroplating: </h3> The procss of causing a chemical chain reaction through the application material by means of electricity\n\n![Copper Plating](https://raw.githubusercontent.com/HariharNautiyal2/notes/main/Science_docs/Chemical%20Effects%20of%20Electric%20current/image-2.png)\n\n<h3>Tester: </h3> A device used to check the presence of electric current\n\n<h3>LED (Light Emitting Diodes): </h3>  A semiconductor light source that emit light when electric current flows through it\n\n<h3>Battery: </h3>A device that stores electrical energy and can make it available in electric form \n"
          },
          {
              "file": "Science_docs/README.md",
              "content": "\n# Science Docs\n\nThis is docs pages of notes by harihar nautiyal. This page is made for concept learning of science \n\n<h3>These Notes will prepare you for final term exam</h3> \n\n## UNDER CONSTRUCTION\n![Alt text](https://media1.tenor.com/m/cUDKyJkDr6kAAAAd/iron-man-iron-man-hammer.gif)\n\n1. [Combustion and Flame]()\n2. Reproduction in Animals\n3. Reaching the age of Adolescence\n4. [Chemical Effect of electric current](./Chemical%20Effects%20of%20Electric%20current/README.md)\n5. Sound\n6. Light\n\n<title>Hello world this is description</title>\n"
          },
          {
              "file": "Science_docs/syllabus.md",
              "content": "# **Syllabus For Final Term**\n\n1. **Combustion and Flame**\n2. Reproduction in Animals\n3. Reaching the age of Adolescence\n4. Chemical Effect of electric current\n5. Sound\n6. Light\n"
          }
      ]
  },
  {
      "repo": "pw-leak",
      "data": []
  },
  {
      "repo": "serverbablu",
      "data": [
          {
              "file": "README.md",
              "content": "# serverbablu\n"
          }
      ]
  },
  {
      "repo": "sevltechat",
      "data": [
          {
              "file": "client/README.md",
              "content": "*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*\n\n---\n\n# svelte-tailwindcss-template\n\nThis is a fork of Svelte's project template to enable usage of Tailwindcss. Refer to https://github.com/sveltejs/template for more info.\n\nTo create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):\n\n```bash\nnpx degit sarioglu/svelte-tailwindcss-template svelte-app\ncd svelte-app\n```\n\n_Note that you will need to have [Node.js](https://nodejs.org) installed._\n\n## Get started\n\nInstall the dependencies...\n\n```bash\ncd svelte-app\nnpm install\n```\n\n...then start [Rollup](https://rollupjs.org):\n\n```bash\nnpm run dev\n```\n\nNavigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.\n\nBy default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.\n\nIf you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.\n\n## Building and running in production mode\n\nTo create an optimised version of the app:\n\n```bash\nnpm run build\n```\n\nYou can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).\n\n\n## Single-page app mode\n\nBy default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.\n\nIf you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `\"start\"` command in package.json:\n\n```js\n\"start\": \"sirv public --single\"\n```\n\n## Using TypeScript\n\nThis template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:\n\n```bash\nnode scripts/setupTypeScript.js\n```\n\nOr remove the script via:\n\n```bash\nrm scripts/setupTypeScript.js\n```\n\n## Deploying to the web\n\n### With [Vercel](https://vercel.com)\n\nInstall `vercel` if you haven't already:\n\n```bash\nnpm install -g vercel\n```\n\nThen, from within your project folder:\n\n```bash\ncd public\nvercel deploy --name my-project\n```\n\n### With [surge](https://surge.sh/)\n\nInstall `surge` if you haven't already:\n\n```bash\nnpm install -g surge\n```\n\nThen, from within your project folder:\n\n```bash\nnpm run build\nsurge public my-project.surge.sh\n```\n"
          }
      ]
  },
  {
      "repo": "some_blogs",
      "data": [
          {
              "file": "README.md",
              "content": "# Hello world\n"
          },
          {
              "file": "atulya.md",
              "content": "# This is heading\n\n**This is bold**\n  [This is url](https://talk.harihar.site)"
          },
          {
              "file": "atulya2.md",
              "content": "# This is for atulya\nYour content \n**THis is bold**\n![This is image](https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg)"
          },
          {
              "file": "code.md",
              "content": "```\nHello world\nThis is harihar nautiyal\nhow are you feeling\n"
          },
          {
              "file": "followers.md",
              "content": "<br>\n\n# Free Followers\n\nTo get Followers we have to visit some follower spammer  websites</h5>\nYou can get upto 10 Followers / 1 day\n\n\n\n\n\n\n1. [Click here for Insta Followers](https://www.instafollowers.co/free-instagram-followers)\n\n\n\n\n\nI swear will update the links in this blog according to time but for now this is your links\n\n<h3>I will remind you this website gives you live bot followers  for free the thing is followers also like your posts and content like any common follow</h3>\n\nIf you want more than 10 like per day and resolve the limits so you can click this links from diffrent ip in common words you had to process through this website from a diffrent deivice\n\nmeans if you process through 5 deivices you get 5 x 10 means 50 followers per day this thing is really cool \n\nThanking you by harihar nautiyal\n\n⋆˖⁺‧₊☽◯☾₊‧⁺˖⋆\n\n<p>The instagram is the trademark of Meta this blog is only for getting free followers service</p>\n"
          },
          {
              "file": "poem.md",
              "content": "Just For fun 😅\n# My Poem \nJingle bells, jingle bells, jingle all the way<br>\nOh what fun it is to ride in a one-horse open sleigh<br>\nJingle bells, jingle bells, jingle all the way<br>\nOh what fun it is to sing a merry Christmas song<br>\n<br>\nDashing through the snow, in a one-horse open sleigh<br>\nOver the fields we go, laughing all the way<br>\nBells on bobtail ring, making spirits bright<br>\nWhat fun it is to ride and sing a sleighing song tonight<br>\n<br>\nJingle bells, jingle bells, jingle all the way<br>\nOh what fun it is...\n\nBy Titiksh Nautiyal\n"
          },
          {
              "file": "textatulya.md",
              "content": "# Hello world this is for atulya\n\nTHis is a text file for atulya "
          },
          {
              "file": "textforacode.md",
              "content": "# this not is test for acode"
          },
          {
              "file": "welcome.md",
              "content": "# Welcome to Blogs of Harihar Nautiyal\nI maked this project on 4 feb 2024 for blog purpose. The ability of this page is to extract md data from my github repos to this platform.\n## This Site is purely made by Angular and node.js\nI hope you will enjoy but the drop back is you need a url of respo to access all the blogs check my github account by simply clicking here \n\n<h3>This Site is 10% complete so still keep \npatience for 100%</h1>\n"
          }
      ]
  },
  {
      "repo": "ssr",
      "data": [
          {
              "file": "README.md",
              "content": "# Angular 16 Example SSR\n\n> An Angular starter kit featuring [Angular 16.1.1](https://angular.io), [Angular CLI 16.1.0](https://cli.angular.io/)\n\n> it's part of a repo series designed to create a Progressive Web App with Angular\n\n# Web Application Live Demo\n<p align=\"center\">\n  <p align=\"center\">\n    <a href=\"https://angular.ganatan.com/\">\n      <img src=\"https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif\" alt=\"Angular 16 Example \n      Application\"/>\n    </a>\n  </p>\n</p>\n\n## Quick start\n\n```bash\n# choose a repo\n# download the example or clone the repo from github\ngit clone https://github.com/ganatan/angular-ssr.git\n\n# download the example or clone the repo from gitlab\ngit clone https://gitlab.com/ganatan/angular-ssr.git\n\n# change directory\ncd angular-ssr\n\n# install the repo with npm\nnpm install\n\n# start the server\nnpm start\n\n```\nin your browser go to [http://localhost:4200](http://localhost:4200) \n\n## Getting Started\n\n\n### Installation\n* `npm install` (installing dependencies)\n* `npm outdated` (verifying dependencies)\n\n### Developpement\n* `npm run start`\n* in your browser [http://localhost:4200](http://localhost:4200) \n\n### Production \n* `npm run build`\n\n## Tests\n* `npm run test`\n\n\n### Prototype Bootstrap 5\n* `change directory` cd ui\n* launch html pages in your browser\n\n\n### Author\n* Author  : danny\n\n### Documentation\n\nEnglish Tutorials\n- Tutorials Step-by-Step - https://www.ganatan.com/tutorials/en\n\nTutoriels en français\n- Installation - https://www.ganatan.com/tutorials/modules-avec-angular\n- Tutoriels Etape par étape - https://www.ganatan.com/tutorials\n"
          }
      ]
  },
  {
      "repo": "talkharihar",
      "data": [
          {
              "file": "README.md",
              "content": "# AngularChatApp\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.\n"
          }
      ]
  },
  {
      "repo": "test1",
      "data": [
          {
              "file": "README.md",
              "content": "# Test1\n\nThis project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.\n\n## Development server\n\nRun `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.\n\n## Code scaffolding\n\nRun `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n\n## Build\n\nRun `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.\n\n## Running unit tests\n\nRun `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n\n## Running end-to-end tests\n\nRun `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.\n\n## Further help\n\nTo get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.\n"
          }
      ]
  },
  {
      "repo": "zorin_defalt_extensions",
      "data": [
          {
              "file": "README.md",
              "content": "# zorin_defalt_extensions\n"
          }
      ]
  }
];
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));
  server.get('/api/dynamic-image/:title/:desc', async (req, res, next) => {

    const title = (req.params.title).replaceAll("%20", " ");
    const desc = (req.params.desc).replaceAll("%20", " ");

    // Use title and desc to generate the dynamic image
    const imageBuffer = await generateDynamicImage(title, desc);

    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);

});
  // All regular routes use the Angular engine
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
      .then(async (html) => res.send(replaceHtml(html, (await title(originalUrl)).title,(await title(originalUrl)).desc,originalUrl)))
      .catch((err) => next(err));
  });


  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
// getData();
// // These are functions
// //  The most important fetch funtion
// function getData(){
//   const fs = require("fs");
// fs.readFile('../../../../data.json', 'utf8', (err:any, data:any) => {

//   array=JSON.parse(data);

// });
// }
// Genrate Image
async function generateDynamicImage(title: string, desc: string): Promise<Buffer> {
  // Function to generate the dynamic image using Sharp
  let width = 800;
  let height = 400;
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
      `+ truncateString(originalText) + ` 
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

// Now get title and desc functions

async function title(url: string) {
  console.log(array)
  var arr = url.split("/");
console.log(arr);
  let data = array.filter((res: any) => { return res.repo === arr[1] })[0].data.filter((res: any) => {
 let filename="README.md";
 let repopath= "/"+arr[1];
 let filepath=url.replace(repopath,"");
 let filepath2=filepath.replace("/","");
console.log(filepath2)
console.log(repopath)
    return res.file === filepath2;
  })[0].content;

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

  return {
    title: match[1] || "Blogs by harihar nautiyal",
    desc: linesArray[0] || "Blogs by harihar nautiyal"
  };

}

function replaceHtml(html:string,title:string,desc:string,url:string){
  const replacements = [
    { old: "<title>Blogs by harihar nautiyal</title>", new: "<title>" + title + " | Harihar Nautiyal blogs | " + url + "</title>" },
    { old: '<meta name="description" content="Harihar Blogs | creative blogs by harihar nautiyal">', new: '<meta name="description" content="' + desc + '">' },
    { old: '<meta name="keywords" content="HariharNautiyal"/>', new: '<meta name="keywords" content="' + desc + '">' },
    { old: '<meta property="og:title" content="Blogs by Harihar Nautiyal">', new: '<meta property="og:title" content="' + title + '">' },
    { old: '<meta property="og:url" content="http://blogs.harihar.site">', new: '<meta property="og:url" content="http://blogs.harihar.site' + url + '">' },
    { old: '<meta property="og:image" content="https://hello.com/image.jpg">', new: '<meta property="og:image" content="/api/dynamic-image/' + title.replaceAll(" ", "%20") + "/" + desc.replaceAll(" ", "%20") + '">' }
  ];

  // Initialize a variable to store the modified html
  let newHtml = html;

  // Loop over the replacements array and use the replace method on each pair of old and new values
  for (let i = 0; i < replacements.length; i++) {
    newHtml = newHtml.replace(replacements[i].old, replacements[i].new);
    
  }
  return newHtml;
}