import React, { useEffect, useState } from 'react'
import './../Home/Home.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Helmet} from "react-helmet";


function Home() {
  const[products,setProducts]=useState([])
  const[search, setSearch]=useState("")
  const[def,setDef]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
axios.get("http://localhost:5050/products").then((res)=>{
  setProducts(res.data);
  setDef(res.data)
})
  },[])

const handlUcuzdan=()=>{
 const filter1=[...products].sort((a,b)=>b.price-a.price)
 setProducts(filter1)
}
const handleBahadan=()=>{
  const filter2=[...products].sort((a,b)=>a.price-b.price)
  setProducts(filter2)
}
const handleZandA=()=>{
  const filter3=[...products].sort((a,b)=>b.name.localeCompare(a.name))
  setProducts(filter3)
}
const handleAandZ=()=>{
  const filter4=[...products].sort((a,b)=>a.name.localeCompare(b.name))
  setProducts(filter4)
}
  const handleDetail=(productsId)=>{
    navigate(`/detail/${productsId}`)
  }
  const handlDef=()=>{
    setProducts(def)
  }
  return (
    <>
    <Helmet>
    <title>Home</title>
</Helmet>
    <div className="mainHome">
      <div className="slider">
      <Carousel >
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/selling/images/hero_2.jpg" alt="" />
        <Carousel.Caption className='sliTitle'>
          <h3>Shop With Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://preview.colorlib.com/theme/selling/images/hero_2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://preview.colorlib.com/theme/selling/images/hero_2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>

<div className="secCard">
  <input type="text" placeholder='search' onChange={(e)=>{setSearch(e.target.value)}}/>
  <button onClick={ handlUcuzdan}>ucuzdan</button>
  <button onClick={handleBahadan}>bahadan</button>
  <button onClick={handleZandA}>ZandA</button>
  <button onClick={handleAandZ}>AandZ</button>
  <button onClick={handlDef}>DEF</button>
  <div className="cards">
    {
      products.filter(elem=>elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((elem,i)=>(
<div className="kard" key={i}>
<div className="img">
  <img src={elem.img} alt="" />
</div>
<div className="name">
  {elem.name}
</div>
<div className="title">
  {elem.title}
</div>
<div className="butons">
  <button className='detail' onClick={()=>{handleDetail(elem._id)}}>Card</button>
  <button className='wish'>Wish</button>
</div>

    </div>
      ))
    }
    
   
    
    
  </div>
  
</div>

    </div>
    </>
  )
}

export default Home