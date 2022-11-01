var express = require('express');
var router = express.Router();
const DB = require('../models/config');

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

router.route('/vendortable')
.get((req, res, next) => {
    try {
        let sql = 'CREATE TABLE vendors(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100)';
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
    let sql = 'CREATE TABLE items(itemId INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), price INT, vendorId INT, PRIMARY KEY(itemId), FOREIGN KEY(vendorId) REFERENCES vendors(id)';
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