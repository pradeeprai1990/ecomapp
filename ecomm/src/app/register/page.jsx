'use client'
import axios from 'axios';
import React, { useState } from 'react'

export default function adduser() {
    
    
    let [editData,setEditData]=useState({
      uname:'',
      uemail:'',
      uphone:'',
      uaddress:'',
      upassword:'',
      id:''
    });
   
    
    let handleData = (e) => {
    let inputData={...editData};
    inputData[e.target.name]=e.target.value;
    editData.id=1
    setEditData(inputData);
    console.log(inputData)
    };
    
    let userData=(event)=>{
      event.preventDefault();
      //let form=event.target;
      //console.log(form)
      //let formData=new FormData(form);
      //console.log(formData)
      axios.post('http://localhost:8000/website/add-user',{
                "uname":event.target.uname.value,
               "uemail":event.target.uemail.value,
               "uphone":event.target.uphone.value,
               "uaddress":event.target.uaddress.value,
               "upassword":event.target.upassword.value
              })
      .then((res)=>{
        console.log(res);
        if(res.data.status==0){
            alert("Email ID or Password Already Exists....")
        }
        else{
            alert("Data Inserted Successfully.....")
        }
        
      })
    //   setEditData({
    //     uname:'',
    //     uemail:'',
    //     uphone:'',
    //     uaddress:'',
    //     upassword:'',
    //     id:''
    //   })
      
    }
  
    
return (
    <div className='container'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6 p-3 m-auto my-5'>
                <div className="register-form p-3">
                <form onSubmit={userData} method="post" encType='multipart/form-data'>
                    <div className="mb-3">
                        <label for="uname" className="form-label">User Name</label>
                        <input type="text" value={editData.uname} onChange={handleData} 
                        name="uname" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label for="uemail" className="form-label">User Email</label>
                        <input type="text" value={editData.uemail} onChange={handleData} 
                        name="uemail" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label for="uphone" className="form-label">User Phone Number</label>
                        <input type="text" value={editData.uphone} onChange={handleData} 
                        name="uphone" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label for="uaddress" className="form-label">User Address</label>
                        <input type="text" value={editData.uaddress} onChange={handleData} 
                        name="uaddress" className="form-control" />
                    </div> 
                    <div className="mb-3">
                        <label for="upassword" className="form-label">User Password</label>
                        <input type="text" value={editData.upassword} onChange={handleData} 
                        name="upassword" className="form-control" />
                    </div>
                    
                    

                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
                </div>
            </div>
        </div>
    </div>
    
 
)
}
