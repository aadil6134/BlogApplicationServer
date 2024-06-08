// const mysql = require('mysql');

// const conn = mysql.createConnection({
//   host: "SG-myApps-8768-mysql-master.servers.mongodirector.com",
//   user: "bloguser",
//   password: "Bloguser@123",
//   database: "blogdata",
//   port: 3306,
// });

// module.exports = conn;

const mysql = require("serverless-mysql")({
  config: {
    host: "SG-myApps-8768-mysql-master.servers.mongodirector.com",
    database: "blogdata",
    user: "bloguser",
    password: "Bloguser@123",
    port: 3306,
  },
});
module.exports = mysql;