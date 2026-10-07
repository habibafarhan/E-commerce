
import React, { useState, useEffect } from "react";
import HeroSlider from "../../components/HeroSlider";
import "../../page/home/home.css"
import Slide from "../../components/slide/slide";
import PageTransition from "../../components/pageTransition";
const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sports-accessories",
  "sunglasses",
];

export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );

            const data = await res.json();

            return {
              [category]: data.products
            };
          })
        );

        const productsData = Object.assign({}, ...results);

        setProducts(productsData);
      } catch (error) {
        console.error("error fetching", error);
      }finally{
        setLoading(false)
      }
    };

    fetchProducts();
  }, []);
console.log(products["smartphones"]);
  return (
   <PageTransition>
     <div>
      <HeroSlider />
{
    loading? (
        <p>loading....</p>
    ):(
        categories.map((category) => (
            <Slide
              key={category}
              data={products[category]}
              title={category.replace("-"," ")}
            />
          ))
    )
}
   
 
    </div>
   </PageTransition>

  );
}


