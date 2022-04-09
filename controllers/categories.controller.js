const CatSchema = require("../models/Categories");

const insertCategories = (req, res)=>{
    let catname = req.body.name;
    let catActive = req.body.Active;
    let date = req.body.dateCreate;
    let cate = new CatSchema({name:catname, Active:catActive, dateCreate:date})
    console.log(cate);
    cate.save((err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Categories Insert Error", error:err})
        } else {
            return res.status(201).json({msg:"insert Categories Successfull", result:result})
        }
    })
}

const activeStatus = (req, res)=>{
    let catId = req.params.id;
    let activeStatus = req.body.Active;
    console.log(activeStatus);
    let change = {Active:activeStatus}
    CatSchema.findOneAndUpdate({_id:catId}, change,(err, result)=>{
        if (err) {
            return res.status(400).json({msg:"not find", err:err})
        } else {
            return res.status(200).json({msg:"change active status", result:result})
        }
    })
}

const nameUpdate = (req, res)=>{
    let catId = req.params.id;
    let changeName = req.body.name;
    let change = {name:changeName}
    CatSchema.findOneAndUpdate({_id:catId}, change,(err, result)=>{
        if (err) {
            return res.status(400).json({msg:"not find", err:err})
        } else {
            return res.status(200).json({msg:"Update Name", result:result})
        }
    })
}

const searchById = (req, res)=>{
    let catId= req.params.id
    CatSchema.findById({_id:catId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"Cateries alvailble", result:result})
        }
    })
}


const deleteCat = (req, res)=>{
    let catId = req.params.id;
    CatSchema.findByIdAndDelete({_id:catId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete Categories Via Id", result:result})
        }
    })
}
module.exports = { insertCategories, activeStatus, nameUpdate, searchById, deleteCat }