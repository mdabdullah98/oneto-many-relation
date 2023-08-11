const express = require("express");
const path = require("path");
const fs = require("fs");
const Product = require("../model/product");

exports.addProductForm = (req, res) => {
  const product = Product.fetchAll();

  res.sendFile(path.resolve(__dirname, "..", "views", "form.html"));
};
exports.AddproductData = (req, res) => {
  const reqbody = req.body;
  const product = new Product(
    reqbody.title,
    reqbody.stock,
    reqbody.price,
    reqbody.thumbnail,
    reqbody.brand,
    reqbody.model,
    reqbody.catagory,
    reqbody.description,
    reqbody.discountPercentage
  );
  product.save();
  res.redirect(301, "/admin");
};

exports.storeUsernameInCookie = (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect(301, "/admin/messageForm");
};

exports.appendfileTxt = (req, res) => {
  fs.appendFileSync("file.txt", ` ${req.body.message} `);
  res.redirect(301, "/admin/messageForm");
};
exports.showUserChat = (req, res) => {
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
};

exports.contactUs = (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "views", "contact_us.html"));
};
exports.getContactBodyData = (req, res) => {
  console.log(req.body);
  res.redirect(301, "/admin/success");
};
exports.showSucessMessage = (req, res) => {
  res.send("form submitted succesfully");
};
