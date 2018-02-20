const swag=require('../models/swag');

module.exports={
    read:(req,res,send)=>{
        res.status(200).send(swag);
    }
};