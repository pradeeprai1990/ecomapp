import Image from 'next/image'

import mens from '../app/common/images/mens.jpeg'
import women from '../app/common/images/women.jpg'
import kids from '../app/common/images/kids.jpg'
import frock1 from '../app/common/images/frock1.webp';
import frock2 from '../app/common/images/frock2.webp';
import frock3 from '../app/common/images/frock3.webp';
import frock4 from '../app/common/images/frock4.webp';
import men1 from '../app/common/images/men1.webp';
import men2 from '../app/common/images/men2.webp';
import men3 from '../app/common/images/men3.jpg';
import men4 from '../app/common/images/men4.jpg';
import women1 from '../app/common/images/women1.jpg';
import women2 from '../app/common/images/women2.jpg';
import women3 from '../app/common/images/women3.jpg';
import women4 from '../app/common/images/women4.jpg';

import './admin-panel/css/main.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='container-fluid'>
        <div className='container bg-info my-3 rounded-2'>
          <div className='row p-2'>
            <div className='col-12'>
              <div className='category-section p-3'>
                <h2 className='fs-1 font-bold'>Categories</h2>
              </div>
            </div>
          </div>
          <div className='row gx-1 '>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={mens}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Men</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={kids}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Kids</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Women</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={kids}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Kids</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid pb-3'>
        <div className='container bg-primary my-3 rounded-2'>
          <div className='row p-2'>
            <div className='col-12'>
              <div className='category-section p-3 '>
                <h2 className='fs-1 font-bold'>Products</h2>
              </div>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock1}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock2}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock3}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={frock4}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Frock</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men1}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Coat</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men2}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Formal</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men3}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Jeans</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={men4}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Shirt</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women1}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Sarees</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women2}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Lehngas</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women3}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Blasers</h4>
              </div>
            </div>
            <div className='col-lg-3 col-12 p-3'>
              <div className='catitems p-2' style={{width:250,height:300}}>
                <Image src={women4}  alt="Header Logo" style={{width:"100%",height:"80%"}}/>
                <h4 className='px-2 py-3'>Gowns</h4>
              </div>
            </div>
          </div>
          <div className='row my-3 py-3 d-flex justify-content-end'>
            <div className='col-2'>
              <Link href="/allproducts">
                <button className='btn btn-light fs-4 px-3 '>View All</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}
