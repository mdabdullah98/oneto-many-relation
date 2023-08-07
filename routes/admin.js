const express = require("express");
const path = require("path");
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../form.html"));
});
adminRouter.post("/add-products", (req, res) => {
  console.log(req.body);
  res.redirect(301, "/admin");
});

module.exports = adminRouter;
