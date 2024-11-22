import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




const Detail = () => {

  const {id} = useParams();
  const [product , setProduct] = useState();
  const navigate = useNavigate();
   
  const getApi = async () => {
    await axios.get('https://fakestoreapi.com/products')
    .then ( (res) => {
       setProduct(res.data.find((item) => item.id === Number(id)))
    })
  }

  useEffect(() => {
   getApi()
  },[])

  

  return (
   <>
   <h1 style={{color:"black",textAlign:"center"}}>Product Description</h1>
   <a onClick={() => navigate("/")} style={{padding:"10px",background:"black",color:"white",marginBottom:"1.7rem",cursor:"pointer"}}>Back to Home Page</a>
   <div>
    {
      product ? (
        <>
        <div style={{marginTop:"1.7rem"}}><strong>Title:</strong> {product.title}</div>
        <div style={{marginTop:"1rem"}}><strong>Desc:</strong> {product.description}</div>
        <div>
          <h2>Price: {product.price} $</h2>
        </div>
        <div>
          <img src={product.image} alt="" />
        </div> 
        </>
      ) : (
        <p>Loading...</p> // Add a loading state in case the product is null
      )
    }
   </div>
   </>
  )
  
}

export default Detail