const dbConnection = require("./db_connection");
const fs = require("fs");
const path = require("path");

const buildLink = path.join(__dirname, "db_build.sql");
const sql = fs.readFileSync(buildLink).toString();

module.exports = () =>
  dbConnection.query(sql, (err, res) => {
    console.log("db created", err, res);
  });
