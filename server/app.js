// Importing required libraries 
const express = require("express");
require("dotenv").config();
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const cors = require("cors");
const server = require("http").createServer(app);

//Using Cores
app.use(cors());

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
require("./src/db/conn");

const ranks = require("./src/models/userSchema");
app.use(express.json());
app.use(require("./src/router/auth"));


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
