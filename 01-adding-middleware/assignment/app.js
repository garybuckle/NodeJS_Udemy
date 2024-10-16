// add express
const express = require("express");

// create app
const app = express();

// create server

app.use("/users", (req, res, next) => {
    res.send("<h1>Hello from Express Assignment users!</h1>");
  });
app.use("/", (req, res, next) => {
    res.send("<h1>Hello from Express Assignment Root!</h1>");
    next();
});



// app listen
app.listen(3000);
