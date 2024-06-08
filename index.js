const express = require("express");
const mysql = require("./database");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connection.connect((err) => {
//   if (err) {
//     console.log("DB connection Error from code", err);
//   } else {
//     console.log("DB connected successfully");
//   }
// });

// var sql = "CREATE TABLE blogs (title VARCHAR(255), content VARCHAR(255))";
// connection.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Blogs Table created successfully");
// });

app.get("/", (req, res) => {
  res.send("Express on Vercel - updated new");
});

app.get("/blogs", async (req, res) => {
  var sql = "SELECT * FROM blogs";
  console.log("Started executing the query");
  const resp = await mysql.query(sql);
  console.log("Ended executing the query");
  mysql.end();
  res.status(200).send(resp);
});

module.exports = app;
