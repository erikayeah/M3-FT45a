const server = require("http");
const fs = require("fs");

// console.log(server);

// server.createServer((req, res) => {
//   // console.log(res);
//   console.log(req);
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.end("Hola Mundo!!!");
// }).listen(1337, "127.0.0.1");

// server.createServer((req, res) => {

//   res.writeHead(200, {"Content-Type": "text/html"});
//   const html = fs.readFileSync("./index.html", "utf-8");
//   res.end(html);

// }).listen(1337, "127.0.0.1");

// server.createServer((req, res) => {

//   res.writeHead(200, {"Content-Type": "text/html"});
//   const nombre = "Rick";
//   let html = fs.readFileSync("./index.html", "utf-8");
//   html = html.replace("{name}", nombre);
//   html = html.replace("**status**", "Alive");
//   html = html.replace("{origin}", "Earth");
//   res.end(html);

// }).listen(1337, "127.0.0.1");

// server.createServer((req, res) => {

//   res.writeHead(200, {"Content-Type": "application/json"});
//   const character = { name: "Rick", id: 1, origin: "Earth" };
//     res.end(JSON.stringify(character));

// }).listen(1337, "127.0.0.1");

server.createServer((req, res) => {

  //* req.url = path actual
  console.log(req.url);

  if(req.url === "/") {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end("Hola Mundo!!!");
  } else if (req.url === "/rick") {
      res.writeHead(200, {"Content-Type": "application/json"});
      const character = { name: "Rick", id: 1, origin: "Earth" };
      res.end(JSON.stringify(character));
  } else if (req.url === "/morty") {
      res.writeHead(200, {"Content-Type": "application/json"});
      const character = { name: "Morty", id: 2, origin: "Earth" };
      res.end(JSON.stringify(character));
  } else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("Not Found!!!");
  }

}).listen(1337, "127.0.0.1");

//* /character/rick => .split("/")
//* /character/rick and morty => rick%20and%20morty