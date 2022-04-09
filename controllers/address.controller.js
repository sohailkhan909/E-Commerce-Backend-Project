const addSchema = require("../models/address") //schema 

const addInsert = (req, res)=>{
    let addCity = req.body.city;
    let addPin = req.body.pincode;
    let address = req.body.Address;
    let isPer = req.body.isPermanant;
    let alladd = new addSchema({city:addCity, pincode:addPin, Address:address, isPermanant:isPer})
    console.log(alladd);
    alladd.save((err, result)=>{
        if (err) {
            return res.status(401).json({msg:"Not insert Address", errr:err})
        } else {
            return res.status(200).json({msg:"Address inserted Successfully", reslt:result})
        }
    })
}


const AddallList = (req, res)=>{
    addSchema.find((err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Data Not Found", error:err})
        } else {
            return res.status(302).json({msg:"All Address Found", result:result})
        }
    })
} 

const selectedAddress = (req, res)=>{
    let addId= req.params.id
    addSchema.findById({_id:addId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"Id Find Successfully", result:result})
        }
    })
}

const updateOne = (req,res)=>{
    let addId = req.params.id;
    let updateCity = req.body.city;
    let updatePin = req.body.pincode;
    let updateAddress = req.body.Address;
    let updateData = {id:addId, city:updateCity, pincode:updatePin, Address:updateAddress}
    console.log(updateData);
    addSchema.findOneAndUpdate({_id:addId}, updateData, (err,result)=>{
        if(err){
            return res.status(304).json({msg:"Not Modify",error:err})
        }else{
            return res.status(200).json({msg:"address Update successfully",result:result})
        }
    })
}


const deleteone = (req, res)=>{
    let addId = req.params.id;
    addSchema.findByIdAndDelete({_id:addId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete Address Via Id", result:result})
        }
    })
}
module.exports = {addInsert, AddallList, selectedAddress, updateOne, deleteone}