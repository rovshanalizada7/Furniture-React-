import React from 'react'
import "../css/whyChooseUs.css"

const WhyChooseUs = () => {
  return (
    <>
    <section className="section2">

    <div className="row section2-content">

        <div className="col-lg-6 section2-text">

            <div className="title">
                <h2>Why Choose Us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            </div>
            
            <div className='.row my-5'>

                <div className='col-6 col-md-6'>
                    <div className="icon">
                        <img src="https://themewagon.github.io/furni/images/truck.svg" alt="" />
                    </div>
                    <h3>Fast & Free Shipping</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                <div className='col-6 col-md-6'>
                    <div className="icon">
                        <img src="https://themewagon.github.io/furni/images/bag.svg" alt="" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                <div className='col-6 col-md-6'>
                    <div className="icon">
                        <img src="https://themewagon.github.io/furni/images/support.svg" alt="" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                <div className='col-6 col-md-6'>
                    <div className="icon">
                        <img src="https://themewagon.github.io/furni/images/return.svg" alt="" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

            </div>


            

        </div>

        <div className="col-lg-5 section2-img"></div>

    </div>

    <img className='dots-image' src="https://themewagon.github.io/furni/images/dots-yellow.svg" alt="" />
    </section>
    </>
  )
}

export default WhyChooseUs