'use client'
import React, { useState } from 'react'

export default function viewproduct() {
    
 
return (
  <div className='container app-content py-5'>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-12 py-3  my-4'>
              <div className="product-table">
              <table className=" table table-striped table-bordered " style={{width:"95%"}}>
                    <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Product Amount</th>
                        <th>Product Discount</th>
                        <th>Total</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>1</td>
                        <td>Men</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>Image</td>
                        <td>1</td>
                        <td><button>Delete</button></td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>2</td>
                        <td>Women</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>Image</td>
                        <td>1</td>
                        <td><button>Delete</button></td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>3</td>
                        <td>Kids</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>All Collection</td>
                        <td>Image</td>
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
  