
let express=require("express");
let categoryModels=require("../models/categoryModels")
let fs=require("fs");


exports.addCategory=(async(req,res)=>{
    //console.log(req.body)
    let data={
        cat_Name:req.body.cat_Name,
        cat_Des:req.body.cat_Des,
        cat_Img:req.file.filename,
        cat_Status:req.body.cat_Status,
        }
        let cat_ID=req.params.id;
        //console.log(cat_ID)
       if(cat_ID===undefined)
       {
        let dataInsert=await categoryModels(data)
        dataInsert.save().then((insertRes)=>{
            res.send(insertRes)
        })
        .catch((error)=>{
            res.send(error)
        })
       }
       else{
        await categoryModels.findOneAndUpdate({_id:cat_ID}, {$set:data});
         res.send({"Status":1,"msg":"Data Updated..."});
       }
       
    
})


exports.viewCategory=(async(req,res)=>{
    let cat_Name=req.query.cname;
    let categoryData;
    let categoryDataLen;
    let pageNumber=req.query.pageNumber;
    
    //console.log(req.params)
    //console.log("query",req.query)
    let skip;
    let limit=5;
    if(pageNumber===undefined || pageNumber===1 || pageNumber<=0 ){
        skip=0;
    }
    else{
        skip=(pageNumber-1)*limit;
    }
    if(cat_Name===undefined){
        categoryDataAll=await categoryModels.find();
        categoryDataLen=await categoryModels.find();
        categoryData=await categoryModels.find().skip(skip).limit(limit);
    }
    else{
        //await categoryModels.index({ cat_Name: "text", cat_Des: "text" });
        categoryDataAll=await categoryModels.find(); 
        categoryDataLen=await categoryModels.find();
        categoryData=await categoryModels.find({cat_Name: new RegExp(cat_Name, 'i')});
        //console.log(categoryData)
    }
    
    let imgStaticPath="http://localhost:8000/uploads/category/";
    res.send({"categoryDataAll":categoryDataAll,"categoryData":categoryData,"catImageStaticPath":imgStaticPath,"tot":categoryDataLen.length})
    //console.log(categoryDataLen.length)
})

exports.deleteCategory=(async(req,res)=>{
    let id=req.params.id;

    let checkDeletedData=await categoryModels.findOne({_id:id});
    //console.log(checkDeletedData)
    //console.log(checkDeletedData)
    // let aid=checkDeletedData._id.valueOf();
    fs.unlinkSync(`./uploads/category/${checkDeletedData.cat_Img}`)

    categoryModels.deleteOne({_id:id})
    .then((finalRes)=>{
        res.send({"Status":1,finalRes})
    })
    .catch((error)=>{
        res.send(error)
    })
})



exports.deleteAllCategory=(async(req,res)=>{

   
    let catId=req.body.id;
    let checkDeletedData;
    // catId.map(async(v,i)=>{
    //     //console.log(v)
    //     checkDeletedData=await categoryModels.find({ _id: { $in: v } });
    //     console.log(checkDeletedData[0].cat_Img)
    //     //fs.unlinkSync(`./uploads/category/${checkDeletedData[0].cat_Img}`)
    // })
    
    checkDeletedData=await categoryModels.find({_id: {$in:req.body.id}})
    //console.log(checkDeletedData)
    checkDeletedData.map((v,i)=>{
       // console.log(v.cat_Img)
        fs.unlinkSync(`./uploads/category/${v.cat_Img}`)
    })

 
   categoryModels.deleteMany({ _id: { $in: req.body.id } })
   .then((finalRes)=>{
    res.send(finalRes)
    })
    .catch((error)=>{
        res.send(error)
    })
})


exports.viewUpdateCategory=(async(req,res)=>{
    let cat_ID=req.params.id;
    //console.log(req.params)
    let updateData=await categoryModels.findOne({_id:cat_ID}) 
    res.send({"cat_Status":1,"updateData":updateData})
})


