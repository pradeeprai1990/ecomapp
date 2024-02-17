const { ObjectId } = require("mongodb");
let categoryModels=require("../models/cotegoryModel")
let fs=require("fs");


exports.addCategory=(async(req,res)=>{
    let data={
        cat_Name:"",
        cat_Desc:"",
        cat_Img:"",
        cat_Status:"",
    }
    let dataInsert=await categoryModels(data)
    dataInsert.save().then((insertRes)=>{
        res.send(insertRes)
    })
    .catch((error)=>{
        res.send(error)
    })
})


exports.viewCategory=(async(req,res)=>{
    let categoryList=await category.find()
    res.send(categoryList)   
})

exports.deleteCategory=(async(req,res)=>{
   
})


exports.viewUpdateCategory=(async(req,res)=>{
    
})


