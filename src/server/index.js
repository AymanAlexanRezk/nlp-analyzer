const dotenv = require("dotenv");
dotenv.config();
var path = require("path");

const PORT = 8081;
const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.meaningcloud.com/sentiment-2.1?";

const express = require("express");
const app = express();
const fetch = require("node-fetch");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/test", async function (req, res) {
  const inputURL = req.body.url;
  const API_URL = `${BASE_URL}key=${API_KEY}&url=${inputURL}&lang=en`;
  let response = await fetch(API_URL, { method: "POST" });
  let data = await response.json();
  console.log("Web Server Response Data Object");
  console.log(data);
  if (data && data.status.code == 0) res.send(data);
  else res.status(500).send({ message: "Server Error" });
});
