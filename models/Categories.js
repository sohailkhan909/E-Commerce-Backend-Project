const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true,
        unique:true
    },
    Active:{
        type:Boolean,
        default:true
    },
   dateCreate:{
        type:Date,
        default:Date.now()
   }
   
});

const CatSchema = mongoose.model("Categories", modelSchema);
module.exports = CatSchema;