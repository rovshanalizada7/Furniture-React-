import React from 'react'
import "../css/product.css";


const Product = () => {
  return (
    <>
      <section class="section1">
        <div class="section-content">
         <div class="row">

            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2>Crafted with <br /> excellent material.</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                <a href="">Explore</a>
            </div>

            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
            <div className='anime'>
                <span>+</span>
               </div>
                <div class="img">
                    <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                </div>
                <h3 class="product-title">Nordic Chair</h3>
                    <strong class="product-price">$50.00</strong>
            </div>

            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
               <div className='anime'>
                <span>+</span>
               </div>
                <div class="img">
                    <img src="https://themewagon.github.io/furni/images/product-2.png" alt="" />
                </div>
                <h3 class="product-title">Kruzo Aero Chair</h3>
                <strong class="product-price">$78.00</strong>
            </div>

            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
            <div className='anime'>
                <span>+</span>
               </div>
                <div class="img">
                    <img src="https://themewagon.github.io/furni/images/product-3.png" alt="" />
                </div>
                <h3 class="product-title">Ergonomic Chair</h3>
                    <strong class="product-price">$43.00</strong>
            </div>
            
            
         </div>
        </div>

    </section>
    </>
  )
}

export default Product