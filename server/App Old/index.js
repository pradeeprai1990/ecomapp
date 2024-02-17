const express = require('express')
let router=express.Router();
let app=express();

let categoryRoute=require("./route/categoryRoute")

router.use(categoryRoute)
//router.use(multer)
module.exports=router;