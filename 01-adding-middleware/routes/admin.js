// set up a router
const express = require("express");
// body parser
const bodyParser = require("body-parser");
//add body parser to the router

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/add-product' method='post'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

// handle the form data
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
