import React from 'react'
import "../../assets/css/homePage.css"
import Header from './Header'
import Product from './Product'
import WhyChooseUs from './whyChooseUs'

const Home = () => {
  return (
   <>
    <section>
     <Header/>
     <div className="section-content">
        <div className="section-text">
            <h1>Modern Interior <br/>Design Studio</h1>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className="btns">
                <a className='shopNow' href="">Shop Now</a>
                <a className='explore' href="">Explore</a>
            </div>
        </div>
        <div className="section-img">
            <img src="https://themewagon.github.io/furni/images/couch.png" alt="" />
        </div>
        <img className='dots' src="https://themewagon.github.io/furni/images/dots-light.svg" alt="" />
     </div>
        
    </section>
    <Product/>
    <WhyChooseUs/>
   </>
  )
}

export default Home