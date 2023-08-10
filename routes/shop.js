const express = require("express");
const shopRouter = express.Router();
const path = require("path");

shopRouter.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "views", "shop.html"));
});

module.exports = shopRouter;
