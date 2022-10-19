const express = require('express');
const { getItems, createItems, getVendors } = require('../controllers/items');
const bodyParser = require('body-parser');

// const Item = require('./controllers/User')

var itemRouter = express.Router();

itemRouter.route('/')
.get(getVendors)
.post(createItems)

itemRouter.route('/:id/items')
.get(getItems)



module.exports = itemRouter;