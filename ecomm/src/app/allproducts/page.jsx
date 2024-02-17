import Image from 'next/image'


import frock1 from '../../app/common/images/frock1.webp';
import frock2 from '../../app/common/images/frock2.webp';
import frock3 from '../../app/common/images/frock3.webp';
import frock4 from '../../app/common/images/frock4.webp';
import men1 from '../../app/common/images/men1.webp';
import men2 from '../../app/common/images/men2.webp';
import men3 from '../../app/common/images/men3.jpg';
import men4 from '../../app/common/images/men4.jpg';
import women1 from '../../app/common/images/women1.jpg';
import women2 from '../../app/common/images/women2.jpg';
import women3 from '../../app/common/images/women3.jpg';
import women4 from '../../app/common/images/women4.jpg';

import '../admin-panel/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMoneyBillWaveAlt, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

export default function allproduct() {
  return (
    <>
      
      <div className='container-fluid pb-3'>
        <div className='container bg-primary my-3 rounded-2'>
          <div className='row p-2'>
            <div className='col-3 py-5'> 
                <h4 className='pb-2 ps-4'>Categories</h4>
                <ul style={{listStyle:"none"}}>
                    <li className='py-2 fs-3'>
                        
                        Men</li>
                    <li className='py-2 fs-3'>Women</li>
                    <li className='py-2 fs-3'>Kids</li>
                </ul>
            </div>
            <div className='col-9'>
              <div className='category-section p-3 '>
                <h2 className='fs-1 font-bold'>Products</h2>
              </div>
              <div className='row '>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock1}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock2}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock3}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock4}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men1}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Coat</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men2}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Formal</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men3}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Jeans</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men4}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Shirt</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women1}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Sarees</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women2}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Lehngas</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women3}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Blasers</h4>
              </div>
            </div>
            <div className='col-lg-4 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women4}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Gowns</h4>
              </div>
            </div>
          </div>
            </div>
          </div>
          
         
        </div>
      </div>

     
    </>
  )
}
