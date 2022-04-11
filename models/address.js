const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    sellerId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Sellers"
    },
    city:{
        type : String,
    },
    pincode:[{
        type:String
    }],
    Address:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    countrycode:{
        type:String
    },
    isPermanant: Boolean,
    default:false
});

const addSchema = mongoose.model("Address", modelSchema);
module.exports = addSchema;