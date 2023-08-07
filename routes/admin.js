const express = require("express");
const path = require("path");
const fs = require("fs");
const adminRouter = express.Router();

adminRouter
  .get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../form.html"));
  })
  .post("/add-products", (req, res) => {
    console.log(req.body);
    res.redirect(301, "/admin");
  })
  .get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../loginform.html"));
  })
  .post("/username", (req, res) => {
    res.cookie("username", req.body.username);
    res.redirect(301, "/admin/messageForm");
  })
  .get("/messageForm", (req, res) => {
    const messagFormData = fs.readFileSync(
      path.resolve(__dirname, "../messageForm.html"),
      "utf-8"
    );
    const data = fs.readFileSync("file.txt", "utf-8");
    const replaceData = messagFormData.replace(
      "**message**",
      `${req.cookies.username} : ${data}`
    );
    res.send(replaceData);
  })
  .post("/message", (req, res) => {
    fs.appendFileSync("file.txt", ` ${req.body.message} `);
    res.redirect(301, "/admin/messageForm");
  });

module.exports = adminRouter;
