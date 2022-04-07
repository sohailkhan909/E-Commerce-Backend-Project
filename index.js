const express =require ("express"); // express require

const db = require("../E-Commerce-Backend-Project/Database/db"); //database add

const addSchema = require("../E-Commerce-Backend-Project/models/address")//address Schema

const sellerSchema = require("../E-Commerce-Backend-Project/models/seller.schema")
const app = express(); // express call
app.use(express.json());//middleware js to json /json to js


//address APi
//insert address
app.post("/address", (req, res)=>{
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
})

//show all address
app.get("/showAllAddress", (req, res)=>{
    addSchema.find((err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Data Not Found", error:err})
        } else {
            return res.status(302).json({msg:"All Address Found", result:result})
        }
    })
})

app.get("/addressFind/:id", (req, res)=>{
    let addId= req.params.id
    addSchema.findById({_id:addId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"Id Find Successfully", result:result})
        }
    })
})
// Update by Id
app.put("/UpdatedById/:id",(req,res)=>{
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
})

app.delete("/delete/:id", (req, res)=>{
    let addId = req.params.id;
    addSchema.findByIdAndDelete({_id:addId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete Address Via Id", result:result})
        }
    })
})

//seller add api
app.post("/sellerAdd", (req, res)=>{
    let sellname = req.body.name;
    let sellShop = req.body.shopName;
    let sellnum = req.body.number;
    let sellemail = req.body.email;
    let sellpass = req.body.password;
    let sellerAll = new sellerSchema({name:sellname, shopName:sellShop, number:sellname, email:sellemail, password:sellpass})
    console.log(sellerAll);
    sellerAll.save((err, result)=>{
        if (err) {
            return res.status(401).json({msg:"Seller Not insert", errr:err})
        } else {
            return res.status(200).json({msg:"Seller inserted Successfully", reslt:result})
        }
    })
})

//show all seller names
app.get("/showAllSeller", (req, res)=>{
    sellerSchema.find((err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Data Not Found", error:err})
        } else {
            return res.status(302).json({msg:"All Seller Names Find", result:result})
        }
    })
})


//find by id seller
app.get("/find_seller/:id", (req, res)=>{
    let sellId= req.params.id
    sellerSchema.findById({_id:sellId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"seller Available", result:result})
        }
    })
})

// Update by Id
app.put("/seller_Updation/:id",(req,res)=>{
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
})


//delete seller
app.delete("/delete_seller/:id", (req, res)=>{
    let sellId = req.params.id;
    sellerSchema.findByIdAndDelete({_id:sellId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete Seller Via Id", result:result})
        }
    })
})
//server creation
const PORT = 5000;
app.listen (PORT, (err)=>{
    if (err) {
        console.log("Server Down");
    } else {
        console.log(`Server Running on Port No. ${PORT}`);
    }
})
