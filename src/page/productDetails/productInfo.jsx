import React, { useContext } from "react";

import { TiStarFullOutline, TiShoppingCart } from "react-icons/ti";

import { IoIosStarHalf } from "react-icons/io";

import { FaRegHeart, FaShare } from "react-icons/fa";

import { CartConText } from "../../components/context/cartContext";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

export default function ProductInfo({ product }) {
  const {
    cartItems,
    addToCart,
    addTOFavorites,
    favorites,
    removeFromFavorite,
  } = useContext(CartConText);

  const isInCart = cartItems.some((i) => i.id === product.id);

  const navigate = useNavigate();

  const handelAddToCart = () => {
    if (isInCart) return;

    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />

        <div className="toast-content">
          <strong>{product.title}</strong>

          <span>added to cart</span>

          <div>
            <button className="toast-btn" onClick={() => navigate("/cart")}>
              view cart
            </button>
          </div>
        </div>
      </div>,
      {
        duration: 3500,
      }
    );
  };

  const isInFav = favorites.some((i) => i.id === product.id);

  const handelAddToFav = () => {
    if (isInFav) {
      removeFromFavorite(product.id);
      toast.error(`${product.title} removed from favorites`);
    } else {
      addTOFavorites(product);
      toast.success(`${product.title} added to favorites`);
    }
  };

  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>

      <div className="stars">
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <IoIosStarHalf />
      </div>

      <p className="price">${product.price}</p>

      <h5>
        Availability:
        <span>{product.availabilityStatus}</span>
      </h5>

      <h5>
        Brand:
        <span>{product.brand}</span>
      </h5>

      <p className="desc">{product.description}</p>

      <h5 className="stock">
        <span>Hurry UP! Only {product.stock} products left in stock.</span>
      </h5>
      <button
        className={`product_btn ${isInCart ? "in-cart" : ""}`}
        onClick={handelAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "Item in cart" : "Add to cart"}
        <TiShoppingCart />
      </button>


      <div className="icons">
      <span
  className={`${isInFav ? "in-fav" : ""}`}
  onClick={handelAddToFav}
>
  <FaRegHeart />
</span>

        <span>

          <FaShare />
        </span>
      </div>
    </div>
  );
}
