import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Detail() {
  const[ detail,setDetail]=useState([])
let {productsId}=useParams()
useEffect(()=>{
axios.get(`http://localhost:5050/products/${productsId}`).then((res)=>{
  setDetail(res.data)
})
},[])

  return (
    <div className="kard" >
<div className="img">
  <img src={detail.img} alt="" />
</div>
<div className="name">
  {detail.name}
</div>
<div className="title">
  {detail.title}
</div>
<div className="butons">
  <button className='detail' onClick={()=>{handleDetail(detail._id)}}>Card</button>
  <button className='wish'>Wish</button>
</div>

    </div>
    
  )
}

export default Detail