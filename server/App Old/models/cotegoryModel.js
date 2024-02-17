const mongoose = require('mongoose');

const category_Schema=new mongoose.Schema(
    {
        cat_Name:{
            type:String,
            required:true
        },
        cat_Des:{
            type:String,
            required:true
        },
        cat_Img:{
            type:String,
            required:true
        },
        cat_Status:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
)
let category=mongoose.model('category',category_Schema)
module.exports=category;
