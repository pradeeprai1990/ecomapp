let jwt=require('jsonwebtoken');
let tokenKey="ecom@123!!"
exports.verifyToken=(req,res,next)=>{
    let token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,tokenKey,(error,success)=>{
       if(error){
           res.send({"msg":"Token Not Verified"})
       }
       else{
        next();
       }
    })
   
   
}