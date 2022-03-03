var mysql = require("mysql");
const express = require("express");
app = express();
var bodyParser = require("body-parser");

// Api for fetching data from the database in nodejs

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydata",
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/detail.html");
});
// post method for save data into database with the help of post method
app.post("/form1", (req, res) => {
  //   res.send(req.body);
  var sql = `INSERT INTO fulldetail (name,age) VALUES ('${req.body.name}', '${req.body.age}')`;
  con.query(sql, function (err, data) {
    if (err) throw err;
    console.log("User dat is inserted successfully ");
    console.log(req.body, "dsfdsfdsfsdfdsf");
    res.end("jdj");
  });
});
app.listen(4000);
