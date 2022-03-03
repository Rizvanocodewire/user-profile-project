const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calculator.html", { name: "rizvna" });
});

app.post("/Add", function (req, res) {
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);

  const result = number1 + number2;
  console.log(result);
  res.render(__dirname + "/calculator.html", { result: result });
});

app.post("/Sub", function (req, res) {
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);
  const result = number1 - number2;
  res.render(__dirname + "/calculator.html", { result: result });
});
app.post("/mul", function (req, res) {
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);
  const result = number1 * number2;
  res.render(__dirname + "/calculator.html", { result: result });
});

app.post("/div", function (req, res) {
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);
  const result = number1 / number2;
  res.render(__dirname + "/calculator.html", { result: result });
});

app.listen(5050);
console.log("listening on the port 5050");
