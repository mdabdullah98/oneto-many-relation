const express = require("express");
const path = require("path");
const fs = require("fs");
const adminRouter = express.Router();
const adminController = require("../controller/admin");

adminRouter
  .post("/add-products", adminController.AddproductData)
  .post("/username", adminController.storeUsernameInCookie)
  .post("/message", adminController.appendfileTxt)
  .post("/contactData", adminController.getContactBodyData)
  .get("/", adminController.getAllData)
  .get("/products/:id", adminController.getSingleProduct)
  .get("/addData", adminController.displayForm)
  .get("/success", adminController.showSucessMessage)
  .get("/messageForm", adminController.showUserChat)
  .get("/contact_us", adminController.contactUs)
  .delete("/products/:id", adminController.deleteProduct);

module.exports = adminRouter;
