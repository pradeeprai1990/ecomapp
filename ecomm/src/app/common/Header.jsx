"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logoheader from "./images/logo192.png"
import flogo from "./images/flogo.svg"
import "./Header.css"
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import AdminHeader from '../commonadmin/AdminHeader'
import axios from 'axios'
import { useContext } from 'react'
import { loginContext } from '@/Context/MainContext'


  

	export default function Header() {
		let {tokenValue,setTokenValue}=useContext(loginContext);
		console.log(tokenValue);

		let logOut=()=>{
			localStorage.clear('token');
			setTokenValue('');
		}
		// let token=localStorage.getItem('token');
		// let uemail=localStorage.getItem('uemail');
		// let currentUemail=JSON.parse(uemail)
		
		// let loginEmail=currentUemail[currentUemail.length-1];
		// let [userData,setUserData]=useState([]);
		// let viewUser=()=>{

		// 	let token=localStorage.getItem('token');
		// 	axios.get(`http://localhost:8000/website/active-user/?token=${token}&uemail=${loginEmail}`,{
		// 		headers:{
		// 			Authorization: 'Bearer ' + token
		// 		}
		// 	}).then(res=>{
		// 		console.log(res.data)
		// 		setUserData(res.data)
		// 	})
	
		//   }
		// //console.log(catData)
		// useEffect(()=>{
		// 	viewUser();
		// },[])

		

		// console.log(token)
		let currentURL=usePathname();
		//console.log(currentURL)
		let path=currentURL.split('/')
		let path1=path[2];
		//console.log(path)

		let [modal,setModal]=useState(false);
		
		let showModal=()=>{
			setModal(!modal);
		  }
		 if(path.includes('admin-panel') && path.length==2){
			return(
				<></>
			)
		 } 
		else if(path.includes('admin-panel') && path.length>2){
			return(
				<>
				<AdminHeader/>
				</>
			)
			
			
		}
		else{
			
			return (
				<>
					<header className="container-fluid">
						
						<div className="container">
						<nav className="navbar navbar-expand-lg  navbar-light align-items-center">
							<Link className="navbar-brand" href="#">
								
								<Image src={flogo} height={70} width={200} alt="" />
							</Link>
							<button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse justify-content-end menu" id="menubar">
								<ul className="navbar-nav align-items-lg-center text-uppercase">
									<li className="nav-item">
										<Link className="nav-link" href={'/'}>Home</Link>
									</li>
									<li className="nav-item" >
										<Link className="nav-link" href={'#'} >About Us</Link>
										
									</li>
									<li className="nav-item" >
										<Link className="nav-link" href={'#'} >Contact Us</Link>
										
									</li>
									<li className="nav-item dropdown">
										<Link className="nav-link dropdown-toggle" href={'#'} data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
										<ul className='dropdown-menu px-3 py-0 my-0'>
											<li>
												<Link className="dropdown-item" href={'#'}>Men</Link>
											</li>
											<li>
												<Link className="dropdown-item" href={'#'}>Women</Link>
											</li>
											<li>
												<Link className="dropdown-item" href={'#'}>Kids</Link>
											</li>
											
										</ul>
									</li>
										{ tokenValue==''?
											<>
												<li className="nav-item ">
													<Link href={'/login'}>
														<button className="ebtn mx-2" >LogIn</button>
													</Link>
												</li>
												<li className="nav-item">
													<Link href={'/register'}>
														<button className="ebtn me-2">Register</button>
													</Link>
												</li>
											</>
											:
											<>
												<li className="nav-item ">
													<Link href={''}>
														<button className="ebtn mx-2" onClick={logOut} >LogOut</button>
													</Link>
												</li>
												<li className="nav-item">
													<Link href={'/changepassword'}>
														<button className="ebtn me-2">Change Password</button>
													</Link>
												</li>
											</>

										}
										
								
									
									{/* <li className="nav-item">
										<button className="ebtn">Enquire</button>
									</li> */}
									
								</ul>
							</div>
						</nav>
						</div>
						<div className="offcanvas offcanvas-start" id="offcanvasExample">
							<div className="offcanvas-header">
								<a className="navbar-brand" href="#">
								<Image src={logoheader} height={130} width={130} alt="Header Logo"/>
								</a>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
							</div>
							<div className="offcanvas-body">
							<ul className="navbar-nav align-items-lg-center text-uppercase ">
									<li className="nav-item">
										<Link href={'/about-us'}>About Us</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href={'/'}>Home</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href={'/about-us'}>About Us</Link>
									</li>
									<li className="nav-item dropdown">
										<Link className="nav-link dropdown-toggle" href={'#'} data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
										<ul className='dropdown-menu px-3 py-0 my-0'>
											<li>
												<Link className="dropdown-item" href={'#'}>Men</Link>
											</li>
											<li>
												<Link className="dropdown-item" href={'#'}>Women</Link>
											</li>
											<li>
												<Link className="dropdown-item" href={'#'}>Kids</Link>
											</li>
											
										</ul>
									</li>
									
									<li className="nav-item">
										<Link className="nav-link" href={'/contact-us'}>Contact Us</Link> 
									</li>
									
								</ul>
							</div>
						</div>
			
					</header>
				</>
			)
		}
}


