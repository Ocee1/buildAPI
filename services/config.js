const mysql = require('mysql2');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'vendorsdb'
  
  });

DB.connect ((err) => {
    if (err) throw err;
    console.log('mysql connected...');
});


module.exports = DB;