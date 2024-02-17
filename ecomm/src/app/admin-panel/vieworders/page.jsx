'use client'
import React, { useState } from 'react'

export default function vieworders() {
    
 
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
                        <th>Order ID</th>
                        <th>User Name</th>
                        <th>Order Total Amount</th>
                        <th>Order Product Quantity</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="gradeX">
                        <td><input type="checkbox"/></td>
                        <td>1</td>
                        <td>Poonam</td>
                        <td>5000</td>
                        <td>4</td>
                        <td>Jind,Haryana</td>
                        <td>4546546546</td>
                        <td>1</td>
                        <td><button>Delete</button></td>
                        <td><button>Edit</button></td>
                    </tr>
                    
                    </tbody>
                </table>
              </div>
              </div>
          </div>
      </div>
  </div>
  

)}
  