  const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
  
  // Changing the git remote is typically done outside of the Node.js application code.
  // It's a Git operation that should be performed in the terminal or command prompt.
  // Here's a comment explaining the process:

  // To change the git remote, use the following command in your terminal:
  // git remote set-url origin https://github.com/username/new-repository.git

  // Replace 'https://github.com/username/new-repository.git' with your new remote URL.
  // After changing the remote, you can verify it with:
  // git remote -v

  // Note: This comment is for informational purposes only and does not affect the application's functionality.