const express = require("express");
const path = require("path");
const cors = require("cors");
const sequelize = require("./utils/database");
const port = process.env.Port || 8080;
const cookieParser = require("cookie-parser");
const server = express();

//these two are router
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

//cookie parser over here
server.use(cookieParser());

// cors origin
server.use(cors());
//middle ware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, "dist")));
server.use("/admin", adminRouter);
server.use("/", shopRouter);
server.use("*", (req, res, next) => {
  res.status(404).sendFile(path.resolve(__dirname, "views", "404.html"));
});

// sequelize is running
sequelize
  .sync()
  .then((res) =>
    server.listen(port, () => {
      console.log(`server is running on port http://localhost:${port}`);
    })
  )
  .catch((err) => console.log(err));
//server is running
