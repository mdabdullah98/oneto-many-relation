const express = require("express");
const cookie = require("cookie-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const cookieParser = require("cookie-parser");

const port = process.env.Port || 8080;
const server = express();

//cookie parser
server.use(cookieParser());
//middle ware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/admin", adminRouter);
server.use("/shop", shopRouter);
server.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

server.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});