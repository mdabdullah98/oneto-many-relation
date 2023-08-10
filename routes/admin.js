const express = require("express");
const path = require("path");
const fs = require("fs");
const adminRouter = express.Router();

adminRouter
  .get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "views", "form.html"));
  })
  .post("/add-products", (req, res) => {
    console.log(req.body);
    res.redirect(301, "/admin");
  })
  .post("/username", (req, res) => {
    res.cookie("username", req.body.username);
    res.redirect(301, "/admin/messageForm");
  })
  .post("/message", (req, res) => {
    fs.appendFileSync("file.txt", ` ${req.body.message} `);
    res.redirect(301, "/admin/messageForm");
  })
  .get("/messageForm", (req, res) => {
    const messagFormData = fs.readFileSync(
      path.resolve(__dirname, "..", "views", "messageForm.html"),
      "utf-8"
    );
    const data = fs.readFileSync("file.txt", "utf-8");
    const replaceData = messagFormData.replace(
      "**message**",
      `${req.cookies.username} : ${data}`
    );
    res.send(replaceData);
  })
  .get("/contact_us", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "views", "contact_us.html"));
  })
  .post("/contactData", (req, res) => {
    console.log(req.body);
    res.redirect(301, "/admin/success");
  })
  .get("/success", (req, res) => {
    res.send("form submitted succesfully");
  });

module.exports = adminRouter;
