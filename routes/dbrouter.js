var express = require('express');
var router = express.Router();
const DB = require('../services/config');
const mysql = require('mysql2');

router.route('/')
.get((req, res, next) => {
    res.render('db', { title: 'Build API'})
})

router.route('/create') 
.get((req, res, next) => {
    let sql = 'CREATE DATABASE vendorsdb';
    try {
        DB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('db created');
        });
    } catch (error) {
        next(error);
    }
});

router.route('/usertable')
.get((req, res, next) => {
    try {
        let sql = 'CREATE TABLE users(user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100), password VARCHAR(100))';
        DB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('table created');
        });
    } catch (error) {
        next(error);
    }
});
  
router.route('/itemsTable')
.get((req, res, next) => {
    let sql = 'CREATE TABLE items(item_Id INT NOT NULL AUTO_INCREMENT, item_name VARCHAR(255), price INT, vendor_Id INT, PRIMARY KEY(item_Id), FOREIGN KEY(user_Id) REFERENCES users(user_Id)';
    try {
        DB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('items table created');
        });
    } catch (error) {
        next(error);
    }
});


module.exports = router;