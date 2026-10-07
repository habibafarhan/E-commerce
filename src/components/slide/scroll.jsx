// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import { useEffect } from "react";
// export default function Scroll() {

//     const {pathname}=useLocation()


//     useEffect(() => {
//         window.scrollTo({
//             top:0,
//             behavior:"smooth"
//         })
//     }, [pathname]);
//   return  null
// }



import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";


export default function Scroll() {

  const { pathname } = useLocation();


  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [pathname]);


  return null;
}