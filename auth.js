const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const DB = require('./services/config');

const auth = async (req, res, next) => {
    try{
        const idToken = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(idToken, process.env.SECRET_KEY);
        req.id = decoded.id;
        sql = "SELECT * FROM users WHERE user_id= ?";
        DB.query(sql, decoded.id,(err,result)=>{
            if(err){
              return res.status(400).json({
                msg:err})
            }
          
        return next();
        })
        
    }catch(e){
          res.status(401).json({error: "You are not authenticated."});
    }
}

module.exports = auth;
