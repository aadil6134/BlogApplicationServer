const express = require("express");
const connection = require("./database");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connection.connect((err) => {
  if (err) {
    console.log("DB connection Error");
  } else {
    console.log("DB connected successfully");
  }
});

// var sql = "CREATE TABLE blogs (title VARCHAR(255), content VARCHAR(255))";
// connection.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Blogs Table created successfully");
// });

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/blogs", (req, res) => {
  var sql = "SELECT * FROM blogs";

  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.status(200).json(result);
  });
});

module.exports = app;
