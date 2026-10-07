import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slide/product'
import "./categorypage.css"
import Slide from '../../components/slide/slide'
import PageTransition from "../../components/pageTransition";
export default function category() {

  const {category}=useParams()
 

const [categoryProducts,setCategoryProducts]=useState([])
const[loading,setLoading]=useState(true)
useEffect(() => {
  fetch(`https://dummyjson.com/products/category/${category}`)
  .then((res)=>res.json())
.then((data)=>{
setCategoryProducts(data)
})
.catch((error)=>console.error(error))
.finally(()=>setLoading(false))
},[category]);
console.log(categoryProducts);

  return (
  

    <PageTransition key={category}>

      <div className="category_products">
  {loading?( <Slide key={category}/>
  ):(
    <div className="container">
  <div className="top_slide">
          <h2>{category} : {categoryProducts.limit}</h2>
        </div>
    <div className="products">
      {categoryProducts.products.map((item,index)=>(
        <Product item={item} key={index}/>
      ))}
    </div>
  </div>
  
 )}

  </div>  
  
    </PageTransition>


   
 ) 
}
 