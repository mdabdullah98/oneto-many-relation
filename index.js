const express = require("express");
const path = require("path");

//these two are router
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const cookieParser = require("cookie-parser");

const port = process.env.Port || 8080;
const server = express();

//cookie parser over here

server.use(cookieParser());

//middle ware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, "Public")));
server.use("/admin", adminRouter);
server.use("/", shopRouter);
server.use("*", (req, res, next) => {
  res.status(404).sendFile(path.resolve(__dirname, "views", "404.html"));
});

//server is running

server.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
