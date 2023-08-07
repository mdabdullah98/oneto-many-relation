const express = require("express");
const shopRouter = express.Router();

shopRouter.get("/", (req, res) => {
  res.send("i am from shop routes");
});

module.exports = shopRouter;
