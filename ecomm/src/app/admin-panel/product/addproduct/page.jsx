'use client'
import React, { useState } from 'react'

export default function addproduct() {
    
  let [categoryInput,setCategoryInput]=useState("");
  let [descInput,setDescInput]=useState("");
  let [nameInput, setNameInput] = useState("");
  let [priceInput,setPriceInput]=useState("");
  let [qtyInput,setQtyInput]=useState("");
  let [amountInput,setAmountInput]=useState("");
  let [discountInput,setDiscountInput]=useState("");
  let [totalInput,setTotalInput]=useState("");
  let [pimageInput,setPimageInput]=useState("");
  
  let handleFormSubmit = (e) => {
  e.preventDefault();
  alert("Form Submitted.....");
  };
return (
  <div className='container app-content py-5'>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-7 p-3  my-4'>
              <div className="product-form">
                  <form onSubmit={handleFormSubmit} autoComplete="off" className='p-4'>
                  <h1 className='my-2'>Add Product</h1>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Product Category Name</label>
                  <select
                  type="text"
                  name="categoryname"
                  value={categoryInput}
                  width="50%"
                  placeholder="Enter Product Category..."
                  onChange={(e) => setCategoryInput(e.target.value)}
                  >
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                  </select>
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Product Name</label>
                  <input
                  type="text"
                  name="name"
                  value={nameInput}
                  width="50%"
                  placeholder="Enter your Name..."
                  onChange={(e) => setNameInput(e.target.value)}
                  />
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Product Description</label>
                  <textarea
                  rows="4"
                  type="text"
                  name="desc"
                  value={descInput}
                  width="50%"
                  placeholder="Enter your Description..."
                  onChange={(e) => setDescInput(e.target.value)}
                  />
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Product Price</label>
                  <input
                  type="text"
                  name="price"
                  value={priceInput}
                  width="50%"
                  placeholder="Enter Product Price..."
                  onChange={(e) => setPriceInput(e.target.value)}
                  />
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Product Quantity</label>
                  <input
                  type="text"
                  name="qty"
                  value={qtyInput}
                  width="50%"
                  placeholder="Enter Product Quantity..."
                  onChange={(e) => setQtyInput(e.target.value)}
                  />
                  </div>

                <div className="form-input">
                  <label className='my-3 fs-4'>Product Amount</label>
                  <input
                  type="text"
                  name="amount"
                  value={amountInput}
                  width="50%"
                  placeholder="Enter Product Amount..."
                  onChange={(e) => setAmountInput(e.target.value)}
                  />
                  </div> 

                  <div className="form-input">
                  <label className='my-3 fs-4'>Product Discount</label>
                  <input
                  type="text"
                  name="discount"
                  value={discountInput}
                  width="50%"
                  placeholder="Enter Product Discount..."
                  onChange={(e) => setDiscountInput(e.target.value)}
                  />
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Total Amount</label>
                  <input
                  type="text"
                  name="total"
                  value={totalInput}
                  width="50%"
                  placeholder="Enter Total Amount..."
                  onChange={(e) => setTotalInput(e.target.value)}
                  />
                  </div>

                  <div className="form-input mt-5">
                  <label className='my-3 fs-4'>Product Image</label>
                  <input
                  type="file"
                  name="pimage"
                  value={pimageInput}
                  width="50%"
                  placeholder="Enter Total Amount..."
                  onChange={(e) => setPimageInput(e.target.value)}
                  className='mx-3'
                  />
                  </div>
                  
                  <button className='my-5 admin-btn'>Submit</button>
                  </form>
              </div>
              </div>
          </div>
      </div>
  </div>
  

)}
  