 
import React,{useEffect,useState} from 'react';
import { MdMenu } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";

import { FaUserPlus } from "react-icons/fa6";




const navLinks=[
  {title:"Home" ,link:"/"},
  {title:"about" ,link:"/about"},
  {title:"accessories" ,link:"/accessories"},
  {title:"blog" ,link:"/blog"},
  {title:"contact" ,link:"/contact"},
]
export default function BtmHeader() {
  const location=useLocation()
  const [categories, setCategories]=useState([])
const [isCategoryOpen,setiscategoryOppen ]=useState(false)

useEffect(()=>{
  setiscategoryOppen(false)
},[location])


useEffect(() => {

fetch('https://dummyjson.com/products/categories' )
.then((res)=>res.json())
.then((data)=>setCategories(data))

},[])
console.log(isCategoryOpen );


  return (
    <div className='btm_header'>
      
      
<div className="container">
  <nav className="nav">

    <div className="category_nav">
      <div className="category_btn" onClick={()=>setiscategoryOppen(!isCategoryOpen)}>
        <MdMenu />
        <p>browse category</p>
        <IoMdArrowDropdown />
      </div>

      <div className={`category_nav_list ${isCategoryOpen? "active":""}`}>
        {categories.map((category) => (
          <Link key={category.slug} to={`/category/${category.slug}`}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>

    <div className="nav_links">
      {navLinks.map((item) => (
     <li key={item.link}  className={location.pathname ===item.link ?"active" :""}> 
         <Link key={item.link} to={item.link}>
     {item.title}
   </Link>
   </li>

      ))}



    </div>

  </nav>

  <div className="sign_regs_icon">
    <Link to="/login"><PiSignInBold /></Link>
    <Link to="/register"><FaUserPlus /></Link>
  </div>
</div>
    </div>
  )
}



















 