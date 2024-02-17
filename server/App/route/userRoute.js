const express = require('express')

let cors=require('cors');
let multer  = require('multer'); 
let verifyToken=require("../middleware/verifyToken")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/category')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime()+file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

let userController=require("../controller/userController")

let router=express.Router();
router.post("/website/add-user",userController.addUser)
router.get("/website/view-user",userController.viewUser)
router.post("/website/login",userController.loginUser)



router.get("/website/userlist",verifyToken.verifyToken,userController.userList);

//router.get("/website/active-user",userController.activeUser)



module.exports=router;