 





import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./product.css";

import ProductImg from "./productimg";
import ProductInfo from "./productInfo";

import Slide from "../../components/slide/slide";
import PageTransition from "../../components/pageTransition";


export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // الصورة المختارة
  const [selectedImg, setSelectedImg] = useState("");

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] =
    useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        const data = await res.json();

        setProduct(data);

        // أول صورة تكون هي الصورة الكبيرة في البداية
        setSelectedImg(data.images[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product?.category) return;

    setLoadingRelatedProducts(true);

    fetch(
      `https://dummyjson.com/products/category/${product.category}`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.products.filter(
          (item) => item.id !== product.id
        );

        setRelatedProducts(filtered);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingRelatedProducts(false);
      });
  }, [product]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (!product) {
    return <p className="not_found">Product not found</p>;
  }

  return (
<PageTransition key={id}>
<div className="product_details_page">

<section className="item_details">
  <div className="container">

    <ProductImg
      product={product}
      selectedImg={selectedImg}
      setSelectedImg={setSelectedImg}
    />

    <ProductInfo product={product} />

  </div>
</section>

{!loadingRelatedProducts &&
  relatedProducts.length > 0 && (
    <Slide
      data={relatedProducts}
      title={product.category.replace("-", " ")}
    />
  )}

</div>
</PageTransition>
  );
}






 


 