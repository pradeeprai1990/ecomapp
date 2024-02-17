const mongoose = require('mongoose'); 
let catSchema=new mongoose.Schema(
    {
    cat_Name:{
        type:String,
        required:true,
       
    },
    cat_Des:{
        type:String,
        required:true,
    },
    cat_Img:{
        type:String,
        required:true,
    },
    cat_Status:{
        type:Boolean,
        required:true,
    },
    
},
{
    timestamps:true
}
)
let category=mongoose.model('category',catSchema)
module.exports=category;