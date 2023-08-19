// // Creating a web server
// const http = require("http");

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 9000;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200; 
//   response.setHeader("Content-Type", "text/plain");
//   response.end("Hello, World!");
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
// });


// // Global Properties
// console.log(__filename);
// console.log(__dirname);


// // File System Module - Reading Files
// // Async
// // const fs = require("fs");

// // fs.readFile("hi.txt", "utf8", (err, data) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log(data);
// //   /* console.log(data.toString()); */
// // });

// // console.log("Log from outside");

// // Sync
// // const { readFileSync } = require("fs");

// // try {
// //   const data = readFileSync("hi.txt", "utf8");
// //   console.log(data);
// // } catch (err) {
// //   console.error(err);
// // }

// // console.log("Log from outside");


// // File System Module - Writing to Files
// // Async
// // const { writeFile, writeFileSync } = require("fs");

// // const newContent = "This is some new text";

// // writeFile("hi.txt", newContent, (err) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log("Content written!");
// // });

// // Sync
// const { appendFile } = require("fs");

// const newContent = "\nThis is some new text";

// appendFile("hi.txt", newContent, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Content Written!");
// })

// // try {
// //   writeFile("hi.txt", newContent);
// //   console.log("Content written!");
// // } catch (err) {
// //   console.error(err);
// // };


// // File System Module - Renaming & Deleting Files
// // Rename
// // const { rename } = require("fs");

// // rename("hi.txt", "hello.txt", (err) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log("File renamed!");
// // });

// // Delete
// const { unlink } = require("fs");

// unlink("hello.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File deleted!");
// });


// // Modules - Importing & Exporting
// // const addNums = require("./addNums");
// import { addNums } from "./addNums.js";

// const sum = addNums(2, 2);
// console.log(sum);


// BASIC WEB SERVER - HTML FILES, SERVER ROUTING, SERVER STATUS CODES, SERVER REDIRECTS, NPM, & NODEMON
const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 9700;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));