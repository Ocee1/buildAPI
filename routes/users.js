var express = require('express');
var router = express.Router();
const DB = require('../services/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/register')
.post( async (req, res) => {
  const { name, email, password } = req.body;
  
  

  DB.query(`SELECT email FROM users WHERE email = ?`, email, async (error, results) => {
    if (error) res.json(error);

    // if (!results) {
        
    // }

    if(results.length > 0) {
      res.json({msg: "email already in use"});
    }

      
    let hashedPassword = await bcrypt.hash(password, 8);
    const sql = `INSERT INTO users(name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}')`;
    DB.query(sql, (err, result) => {
      // console.log(name)
      // console.log({err})
      if(err) {
        return res.status(400).json({err});
      }
      res.json({msg: 'successfully registered!'});
    });
    console.log(results);

  })
});

router.route('/login')
.post(async (req, res, next) => {
  const {email, password } = req.body;

  try {
    if (email.trim() === '' || password.trim() === '') {
      return res.status(400).json({ msg: 'Email or password must not be empty'});
    }

    DB.query("SELECT * FROM users WHERE email=?", email, (err,result)=>{

      if(err){
        return res.status(400).json({
          msg:err
        })
      }

      //check whether the user with that email exists or not
      if(result.length === 0){
        return res.status(401).json({
          msg:'email or password is incorrect'
        })
      }

      //check password
      bcrypt.compare(password, result[0].password).then(isMatch => {
          
        if(isMatch === false) {
          return res.status(401).json({
            msg:"Password is incorrect "
          })
        }

        //generate token
        const token = jwt.sign({ id: result[0].user_id.toString() }, process.env.SECRET_KEY)   
          return res.status(200).json({
          msg:"logged in successfully",
          // user:result[0],
          token
        });
      });
    });
  } catch (error) {
    next(error);
  }
});


module.exports = router;