const express = require('express');
const mysql = require('mysql2');

const DB = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.PSW,
  database: process.env.DBNAME
  
});





module.exports = DB;