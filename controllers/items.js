const DB = require('../services/config');

// const createvendor = async (req, res) => {
//     const data = req.body;
//     try {
//         const result = await DB.query(`INSERT INTO vendors(name) VALUES(${data.name})`);

//         let message = 'Error in creating Vendor!';
//         if(result.affectedRows) {
//             console.log(result);
//             message = 'Created successfully';
//         };

//         res.json({message});

//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// };

const createitems = (req, res) => {
    const data = {
        item_name: req.body.name,
        price: req.body.price,
        user_Id: req.body.user_Id
    };
    try {
        DB.query(`INSERT INTO items (item_name, price, user_Id) VALUES ('${data.item_name}', '${data.price}', '${data.user_Id}')`, (err, result) => {
            if(err) throw err;
            let message = 'Error in creating Vendor!';
            console.log('successful')
            // if(result.affectedRows) {
            //     console.log(result);
            //     message = 'Created successfully';
            // };
            res.json({result});
        });
                
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error });
    };
};

const getAllItems = async (req, res) => {
    
    try {
        DB.query(`SELECT * FROM items`, (err, results) => {
            if(err) throw err;
            
            res.json({results});
        })
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
};

const getVendorItems = async (req, res) => {
    try {
        DB.query(`SELECT * FROM items WHERE user_Id = '${req.params.id}'`, (err, results) => {
            if(err) throw err;
            res.json({results});
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        
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
    createitems,
    getAllItems,
    getVendorItems
    // createDataB,
    // createtable
};