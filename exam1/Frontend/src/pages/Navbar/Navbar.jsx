import React from 'react'
import './../Navbar/Navbar.scss'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="mainNav">
      <div className="nav1">
      <div className="icons">
  <div className="icon">
  <FaFacebook />
  </div>
  <div className="icon">
  <IoLogoTwitter />
  </div>
  <div className="icon">
  <FaInstagramSquare />
  </div>
  <div className="icon">
  <FaLinkedin />
  </div>
</div>
<div className="left">
  <div className="phone">
  <div className="ico">
  <FaPhoneAlt />
  </div>
  <div className="tel">
  (+1) 234 5678 9101
  </div>
  </div>
  <div className="gmail">
  <div className="ico">
  <IoIosMail />
  </div>
  <div className="mail">
   shop@yourdomain.com
  </div>
  </div>
</div>
      </div>
      <div className="nav2">
        <div className="title">
        Selling
        </div>
        <div className="list">
          <div className="home">HOME</div>
          <Link to={"add"}><div className="Add">ADD</div></Link>
          <div className="wish">WISHLIST</div>
        </div>
      </div>


    </div>
  )
}

export default Navbar