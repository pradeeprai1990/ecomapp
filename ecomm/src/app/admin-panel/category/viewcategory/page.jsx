'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function viewcategory() {
    let [catData,setCatData]=useState([]);
    let [catDataAll,setCatDataAll]=useState([]);
    let [imgPath,setImgPath]=useState('');
    let [delId,setDelId]=useState([]);
    let [tot,setTot]=useState(0)
    let [limit,setLimit]=useState(5)
    let [pageNumber,setPageNumber]=useState(1);
    let j=1;

    let getCategory=(pNo,param='')=>{
        let APIURL;
        if(param===''){
            APIURL=`http://localhost:8000/view-category/?pageNumber=${pNo}`;
        }   
        else{
            APIURL=`http://localhost:8000/view-category/?pageNumber=${pNo}&cname=${param}`;
        }
        axios.get(APIURL)
        .then((res)=>res.data)
        .then((finalres)=>{
           // console.log(finalres.categoryData);
           // console.log(finalres.catImageStaticPath);
            setCatData(finalres.categoryData);
           setImgPath(finalres.catImageStaticPath);
           setTot(finalres.tot);
           setCatDataAll(finalres.categoryDataAll);
        })
    }
    //console.log(catData)
    useEffect(()=>{
        getCategory(pageNumber,"");
    },[])

    let ChangePageNumber=(para)=>{

        let pNumber;
        let lValue=Math.ceil(tot/limit);
        if(para===1 || para===0 || para<0){
            pNumber=1;
        }
        
        else if(para==="pre"){
            pNumber=(pageNumber-1)
            console.log(pNumber)
        }
        else if(para==="next" ){
            pNumber=(pageNumber+1)
            if(pNumber>lValue)
            {
                pNumber=lValue;
            }
            console.log(pNumber)
        }
        else if(para==="last" ){
            pNumber=lValue;
            console.log(pNumber)
        }
        
        else{
            pNumber=para;
            console.log(pNumber)
        }
       
       
        setPageNumber(pNumber)
        getCategory(pNumber,'');
        //console.log(pNumber)
        //console.log(lValue)
    }

    let deleteRow=(id)=>{
        console.log(id)
        let delData=catData.filter((v)=>v._id===id)
        console.log(delData)
        if(id===delData[0]._id){
            if(confirm("Are You Sure")===true){
           axios.get(`http://localhost:8000/delete-category/${id}`)
            .then((res)=>{
                console.log(res);
                getCategory(pageNumber,"");
            })
    
        }
        else{
            alert("Data Not Deleted...")
            getCategory(pageNumber,"");
        }
        }
    }
   
    let getCheckedValue=(event)=>{
        if(event.target.checked){
            setDelId([...delId,event.target.value])
        }
        else{
           catDataId= delId.filter((v)=>v!==event.target.value)
           setDelId(catDataId)
        }  
    }

    let deleteAll=()=>{
        if(confirm("Are You Sure...")){
                axios.post('http://localhost:8000/delete-all-category/',{
                    id:delId
                })
               .then((res)=>{
                console.log(res);
                getCategory(pageNumber,"");
            })
                
                }
        else{
            alert("Data Not Deleted...")
            getCategory(pageNumber,"");
        }
    }

    let searchData=(event)=>{
        let sValue=event.target.value;
        getCategory(pageNumber,sValue)
    }

    let editRow=(id)=>{
        console.log(id)
    }
 
return (
  <div className='container app-content py-5'>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-10 p-3  my-4'>
              <div className="Category-table">
                
              <div className='d-flex justify-content-between align-items-center p-3 mb-2 gap-4'>
                <button className="btn btn-success my-3 rounded-2 p-2 fs-4" onClick={deleteAll}> Delete All</button>
                <input type="text" placeholder="Search By Name" className="rounded-2" style={{width:"460px"}} onChange={searchData}/>
              </div>
                
              <table className="datatable table table-striped table-bordered fs-5 ">
                    <thead>
                    <tr className='text-center'>
                        <th>Delete</th>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Category Descriptiion</th>
                        <th>Category Image</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                             catData.length>0?
                             catData.map((v,i)=>{
                                let status;
                                if(v.cat_Status===true){
                                    status="Active"
                                }
                                else{
                                    status="De-Active"
                                }
                                let limitValue=((pageNumber-1)*limit)+1;
                                if(limitValue<=0){
                                    limitValue=i+1;
                                }
                                else{
                                    limitValue=((pageNumber-1)*limit)+i+1;
                                }
                                return(
                                <tr className="gradeX" index={i}>
                                    <td className='text-center'><input type="checkbox" value={v._id} onChange={getCheckedValue}/></td>
                                    <td className='text-center'>{limitValue}</td>
                                    <td>{v.cat_Name}</td>
                                    <td>{v.cat_Des}</td>
                                    <td>
                                    
                                        <img src={imgPath+v.cat_Img} alt="" width={100}/>
                                    </td>
                                    <td>{status}</td>
                                    <td><button onClick={()=>deleteRow(v._id)}>Delete</button></td>
                                    <td><Link href={`/admin-panel/category/addcategory/${v._id}`}><button onClick={()=>editRow(v._id)}>Edit</button></Link></td>
                                    
                                </tr>
                                )
                            })
                            :
                            <tr colspan={8}>No Data Found</tr>
                        }
                   
                    
                    </tbody>
              </table>
              
              <div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                <li class="page-item ">
                    <button onClick={()=>ChangePageNumber(1)} className="page-link" href="#" tabindex="-1" aria-disabled="true">First</button>
                    </li>
                    <li class="page-item ">
                    <button  onClick={()=>ChangePageNumber('pre')} className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</button>
                    </li>

                  {
                    catDataAll.map((v,i)=>{
                        if(i<4){
                            return(
                                <li class="page-item ">
                                <button  onClick={()=>ChangePageNumber(i+1)} className="page-link" aria-disabled="true">  {i+1} </button>
                                </li>
                            )
                        }
                        else if(i==4){
                            return(
                                <li class="page-item ">
                                <button  onClick={()=>ChangePageNumber(i+1)} className="page-link" aria-disabled="true">...</button>
                                </li> 
                            )
                        }
                        else if(i>=5 && i<=tot/limit){
                            return(
                                <li class="page-item ">
                                <button  onClick={()=>ChangePageNumber(i+1)} className="page-link" aria-disabled="true">{i+1}</button>
                                </li> 
                            )
                        }
                            
                        })
                  }
                    
                    <li class="page-item">
                    <button class="page-link"  onClick={()=>ChangePageNumber('next')} >Next</button>
                    </li>
                    <li class="page-item">
                    <button class="page-link" onClick={()=>ChangePageNumber('last')}>Last</button>
                    </li>
                </ul>
                </nav>      
              </div>

              </div>
              </div>
          </div>
      </div>
  </div>
  

)}
  