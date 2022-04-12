const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    addressId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    name:{
        type : String,
        required:true
    },
    shopName:{
        type:String
    },
    number: {
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const sellerSchema = mongoose.model("Sellers", modelSchema);
module.exports = sellerSchema;