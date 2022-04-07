const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    city:{
        type : String,
    },
    pincode:{
        type:Number
    },
    Address: {
        type:String
    },
    isPermanant: Boolean,
    default:false
});

const addSchema = mongoose.model("Address", modelSchema);
module.exports = addSchema;