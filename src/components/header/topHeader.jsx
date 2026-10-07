import React from 'react'
import { Link } from 'react-router-dom'  
import Logo from '../../../img/logo.jpg'
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import react ,{useContext}from 'react'
import "./header.css"
import { CartConText } from '../context/cartContext';
import SearchBox from './searchBox';




export default function TopHeader() {
  const {cartItems ,favorites}=useContext(CartConText)
  return (
    <div className='top_header'>
      <div className="container">
        <Link className='logo' to="/"><img src={Logo} alt="img/logo" /></Link>
      
<SearchBox/>


        <div className="header_icons">
          <div className="icon">
     <Link to={"/favorites"} >
     <FaRegHeart />
        <span className='count'>{favorites.length} </span>
        

     </Link>
          </div>
          <div className="icon">

<Link to="/cart">
        <FaShoppingCart />
        <span className='count'>{cartItems.length} </span>
</Link>
          </div>
        </div>
  
      </div>
    </div>
  )
}