
let express=require('express')
let jwt=require('jsonwebtoken');
let tokenKey="ecom@123!!"
let userModels=require("../models/userModels")
let fs=require("fs");

let nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "poonammunjal2020@gmail.com",
      pass: "qzsjunysdmoywbwx",
    },
  });


exports.addUser=(async(req,res)=>{
    console.log(req.body)
    let data={
        uname:req.body.uname,
        uemail:req.body.uemail,
        uphone:req.body.uphone,
        uaddress:req.body.uaddress,
        upassword:req.body.upassword,
    }


    let dataInsert=await userModels(data)
    dataInsert.save().then((insertRes)=>{
        res.send(insertRes)
        
    })
    // .catch((error)=>{
    //     res.send(error)
    // })
    .catch((error)=>{
        let re;
        if(error.keyPattern.uemail===1){
             re={
                'status':0,
                'msg':'Email Id Already exists...'
            }
        }
        else if(error.keyPattern.uphone===1){
             re={
                'status':0,
                'msg':'Phone Number Already exists...'
            }
        }
        console.log(re)
       res.send(re)
   })


   const info = await transporter.sendMail({
    from: '"Ecom Website 👻" <poonammunjal2020@gmail.com>', // sender address
    to: "poonam.munjal19@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "OTP", // plain text body
    html: `<p>
        <div>Name ${req.body.uname} </div>
        <div>Email ${req.body.uemail} </div>
        <div>Phone ${req.body.uphone} </div>
        <div>Address ${req.body.uaddress} </div>
    
    </p>`, // html body
  });


  
  res.send(info)
  
})

exports.viewUser=(async(req,res)=>{
    
    userData=await userModels.find();
    res.send({"userData":userData})
    
})


exports.loginUser=(async(req,res)=>{
    let uemail=req.body.uemail;
    let upassword=req.body.upassword;
    console.log(uemail, upassword)
    let userData=await userModels.findOne({"uemail":uemail,"upassword":upassword})

     var token =await jwt.sign( {id:userData._id} , tokenKey);
    
    res.send({"status":1,userData,token})
   
})

exports.userList=(async(req,res)=>{

    userData=await userModels.find();
    res.send({"userData":userData})
    
})

// exports.activeUser=(async(req,res)=>{
   
//     console.log(req.query)
   
//         userData=await userModels.find();
//         res.send({"userData":userData})
   
    
// })