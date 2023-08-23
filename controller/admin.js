const express = require("express");
const path = require("path");

const fs = require("fs");
const Product = require("../model/product");

exports.getAllData = (req, res) => {
  req.user
    .getProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

exports.displayForm = (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "views", "form.html"));
};

exports.AddproductData = (req, res) => {
  const reqbody = req.body;
  req.user
    .createProduct({
      title: reqbody.title,
      price: reqbody.price,
      description: reqbody.description,
      imageUrl: reqbody.thumbnail,
    })
    .then((result) => {
      console.log(result);
      res.redirect(301, "/admin/addData");
    })
    .catch((err) => console.log(err));
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

//get single product by id
exports.getSingleProduct = (req, res) => {
  const params_id = +req.params.id;
  req.user
    .getProducts({ where: { id: params_id } })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};
exports.deleteProduct = (req, res) => {
  Product.findByPk(req.params.id)
    .then((product) => {
      return product.destroy();
    })
    .then((deleetedData) => {
      res.json(deleetedData);
    })
    .catch((err) => console.log(err));
};
exports.updateProduct = (req, res) => {
  const reqbody = req.body;
  Product.findByPk(reqbody.id)
    .then((product) => {
      product.title = reqbody.title;
      product.price = reqbody.price;
      product.description = reqbody.description;
      product.imageUrl = reqbody.imageUrl;
      return product.save();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => console.log(err));
};
