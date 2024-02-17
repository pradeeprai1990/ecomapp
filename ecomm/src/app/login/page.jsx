'use client'
import { loginContext } from '@/Context/MainContext';
import { red } from '@mui/material/colors';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';

export default function page() {
    let {tokenValue,setTokenValue}=useContext(loginContext);
    let [editData,setEditData]=useState({
        uemail:'',
        upassword:'',
        id:''
      });
     
      
      let handleData = (e) => {
      let inputData={...editData};
      inputData[e.target.name]=e.target.value;
      editData.id=1
      setEditData(inputData);
     // console.log(inputData)
      };
      
      let getData=(event)=>{
        event.preventDefault();
        let email=event.target.uemail.value;
        
		let oldData=JSON.parse(localStorage.getItem('uemail')) ?? [];
		oldData.push(email);

        localStorage.setItem('uemail',JSON.stringify(oldData));
        //let form=event.target;
        //console.log(form)
        //let formData=new FormData(form);
        //console.log(formData)
        axios.post('http://localhost:8000/website/login',{
            "uemail":event.target.uemail.value,
            "upassword":event.target.upassword.value
        })
        .then((res)=>{
          console.log(res);
          let token=res.data.token;
          console.log(token)
          setTokenValue(token);
          localStorage.setItem('token',token);
          
          if(res.data.userData!==null){
              alert("Login Successfully.....")
              return{
                redirect:{
                    permanent:false,
                    destination :  'http://google.com'
                }
              }
          }
          else{
              alert("Email ID or Password doesn't Exists....")
          }
          
        })
        setEditData({
            uemail:'',
            upassword:'',
            id:''
        })

        
      }
      
      let viewUser=()=>{

        let token=localStorage.getItem('token');
        axios.get('http://localhost:8000/website/userList',{
            headers:{
                Authorization: 'Bearer ' + token
            }
        }).then(res=>{
            
            console.log(res.data)
        })

      }

      useEffect(()=>{
        if(tokenValue!=''){
            redirect("/");
        }
      },[tokenValue])


return (
    <div className='container'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6 p-3 m-auto my-5'>
                <div className="login-form">
                    <form onSubmit={getData} autoComplete="off" className='p-4'>
                    <h1 className='my-2'>Login Here</h1>
                    <div className="form-input">
                    <label className='my-3 fs-2'>Email</label>
                    <input
                    type="email"
                    name="uemail"
                    value={editData.uemail}
                    width="50%"
                    placeholder="Enter your email..."
                    onChange={handleData}
                    />
                    </div>
                    <div className="form-input">
                    <label className='my-3 fs-2'>Password</label>
                    <input
                    type="password"
                    name="upassword"
                    value={editData.upassword}
                    placeholder="Enter a strong password..."
                    onChange={handleData}
                    />
                    </div>
                    <button type="submin" className='my-5 p-3'>Submit</button>

                    </form>

                    <button className='btn btn-primary p-3 m-2' onClick={viewUser}>View User</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    
 
)
}
