const addSchema = require("../models/address") //schema 

const addInsert = (req, res)=>{
    let addsellerId = req.body.sellerId
    let addCity = req.body.city;
    let addPin = req.body.pincode;
    let address = req.body.Address;
    let addstate = req.body.state;
    let addcountry = req.body.country;
    let countrycode = req.body.countrycode;
    let isPer = req.body.isPermanant;
    let alladd = new addSchema({sellerId:addsellerId, city:addCity, pincode:addPin, Address:address, state:addstate, country:addcountry, countrycode:countrycode, isPermanant:isPer})
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
    }).populate("sellerId")
} 

const selectedAddress = (req, res)=>{
    let addId= req.params.id
    addSchema.findById({_id:addId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"Id Find Successfully", result:result})
        }
    }).populate("sellerId")
}

const updateOne = (req,res)=>{
    let addId = req.params.id;
    let updateCity = req.body.city;
    let updatePin = req.body.pincode;
    let updateAddress = req.body.Address;
    let updatestate = req.body.state;
    let updatecountry = req.body.country;
    let code = req.body.countrycode
    let updateData = {id:addId, city:updateCity, pincode:updatePin, Address:updateAddress,state:updatestate,country:updatecountry, countrycode:code}
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