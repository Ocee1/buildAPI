const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    items: [itemSchema]
})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
