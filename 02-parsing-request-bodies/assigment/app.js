//set up a node server
const http = require("http");

//handle two routes / and /user

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write(
      "<html><head><title>Node assignment</title></head><body><h1>Welcome to Node.js Server /  </h1><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Create User</button></form></body></html>"
    );
    return res.end();
  }
  if (url === "/user") {
    res.write(
      "<html><head><title>Enter Message</title></head><body><h1>Welcome to Node.js Server /user</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>"
    );
    return res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
});

server.listen(3000);
