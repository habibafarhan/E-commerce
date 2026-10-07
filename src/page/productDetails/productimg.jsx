
// import React from "react";

// export default function ProductImg({ product }) {
//   return (
//     <div>
//       <div className="images_item">

//         <div className="big_img">
//           <img
//             src={product.images?.[0]}
//             alt={product.title}
//           />
//         </div>

//         <div className="small_img">
//           {product.images?.map((img, index) => (
//             <div className="img_div_sm" key={index}>
//               <img
//                 src={img}
//                 alt={product.title}
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
 


 
import React from "react";

export default function ProductImg({
  product,
  selectedImg,
  setSelectedImg,
}) {
  return (
    <div className="images_item">

      {/* الصورة الكبيرة */}
      <div className="big_img">
        <img
          src={selectedImg}
          alt={product.title}
        />
      </div>

      {/* الصور الصغيرة */}
      <div className="small_img">
        {product.images.map((img, index) => (
          <div
            key={index}
            className={`img_div_sm ${
              selectedImg === img ? "active" : ""
            }`}
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`${product.title} ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </div>
  );
}