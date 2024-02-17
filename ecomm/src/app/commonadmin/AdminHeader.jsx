'use client'
import React, { useEffect, useState } from 'react'
import '../admin-panel/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faAngleRight,faBell, faCheckCircle,  faDashboard,  faLaptop,  faSearch,  faTable, faUser } from '@fortawesome/free-solid-svg-icons'
import { faPage4 } from '@fortawesome/free-brands-svg-icons'
import TreeView from 'react-treeview'
import { TreeItem } from '@mui/x-tree-view'
import Link from 'next/link'

export default function AdminHeader() {
  let [direction,setDirection]=useState(false);
  let [menuStatus,setActiveMenu]=useState(false);
 
  let menuItems=[
    {
      'id':1,
      "menuName": 'Dashboard',
      'link':'/admin-panel/dashboard',
      "subMenu":[]
    },
    {
      'id':2,
      
      'menuName':'Category',
      'subMenu':[
        {
          'subMenuName':'Add Category',
          'link':'/admin-panel/category/addcategory'
      },
        {
          'subMenuName':'View Category',
          'link':'/admin-panel/category/viewcategory'
        }
      ]
    },
    {
      'id':3,
      'menuName':'Product',
      'subMenu':[
        {
          'subMenuName':'Add Product',
          'link':'/admin-panel/product/addproduct'
        },
        {
          'subMenuName':'View Product',
          'link':'/admin-panel/product/viewproduct'
        }
      ]
    },
    {
      'id':4,
      "menuName": 'Users',
      'link':'/admin-panel/viewusers',
      "subMenu":[]
    },
    {
      'id':5,
      "menuName": 'Orders',
      'link':'/admin-panel/vieworders',
      "subMenu":[]
    },
    {
      'id':6,
      "menuName": 'Logout',
      'link':'/admin-panel',
      "subMenu":[]
    }
  ]
  let [currentId,setCurrentId]=useState(100)
  let changeDirection=()=>{
    setDirection(!direction);
    setActiveMenu(!menuStatus);
  }


  return (
    
    <>
    <header className="app-header"><a className="app-header__logo" href="index.html">Ecommerce</a>
      <a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar">&#9776;</a>
      
      <ul className="app-nav">
        <li className="app-search">
          <input className="app-search__input py-2" type="search" placeholder="Search"/>
          
            <FontAwesomeIcon icon={faSearch} className='app-search__button' style={{width:25,height:25}} />
            
            
        </li>
        
        <li className="dropdown"><a className="app-nav__item" href="#" data-bs-toggle="dropdown" aria-label="Show notifications">
        <FontAwesomeIcon icon={faBell} className='icon1' style={{width:25,height:25}} />
         
          </a>
          <ul className="app-notification dropdown-menu dropdown-menu-right">
            <li className="app-notification__title">You have 4 new notifications.</li>
            <div className="app-notification__content">
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><i className="bi bi-envelope fs-4 text-primary"></i></span>
                  <div>
                    <p className="app-notification__message">Lisa sent you a mail</p>
                    <p className="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><i className="bi bi-exclamation-triangle fs-4 text-warning"></i></span>
                  <div>
                    <p className="app-notification__message">Mail server not working</p>
                    <p className="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><i className="bi bi-cash fs-4 text-success"></i></span>
                  <div>
                    <p className="app-notification__message">Transaction complete</p>
                    <p className="app-notification__meta">2 days ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><i className="bi bi-envelope fs-4 text-primary"></i></span>
                  <div>
                    <p className="app-notification__message">Lisa sent you a mail</p>
                    <p className="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><i className="bi bi-exclamation-triangle fs-4 text-warning"></i></span>
                  <div>
                    <p className="app-notification__message">Mail server not working</p>
                    <p className="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><i className="bi bi-cash fs-4 text-success"></i></span>
                  <div>
                    <p className="app-notification__message">Transaction complete</p>
                    <p className="app-notification__meta">2 days ago</p>
                  </div></a></li>
            </div>
            <li className="app-notification__footer"><a href="#">See all notifications.</a></li>
          </ul>
        </li>
        
        <li className="dropdown"><a className="app-nav__item" href="#" data-bs-toggle="dropdown" aria-label="Open Profile Menu">
          <FontAwesomeIcon icon={faUser} className='icon1' style={{width:25,height:25}} />
          </a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li><a className="dropdown-item" href="page-user.html"><i className="bi bi-gear me-2 fs-5"></i> Settings</a></li>
            <li><a className="dropdown-item" href="page-user.html"><i className="bi bi-person me-2 fs-5"></i> Profile</a></li>
            <li><a className="dropdown-item" href="page-login.html"><i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </header>
    <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside className="app-sidebar">
      <div className="app-sidebar__user">
        <img className="app-sidebar__user-avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Img"/>
        <div>
          <p className="app-sidebar__user-name">John Doe</p>
          <p className="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
      <ul className="app-menu">

{
        menuItems.map((v,i)=>
         
        {
         let ID=v.id;
          let len=v.subMenu.length;
          if(len>0){
            return(
              
              <li className="treeview" key={i} onClick={()=>setCurrentId((currentId===v.id)?0:v.id)} >
                  <Link className="app-menu__item" href="#" data-toggle="treeview">
                    <FontAwesomeIcon icon={faLaptop} style={{width:30,height:30,paddingRight:10}} />
                    <span className="app-menu__label">{v.menuName}</span>
                   
                   
                   
                    <button className='uibtn'  >
                      <FontAwesomeIcon icon={faAngleRight}  className={`directionarrow ${(direction)?"changedirection":""}` }/>
                    </button> 
                  </Link>
                  <ul className={`treeview-menu ${(ID==currentId)? 'activeMenu':''} `}>

                  
                        {
                            v.subMenu.map((u,j)=>{
                              return(
                                
                                <li key={j} >
                                 
                                    <Link className="treeview-item" href={u.link}>
                                      <i className="icon bi bi-circle-fill"></i>
                                      {u.subMenuName}
                                    </Link>
                                </li>
                            
                              )
                              
                               
                            })
                                                 
                        }
                          </ul>  
                  </li>
            )
          }
          else{
            return(
          
              <li className="treeview" key={i}>
                  <Link className="app-menu__item" href={v.link} data-toggle="treeview">
                    <FontAwesomeIcon icon={faLaptop} style={{width:30,height:30,paddingRight:10}} />
                    <span className="app-menu__label">{v.menuName}</span>
                  </Link>
              </li>
            )
          }
          
        
          
      })
     }
{/* 
        <li>
          <a className="app-menu__item " href="dashboard.html">
          <FontAwesomeIcon icon={faDashboard} style={{width:30,height:30,paddingRight:10}} />
          <span className="app-menu__label">Dashboard</span></a>
        </li> */}
       
        

        {/* <li className={menuStatus ? "treeview":"activeMenu"}>
                <a className="app-menu__item" href="#" data-toggle="treeview">
                  <FontAwesomeIcon icon={faLaptop} style={{width:30,height:30,paddingRight:10}} />
                  <span className="app-menu__label">Product</span>
          
                  <button className='uibtn' onClick={()=>setActiveMenu(!menuStatus)}>
                    <FontAwesomeIcon icon={faAngleRight} className={`directionarrow ${(direction==true)?"changedirection":""}` }/>
                  </button> 
                </a>
                <ul className={`treeview-menu ${menuStatus? 'activeMenu':''} `}>
                  <li><a className="treeview-item" href="bootstrap-components.html">
                    <i className="icon bi bi-circle-fill"></i>
                    Add Product</a></li>
                  <li><a className="treeview-item" href="https://icons.getbootstrap.com/" target="_blank" rel="noopener"><i className="icon bi bi-circle-fill"></i> View Product</a></li>
                  
                </ul>
        </li> */}

        {/* <li className={menuStatus ? "treeview":"activeMenu"}>
                <a className="app-menu__item" href="#" data-toggle="treeview">
                  <FontAwesomeIcon icon={faLaptop} style={{width:30,height:30,paddingRight:10}} />
                  <span className="app-menu__label">Product</span>
          
                  <button className='uibtn' onClick={()=>setActiveMenu(!menuStatus)}>
                    <FontAwesomeIcon icon={faAngleRight} className={`directionarrow ${(direction==true)?"changedirection":""}` }/>
                  </button> 
                </a>
                <ul className={`treeview-menu ${menuStatus? 'activeMenu':''} `}>
                  <li><a className="treeview-item" href="bootstrap-components.html">
                    <i className="icon bi bi-circle-fill"></i>
                    Add Product</a></li>
                  <li><a className="treeview-item" href="https://icons.getbootstrap.com/" target="_blank" rel="noopener"><i className="icon bi bi-circle-fill"></i> View Product</a></li>
                  
                </ul>
        </li> */}

        {/* <li className="treeview">
                <a className="app-menu__item" href="#" data-toggle="treeview">
                  <FontAwesomeIcon icon={faLaptop} style={{width:30,height:30,paddingRight:10}} />
                  <span className="app-menu__label">Category</span>
          
                  <button className='uibtn' onClick={changeDirection}>
                    <FontAwesomeIcon icon={faAngleRight} className={`directionarrow ${(direction==true)?"changedirection":""}` }/>
                  </button> 
                </a>
                
                <ul className={`treeview-menu ${menuStatus? 'activeMenu':''} `}>
                  <li><a className="treeview-item" href="bootstrap-components.html">
                    <i className="icon bi bi-circle-fill"></i>
                    Add Category</a></li>
                  <li><a className="treeview-item" href="https://icons.getbootstrap.com/" target="_blank" rel="noopener"><i className="icon bi bi-circle-fill"></i> View Category</a></li>
                  
                </ul>
        </li> */}
        
              
        {/* <li><a className="app-menu__item" href="docs.html">
        <FontAwesomeIcon icon={faUser} style={{width:30,height:30,paddingRight:10}} />
          <span className="app-menu__label">Users</span></a></li>

          <li>
          <a className="app-menu__item " href="dashboard.html">
          <FontAwesomeIcon icon={faDashboard} style={{width:30,height:30,paddingRight:10}} />
          <span className="app-menu__label">Logout</span></a>
        </li> */}
      </ul>
    </aside>
    </>
  )
}
