import React from 'react'
import Home from './assets/Components/Home'
import Product from './assets/Components/Product'
import WhyChooseUs from './assets/Components/whyChooseUs'
import Detail from './assets/Components/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {

  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App