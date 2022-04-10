const express =require ("express"); // express require

const db = require("../E-Commerce-Backend-Project/Database/db"); //database add

const app = express(); // express call

app.use(express.json());//middleware js to json /json to js

const Address_route = require("../E-Commerce-Backend-Project/routes/address.route"); //Address route
const Categories_routes = require("../E-Commerce-Backend-Project/routes/categories.routes"); //categroies route
const seller_route = require("../E-Commerce-Backend-Project/routes/seller.route") //seller route
const SubCatSchema = require("../E-Commerce-Backend-Project/models/sub.cat")

//address APi

app.use("/addresspath1", Address_route);//insert address

app.use("/showAllAddress",Address_route);//show all address

app.use("/selectedaddresses", Address_route);//show selected id

app.use("/updateone", Address_route);// Update by Id

app.use("/deleteOne", Address_route);//delete api





//Seller Apis

app.use("/sellerAdd", seller_route)//seller add ap

app.use("/showAllSeller", seller_route)//show all seller names

app.use("/search_seller", seller_route )//find by id seller

app.use("/upToDateSeller",seller_route)// Update by Id

app.use("/dellSeller", seller_route)



//categories apis

app.use("/catInsert", Categories_routes);//insert cat

app.use("/changeStatus", Categories_routes);//change cat active status

app.use("/name_update", Categories_routes);//cat name update

app.use("/findname", Categories_routes);//cat get detail by id

app.use("/deletecat", Categories_routes )//cat delete by id



//sub Categories

app.post("/subcategories", (req, res)=>{
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
})

app.put("/ActiveStatus/:id", (req, res)=>{
    let subcatId = req.params.id;
    let activeStatus = req.body.Active;
    console.log(activeStatus);
    let change = {Active:activeStatus}
    SubCatSchema.findOneAndUpdate({_id:subcatId}, change,(err, result)=>{
        if (err) {
            return res.status(400).json({msg:"not find", err:err})
        } else {
            return res.status(200).json({msg:"Sub Categories active status Change", result:result})
        }
    })
})


app.put("/updatename/:id", (req, res)=>{
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
})

app.get("/getdetailsById/:id", (req, res)=>{
    let subcatId= req.params.id
    SubCatSchema.findById({_id:subcatId}, (err, result)=>{
        if (err) {
            return res.status(404).json({msg:"Not Found", error:err})
        } else {
            return res.status(200).json({msg:"find sub categories", result:result})
        }
    })
})

app.delete("/deleteById/:id", (req, res)=>{
    let catId = req.params.id;
    SubCatSchema.findByIdAndDelete({_id:catId}, (err, result)=>{
        if (err) {
            return res.status(400).json({msg:"Not Found", err:err})
        } else {
            return res.status(200).json({msg:"Delete sub Categories Via Id", result:result})
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
});