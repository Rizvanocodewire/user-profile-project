const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

var mysql = require("mysql");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "userprofile",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/register.html");
});
app.post("/register", function (req, res) {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const email = req.body.email;
  const password = req.body.password;

  const sql = `INSERT INTO user(user_id,name,age,gender,email,password) VALUES ('0','${name}','${age}','${gender}','${email}','${password}')`;

  con.query(sql, function (err, data) {
    if (err) throw err;

    // console.log(data);
    res.sendFile(__dirname + "/login.html");
  });
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  con.query(
    `SELECT * FROM user WHERE email='${email}' AND password='${password}'`,
    function (error, result) {
      if (error) {
        console.log("error");
      } else {
        console.log(result);
      }
    }
  );
  res.send("welcome");
});

app.listen(5500);
console.log("listening on the port ");
