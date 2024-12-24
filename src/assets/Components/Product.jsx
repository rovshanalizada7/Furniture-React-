import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../css/product.css";
import Card from './Card';


const Product = () => {

    const [data,setData] = useState([])

    useEffect(() => {
     getApi()
    },[])

    const getApi = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
           setData(res.data)
        })
    }


  return (
    <>
      <section className="section1">
        <div className="section-content">
         <div className="row">

         <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
            <div className='anime'>
                <span>+</span>
               </div>
                <div className="img">
                    <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                </div>
                <h3 className="product-title">Nordic Chair</h3>
                    <strong className="product-price">$50.00</strong>
            </div>

            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
               <div className='anime'>
                <span>+</span>
               </div>
                <div className="img">
                    <img src="https://themewagon.github.io/furni/images/product-2.png" alt="" />
                </div>
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>
            </div>

            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
            <div className='anime'>
                <span>+</span>
               </div>
                <div className="img">
                    <img src="https://themewagon.github.io/furni/images/product-3.png" alt="" />
                </div>
                <h3 className="product-title">Ergonomic Chair</h3>
                    <strong className="product-price">$43.00</strong>
            </div>

         {
               data.map((item,index) => (
                 <Card item={item} key={index}/>
               ))
         }  

         <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2>Crafted with <br /> excellent material.</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                <a href="">Explore</a>
            </div>
          
           

            
         </div>
        </div>

    </section>
    </>
  )
}

export default Product