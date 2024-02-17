let express = require('express');

let router=require("./App/index"); 
const mongoose = require('mongoose');
let app=express();
let cors=require('cors');
let fs=require("fs");
//let img=require('./uploads/category')
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/uploads/category",express.static('uploads/category'));

mongoose.connect('mongodb://127.0.0.1:27017/ecomm_site')
  .then(() =>{
    app.listen("8000");
  })

