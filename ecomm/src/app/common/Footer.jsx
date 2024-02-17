'use client'
import { faFacebookF, faInstagram, faInstagramSquare, faLinkedin, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import React from 'react'
import flogo from "./images/flogo.svg"
import './Footer.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

export default function Footer() {
    let currentURL=usePathname();
		//console.log(currentURL)
		let path=currentURL.split('/')
        if(path.includes('admin-panel')){
            return(
                <></>
            )
        }
        else{
            return (
                <>
                    <footer className='container-fluid'>
                        <div className='container'>
                            <div className='row footer-row1'>
                                <div className='col-lg-4 p-3'>
                                    <div className='footer-left p-2'>
                                        <Image src={flogo} alt="Footer Logo"/>
                                        
                                        <div className='d-flex align-items-start mb-2'>
                                            <div className='ficon'>
            
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>
                                            <div className='fcontact'>
                                                <p>9314041747 <br/>
                                                0291-2514747, 9610383747</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-start mb-3'>
                                            <div className='ficon'>
                                                <FontAwesomeIcon icon={faMessage} />
                                            </div>
                                            <div className='fcontact pt-2'>
                                                <p>marketing@ashapurna.com</p>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-start mb-2'>
                                            <div className='ficon'>
                                                <FontAwesomeIcon icon={faMessage} />
                                            </div>
                                            <div className='fcontact '>
                                                <p>Circuit House Road, Opposite LIC Office ,Jodhpur, Rajasthan 342006</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className='footer-right p-2'>
                                        <div className='footer-right-links mb-3 mt-2'>
                                            <div className='position-relative'>
                                                <h2>Useful Links</h2>
                                                <div className='position-absolute fleft'></div>
                                                <div className='position-absolute fright'></div>
                                            </div>
                                            
                                            <Link href="#">Residential Projects</Link>
                                            <Link href="#">Commercial Projects</Link>
                                            <Link href="#">Investors Club</Link>
                                            <Link href="#">NRI Corner</Link>
                                            <Link href="#">Carrer</Link>
                                            <Link href="#">Become A Partner</Link>
                                            <Link href="#">Our Testimonials</Link>
                                            <Link href="#">Privacy Policy</Link>
                                            <Link href="#">Terms & Conditions</Link>
                                           
                                        </div>
                                        <div className='footer-right-links'>
                                            <div className='position-relative'>
                                                <h2>Important Links</h2>
                                                <div className='position-absolute fleft'></div>
                                                <div className='position-absolute fright'></div>
                                            </div>
                                            
                                            <Link href="#">Residential Projects</Link>
                                            <Link href="#">Commercial Projects</Link>
                                            <Link href="#">Investors Club</Link>
                                            <Link href="#">NRI Corner</Link>
                                            <Link href="#">Carrer</Link>
                                            <Link href="#">Become A Partner</Link>
                                            <Link href="#">Our Testimonials</Link>
                                            <Link href="#">Privacy Policy</Link>
                                            <Link href="#">Terms & Conditions</Link>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row footer-row2 text-center'>
                                <h3>Follow Us On</h3>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='sicon d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon icon={faFacebookF} className='icon'/>
                                    </div>
                                    <div className='sicon d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon icon={faInstagramSquare} className='icon'/>
                                    </div>
                                    <div className='sicon d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon icon={faYoutube} className='icon'/>
                                    </div>
                                    <div className='sicon d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon icon={faTwitter} className='icon'/>
                                    </div>
                                    <div className='sicon d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon icon={faPinterest} className='icon'/>
                                    </div>
                                    <div className='sicon d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </footer>
                    <div className='container-fluid footer2'>
                        <div className='container'>
                            <div className='row'>
                            <div className='row footer-row3'>
                                <div className='footer-row3-links text-center'>
                                            <Link href="#">Residential Projects</Link>
                                            <Link href="#">Commercial Projects</Link>
                                            <Link href="#">Investors Club</Link>
                                            <Link href="#">NRI Corner</Link>
                                            <Link href="#">Carrer</Link>
                                            <Link href="#">Become A Partner</Link>
                                            <Link href="#">Our Testimonials</Link>
                                            <Link href="#">Privacy Policy</Link>
                                            <Link href="#">Terms & Conditions</Link>
                                            <Link href="#">NRI Corner</Link>
                                            <Link href="#">Carrer</Link>
                                            <Link href="#">Become A Partner</Link>
                                            <Link href="#">Our Testimonials</Link>
                                            <Link href="#">Privacy Policy</Link>
                                            <Link href="#">Commercial Projects</Link>
                                            <Link href="#">Investors Club</Link>
                                            <Link href="#">NRI Corner</Link>
                                </div>
                                <hr className="divider-line-2 mx-lg-auto"/>
                                <div className='footer-row3-info'>
                                    <p>The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, if so warranted.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid footer3'>
                        <div className='container'>
                            <div className='row'>
                                <div className='footer-bottom d-flex justify-content-between align-items-center pt-3'>
                                    <p>Copyright © 2022 Ashapurna Buildcon Limited</p>
                                    <p>Design and Developed by WsCube Tech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
              )
        }
  
}
