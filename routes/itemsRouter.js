const express = require('express');
const { createitems, getAllItems, getVendorItems} = require('../controllers/items');
const bodyParser = require('body-parser');
const auth = require('../auth')


// const Item = require('./controllers/User')

var itemRouter = express.Router();


itemRouter.route('/create-items')
.post(auth, createitems);


itemRouter.route('/allItems')
.get(getAllItems);

itemRouter.route('/vendor')
.get(getVendorItems);
// .delete(deleteItems)



module.exports = itemRouter;