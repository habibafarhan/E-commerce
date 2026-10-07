import React from 'react'
import { useState,useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate ,Link, useLocation} from 'react-router-dom';


export default function searchBox() {
    const[searchTerm,setSearchTerm]=useState("")
    const[suggestions,setSuggestions]=useState([])
    const navigate=useNavigate()


const location=useLocation()

    const handelSubmit=(e)=>{
        e.preventDefault()
        if(searchTerm.trim()){
             navigate(`/search?query=${encodeURIComponent ( searchTerm.trim())}`)
        }
       setSuggestions([])
    }
    useEffect(() => {
      const fetchsuggestions=async()=>{
        if(!searchTerm.trim()){
          setSuggestions([])
          return 
        }
        try{
          const res=await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
          const data=await res.json()
          setSuggestions(data.products.slice(0,5)||[])
        }   catch(error){
          console.error("search error:",error)
          setSuggestions([])
      }
    }
const debonuce=setTimeout(() => {
  fetchsuggestions()
}, 300);
return()=>clearTimeout(debonuce)
    }, [searchTerm]);
 

    useEffect(()=>{
    setSuggestions([])
    },[location])
  return (
    <div>
      <div className="searchBox_contaner">
      <form onSubmit={handelSubmit}  className='search_box'>
          <input type="text" name='search'id='search' placeholder='search'
          onChange={(e)=> setSearchTerm(e.target.value)}
          autoComplete="off"
          />
          <button type='submit'><FaSearch /></button>
        </form>
        {
          suggestions.length > 0 && (
            <ul className='suggestion'>
              {suggestions.map((item)=>(
            <Link to={`/products/${item.id}`} > <li key={item.id}>
               <img src={item.images[0]} alt="" />
            <span>{item.title}</span> </li>
            </Link>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  )
}
