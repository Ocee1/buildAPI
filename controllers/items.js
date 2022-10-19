const Users = require('../models/vendor');

const getItems = async (req, res) => {
    
    try {
        const users = await Users.findById(req.params.id)
        // console.log(users)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users.items)
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

const createItems = async (req, res) => {
    try {
        const users = await Users.create(req.body);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json({ users });
    }
    catch(error) {
        res.status(500).json({msg: error})
    }
}

const getVendors = async (req, res) => {
    try {
        const vendors = await Users.find({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json({ vendors });
    } catch(error) {
        res.status(500).json({msg: error})
    }
}
module.exports = {
    getItems,
    createItems,
    getVendors
}