const express = require("express");
const path = require("path");
const fs = require("fs");
const adminRouter = express.Router();
const adminController = require("../controller/admin");

adminRouter
  .get("/", adminController.addProductForm)
  .post("/add-products", adminController.showAddProductsData)
  .post("/username", adminController.storeUsernameInCookie)
  .post("/message", adminController.appendfileTxt)
  .get("/messageForm", adminController.showUserChat)
  .get("/contact_us", adminController.contactUs)
  .post("/contactData", adminController.getContactBodyData)
  .get("/success", adminController.showSucessMessage);

module.exports = adminRouter;
