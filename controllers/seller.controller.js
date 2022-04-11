const sellerSchema = require ("../models/seller.schema"); // seller Schema

const addSeller = (req, res)=>{
    let addId = req.body.addressId; //address collection id via seller schema 
    let sellname = req.body.name;
    let sellShop = req.body.shopName;
    let sellnum = req.body.number;
    let sellemail = req.body.email;
    let sellpass = req.body.password;
    let sellerAll = new sellerSchema({addressId:addId, name:sellname, shopName:sellShop, number:sellnum, email:sellemail, password:sellpass})
    console.log(sellerAll);
    sellerAll.save((err, result)=>{
        if (err) {
            return res.status(401).json({msg:"Seller Not insert", errr:err})
        } else {
            return res.status(200).json({msg:"Seller inserted Successfully", reslt:result})
        }
    })
}

const allSeller = (req, res)=>{
    sellerSchema.find((err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Data Not Found", error:err})
        } else {
            return res.status(302).json({msg:"All Seller Names Find", result:result})
        }
    }).populate("addressId")
}

const selectedSeller = (req, res)=>{
    let sellId= req.params.id
    sellerSchema.findById({_id:sellId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"seller Available", result:result})
        }
    }).populate("addressId")
}

const updateAll = (req,res)=>{
    let sellId = req.params.id;
    let updateName = req.body.name;
    let updateShop = req.body.shopName;
    let updatenum = req.body.number;
    let updateEmail = req.body.email;
    let updatepass = req.body.password;
    let updateData = {id:sellId, name:updateName, shopName:updateShop, number:updatenum, email:updateEmail, password:updatepass}
    console.log(updateData);
    sellerSchema.findOneAndUpdate({_id:sellId}, updateData, (err,result)=>{
        if(err){
            return res.status(304).json({msg:"Not Modify",error:err})
        }else{
            return res.status(200).json({msg:"Seller Details Update successfully",result:result})
        }
    })
}

const deleteSeller = (req, res)=>{
    let sellId = req.params.id;
    sellerSchema.findByIdAndDelete({_id:sellId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete Seller Via Id", result:result})
        }
    })
}

module.exports = { addSeller, allSeller,selectedSeller,updateAll,deleteSeller };