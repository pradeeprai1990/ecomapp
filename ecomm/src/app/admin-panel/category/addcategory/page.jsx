'use client'
import axios from 'axios';
import { useParams} from 'next/navigation';
import React, { useState } from 'react'



export default function addcategory() {
  let url=useParams();
  let catID=url.id;
  console.log(catID)
  let APIURL;
  
  if(catID===undefined){
      APIURL='http://localhost:8000/add-category';
     console.log(APIURL)
     
  }
  else{
      APIURL=`http://localhost:8000/add-category/${catID}`;
      console.log(APIURL)
      
  }
  let [status,setStatus]=useState('');
  let [editData,setEditData]=useState({
    cat_Name:'',
    cat_Des:'',
    cat_Img:'',
    cat_Status:'',
    id:''
  });
 
  
  let handleData = (e) => {
  let inputData={...editData};
  inputData[e.target.name]=e.target.value;
  editData.id=1
  setEditData(inputData);
  //console.log(inputData)
  };
  //console.log(editData)
  let categoryData=(event)=>{
    event.preventDefault();
    let form=event.target;
    console.log(form)
    let formData=new FormData(form);
    axios.post(APIURL,formData)
    .then((res)=>{
      console.log(res);
      alert("Data Inserted Successfully...")
    })
    setEditData({
      cat_Name:'',
      cat_Des:'',
      cat_Img:'',
      cat_Status:'',
      id:''
    })
    
  }

  let handleradioChecked=(event)=>{
   // console.log(event.target.value)
   editData.cat_Status=event.target.value;
    //setStatus(editData.cat_Status)
   //console.log(editData.cat_Status)

  }
  //console.log(editData)
return (
  <div className='container app-content py-5'>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-7 p-3  my-4'>
              <div className="category-form">
                  {/* <form onSubmit={categoryData} className='p-4' encType='multipart/form-data'>
                  <h1 className='my-2'>Add Category</h1>
                  <div className="form-input">
                  <label className='my-3 fs-4'>Category Name</label>
                  <input type="text" name="cat_Name" value={editData.cat_Name} width="50%" placeholder="Enter your Name..." onChange={handleData}/>
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Category Description</label>
                  <textarea rows="4" type="text" name="cat_Des" value={editData.cat_Des} width="50%" placeholder="Enter your Description..." onChange={handleData}/>
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4'>Category Image</label>
                  <input type="file" name="cat_Img" value={editData.cat_Img} width="50%" placeholder="Enter Image..." onChange={handleData} />
                  </div>

                  <div className="form-input">
                  <label className='my-3 fs-4 me-3'>Category Status</label>
                  <input type="text" name="cat_Status" value={editData.cat_Status} width="50%" placeholder="Enter Status..." onChange={handleData}/>
                  </div>
                  
                  <button type="submit" className="btn btn-primary my-4 p-2">{editData.id===""?"Send Data":"Update Data"}</button>
                  </form> */}

                <form onSubmit={categoryData} method="post" encType='multipart/form-data'>
                    <div className="mb-3">
                        <label for="categoryname" className="form-label">Category Name</label>
                        <input type="text" value={editData.cat_Name} onChange={handleData} 
                        name="cat_Name" className="form-control" />
                    </div>
                    <div className="mb-4">
                        <label for="categorydesc" className="form-label">Category Description</label>
                        <textarea className="form-control" onChange={handleData} value={editData.cat_Des} name="cat_Des" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="categoryimage" className="form-label">Category Image</label>
                        <input type="file" defaultValue={editData.cat_Img} onChange={handleData} name="cat_Img" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label for="categorystatus" className="form-label">Category Status</label><br/>
                        <input className=" form-check-input me-2 mb-2" type="radio" name="cat_Status" value="1" onChange={handleradioChecked} /> Active  <br/>
                        <input className=" form-check-input me-2" type="radio" name="cat_Status" value="0" onChange={handleradioChecked}/> De-Active    
                    </div>

                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              </div>
          </div>
      </div>
  </div>
  

)}
  