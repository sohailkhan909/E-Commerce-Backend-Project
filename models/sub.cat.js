const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    catId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories"
    },
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

const SubCatSchema = mongoose.model("Sub Categories", modelSchema);
module.exports = SubCatSchema;