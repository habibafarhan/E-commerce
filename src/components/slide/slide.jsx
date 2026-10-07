// import React from 'react'
// import Product from "../slide/product"
// import "../slide/slide.css"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import {  Autoplay,Navigation } from 'swiper/modules';



// export default function slide({data , title}) {
//   console.log(data);
//   return (
//     <div className='slide_product slide'>
//         <div className='container'>
//             <div className="top_slide">
//                 <h2>{title} </h2>
//                 <p>Lorem a eligendi asperiores</p> 
//             </div>
   
           
//             <Swiper     
//              loop={true}
//              autoplay={{
//                delay: 2000,
//                disableOnInteraction: false,
//              }}
//             slidesPerView={4}

//             navigation={true} 
//             modules={[  Autoplay,Navigation]}
//              className="mySwiper">
       

// {data.map((item)=>{

// return(
// <SwiperSlide> <Product item={item} /></SwiperSlide>

// )
// })}
     
 
//       </Swiper>



      
  
    
//         </div>
//     </div>
//   )
// }

















import React from "react";

import Product from "../slide/product";

import "../slide/slide.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import {
  Autoplay,
  Navigation,
} from "swiper/modules";


export default function Slide({ data = [], title }) {

  return (
    <div className="slide_product slide">

      <div className="container">

        <div className="top_slide">
          <h2>{title}</h2>
        </div>


        <Swiper

          loop={data.length > 4}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          navigation={true}

          modules={[
            Autoplay,
            Navigation,
          ]}

          breakpoints={{

            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1100: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

          }}

          className="mySwiper"
        >

          {data.map((item) => (

            <SwiperSlide key={item.id}>

              <Product item={item} />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </div>
  );
}