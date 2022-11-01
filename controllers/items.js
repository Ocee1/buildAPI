const DB = require('../models/config');

const createvendor = async (req, res) => {
    const data = req.body;
    try {
        const result = await DB.query(`INSERT INTO vendors(name) VALUES(${data.name})`);

        let message = 'Error in creating Vendor!';
        if(result.affectedRows) {
            console.log(result);
            message = 'Created successfully';
        };

        res.json({message});

    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createitems = async (req, res) => {
    const data = {
        name: req.body.name,
        price: req.body.price,
        vendorId: req.body.vendorId
    };
    try {
        const result = await DB.query(`INSERT INTO items(name, price, vendorId) VALUES(${data.name}, ${data.price}, ${data.vendorId})`);

        let message = 'Error in creating Vendor!';
        if(result.affectedRows) {
            console.log(result);
            message = 'Created successfully';
        };

        res.json({message}, {result});
        
    } catch (error) {
        res.status(500).json({ msg: error });
    };
};
const getAllItems = async (req, res) => {
    
    try {
        const items = await DB.query(`SELECT * FROM items`)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({items});
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
};

const getVendorItems = async (req, res) => {
    try {
        const item = DB.query(`SELECT * FROM items WHERE vendorId = ${req.params.id}`);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({items});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

// const createItems = async (req, res) => {
//   itemId, name, price, vendorId
//     try {
//         const users = await Users.create(req.body);
//         res.statusCode = 201;
//         res.setHeader('Content-Type', 'application/json');
//         res.json({ users });
//     }
//     catch(error) {
//         res.status(500).json({msg: error})
//     }
// }
// const deleteItems = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const users = await Users.findByIdAndRemove({_id: id})
//     }
//     catch(error) {
//         res.status(500).json({msg: error});
//     }
// }

// const getVendors = async (req, res) => {
//     try {
//         const vendors = await Users.find({});
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json')
//         res.json({ vendors });
//     } catch(error) {
//         res.status(500).json({msg: error})
//     }
// }


module.exports = {
    createvendor,
    createitems,
    getAllItems,
    getVendorItems
    // createDataB,
    // createtable
};