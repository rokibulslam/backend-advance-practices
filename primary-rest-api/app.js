const express = require("express");
const router = require("./src/routes/api");
const app = express();
require("dotenv").config({ path: "./config.env" });
// Security Middleware
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const helemet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
// Security Middleware Implement
app.use(cors());
app.use(helemet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


app.use(bodyParser.json());
// Request Rate limitin
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
app.use(limiter);

//Mongodb Database Connection
let URL = process.env.MONGO_URL
console.log(URL);
let option = { user: '', pass: '' } 

mongoose.set("strictQuery", true);
mongoose.connect(URL, option, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database connection stablished");
  }
});
app.use("/api/v1", router);

// Undefined Route
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Route Not Found" });
});

module.exports = app;
