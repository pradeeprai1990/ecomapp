const express = require('express')
let cors=require('cors');
let multer  = require('multer');
//let img=require('../../uploads/category')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/category')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime()+file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

let categoryController=require("../controller/categoryController")

let router=express.Router();
// router.post("/add-category",categoryController.addCategory)


router.get("/view-category",categoryController.viewCategory)

router.get("/delete-category/:id",categoryController.deleteCategory)

router.post("/delete-all-category/",categoryController.deleteAllCategory)

router.get("/view-update-category/:id",categoryController.viewUpdateCategory)

router.post("/add-category/:id([0-9a-fa-f]{24})?",upload.single('cat_Img'),categoryController.addCategory)

module.exports=router;