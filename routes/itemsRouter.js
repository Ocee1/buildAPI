const express = require('express');
const { createvendor, createitems, getAllItems, getVendorItems} = require('../controllers/items');
const bodyParser = require('body-parser');

// const Item = require('./controllers/User')

var itemRouter = express.Router();

itemRouter.route('/create-vendor')
.post(createvendor);
itemRouter.route('/create-table')
.post(createitems);


itemRouter.route('/allItems')
.get(getAllItems);

itemRouter.route('/vendor')
.get(getVendorItems);
// .delete(deleteItems)



module.exports = itemRouter;