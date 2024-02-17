import React from 'react'
import '../css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faBook, faBookAtlas, faBookBookmark, faCheckCircle, faCheckDouble, faDashboard, faHome, faLaptop, faPeopleArrows, faSearch, faSquareCaretDown, faTable, faUser } from '@fortawesome/free-solid-svg-icons'
import { faPage4, faProductHunt, faUber } from '@fortawesome/free-brands-svg-icons'
import AdminHeader from '@/app/commonadmin/AdminHeader'

export default function AdminDashboard() {
  return (
    <>
    
    <main className="app-content py-5">
      <div className="app-title">
        <div>
          <h1><i className="bi bi-speedometer"></i> Dashboard</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb d-flex align-items-center">
          <li className="breadcrumb-item">
          <FontAwesomeIcon icon={faHome} style={{width:15,height:15}} className='arrow' />
            </li>
          <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="widget-small primary coloured-icon">
            <FontAwesomeIcon icon={faPeopleArrows} className='icon1' style={{width:85,height:85,padding:20}} />
            <div className="info">
              <h4>Users</h4>
              <p><b>5</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small info coloured-icon">
          <FontAwesomeIcon icon={faProductHunt} className='icon1' style={{width:85,height:85,padding:20}} />
            <div className="info">
              <h4>Product</h4>
              <p><b>25</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small warning coloured-icon">
            <FontAwesomeIcon icon={faSquareCaretDown} className='icon1' style={{width:85,height:85,padding:20}} />
            <div className="info">
              <h4>Category</h4>
              <p><b>10</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small danger coloured-icon">
          <FontAwesomeIcon icon={faSquareCaretDown} className='icon1' style={{width:85,height:85,padding:20}} />
            <div className="info">
              <h4>Stars</h4>
              <p><b>500</b></p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )}

