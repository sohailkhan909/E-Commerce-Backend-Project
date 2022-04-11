const SubCatSchema = require("../models/sub.cat");

const addSubcat = (req, res)=>{
    let subcatname = req.body.name;
    let subcatActive = req.body.Active;
    let subdate = req.body.dateCreate;
    let subcate = new SubCatSchema({name:subcatname, Active:subcatActive, dateCreate:subdate})
    console.log(subcate);
    subcate.save((err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Sub Categories Insert Error", error:err})
        } else {
            return res.status(201).json({msg:"Sub Categories Insert Successfull", result:result})
        }
    })
}

const changeActiveStatus = (req, res)=>{
    let subcatId = req.params.id;
    let activeStatus = req.body.Active;
    console.log(activeStatus);
    let change = {Active:activeStatus}
    console.log(change);
    SubCatSchema.findOneAndUpdate({_id:subcatId}, change,(err, result)=>{
        if (err) {
            return res.status(400).json({msg:"not find", err:err})
        } else {
            return res.status(200).json({msg:"Sub Categories active status Change", result:result})
        }
    })
}

const changeName = (req, res)=>{
    let subcatId = req.params.id;
    let changeName = req.body.name;
    let change = {name:changeName}
    SubCatSchema.findOneAndUpdate({_id:subcatId}, change,(err, result)=>{
        if (err) {
            return res.status(400).json({msg:"not find", err:err})
        } else {
            return res.status(200).json({msg:"Sub Categories Update Name", result:result})
        }
    })
}

const findOne = (req, res)=>{
    let subcatId= req.params.id
    SubCatSchema.findById({_id:subcatId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"find sub categories", result:result})
        }
    })
}

const deleteOne = (req, res)=>{
    let catId = req.params.id;
    SubCatSchema.findByIdAndDelete({_id:catId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete sub Categories Via Id", result:result})
        }
    })
}

module.exports = {addSubcat, changeActiveStatus, changeName, findOne, deleteOne}