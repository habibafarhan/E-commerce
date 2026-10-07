import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from "../components/pageTransition";
import Slide from '../components/slide/slide'
import Product from "../components/slide/product";
export default function searchResult() {
    const [results,setResults]=useState([])
    const query =new URLSearchParams(useLocation().search).get("query")
    const [loading,setLoading]=useState(true)
    console.log(results);

useEffect(() => {
    const fetchResults=async function () {
         try{
            const res=await fetch(
                `https://dummyjson.com/products/search?q=${query}`
            )
            const data=await res.json()
            setResults(data.products||[])
         }
        catch(error){
            console.error("search error:",error)
        }finally{
            setLoading(false)
        }
    }
    if(query)fetchResults()
    
}, [query]);

  return (
 <PageTransition key={query}>

<div className="category_products">
  {loading?( <Slide key={query}/>
  ):results.length>0?(
    
      <div className="container">
    <div className="top_slide">
            <h2>results for : {query}</h2>
          </div>
  
  
      <div className="products">
        { results.map((item,index)=>(
          <Product item={item} key={index}/>
        ))}
      </div>
    </div>
    
   
  ):<div className='container'><p>  no results found </p> </div>}

  </div> 
 </PageTransition>
  )
}
