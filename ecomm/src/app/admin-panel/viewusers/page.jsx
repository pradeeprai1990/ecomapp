'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function viewusers() {
   let [userData,setUserData]=useState([]);
   let getUser=()=>{
    
    
    
    axios.get('http://localhost:8000/website/view-user')
    .then((res)=>res.data)
    .then((finalres)=>{
        setUserData(finalres.userData);
        console.log(finalres.userData)
    })
}
//console.log(catData)
useEffect(()=>{
    getUser();
},[])

 
return (
  <div className='container app-content py-5'>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-10 p-3  my-4'>
              <div className="user-table">
              <table className="datatable table table-striped table-bordered fs-5 ">
                    <thead>
                    <tr>
                        <th>Delete</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>User E-Mail</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userData.length>0?
                            userData.map((v,i)=>{
                                return(
                                    <tr className="gradeX">
                                        <td><input type="checkbox"/></td>
                                        <td>{i+1}</td>
                                        <td>{v.uname}</td>
                                        <td>{v.uemail}</td>
                                        <td>{v.uphone}</td>
                                        <td>{v.uaddress}</td>
                                        
                                        <td>{v.upassword}</td>
                                        <td><button>Delete</button></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                )
                            })

                            :
                            <td colSpan={9}>No Data Found</td>
                        }
                    
                    
                    </tbody>
                </table>
              </div>
              </div>
          </div>
      </div>
  </div>
  

)}
  