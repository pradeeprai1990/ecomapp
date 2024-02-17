const express = require('express')

let router=express.Router();
let app=express();

let categoryRoute=require("./route/categoryRoute")
let userRoute=require("./route/userRoute");
router.use(categoryRoute)
router.use(userRoute)
//router.use(multer)
module.exports=router;