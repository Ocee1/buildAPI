const mysql = require('mysql2');

const DB = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.PSW,
    database: process.env.DBNAME
  
  });

DB.connect ((err) => {
    if (err) throw err;
    console.log('mysql connected...');
});


module.exports = DB;