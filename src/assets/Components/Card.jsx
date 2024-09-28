import React from 'react'
import "../css/product.css";
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {

  const navigate = useNavigate()

  return (
   <div  className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
              <div className='anime'>
              <span>+</span>
              </div>
              <div className="img">
              <img src={item.image} alt="" />
              </div>
              <h3 onClick={() => navigate(`/detail/${item.id}`)} className="product-title">{item.title}</h3>
              <strong className="product-price">${item.price}</strong>
    </div> 
  )
}

export default Card