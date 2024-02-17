const mongoose = require('mongoose'); 
let userSchema=new mongoose.Schema(
    {
    uname:{
        type:String,
        required:true
       
    },
    uemail:{
        type:String,
        required:true,
        unique:true,
    },
    uphone:{
        type:String,
        required:true,
        unique:true,
    },
    uaddress:{
        type:String,
        required:true
    },
    upassword:{
        type:String,
        required:true
    },
    
},
{
    timestamps:true
}
)
let users=mongoose.model('users',userSchema)
module.exports=users;