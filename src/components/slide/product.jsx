 
import React, { useContext } from "react";

import { TiStarFullOutline } from "react-icons/ti";
import { IoIosStarHalf } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { CartConText } from "../context/cartContext";

import toast from "react-hot-toast";


export default function Product({ item }) {

  const navigate = useNavigate();

  const { cartItems, addToCart,addTOFavorites,favorites,removeFromFavorite } = useContext(CartConText);

  const isInCart = cartItems.some(
    (i) => i.id === item.id
  );


  const handelAddToCart = () => {

    if (isInCart) return;

    addToCart(item);

    toast.success(
      <div className="toast-wrapper">

        <img
          src={item.images[0]}
          alt=""
          className="toast-img"
        />

        <div className="toast-content">

          <strong>
            {item.title}
          </strong>

          <span>
            added to cart
          </span>

          <div>
            <button
              className="toast-btn"
              onClick={() => navigate("/cart")}
            >
              view cart
            </button>
          </div>

        </div>

      </div>,
      {
        duration: 3000,
      }
    );
  };

  const isInFav = favorites.some(
    (i) => i.id === item.id
  );


const handelAddToFav=()=>{
  if(isInFav){
    removeFromFavorite(item.id)
    toast.error(`${item.title } removed from favorites`)

  }else{
      addTOFavorites(item)
toast.success(`${item.title } added to favorites`)
  }

}
  return (
    <div
      className={`product ${
        isInCart ? "in-cart" : ""
      }`}
    >

      <Link to={`/products/${item.id}`}>

        {isInCart && (
          <span className="status_cart">
            <FaCheck />
            in cart
          </span>
        )}

        <div className="img_product">
          <img
            src={item.images[0]}
            alt={item.title}
          />
        </div>

        <p className="name_product">
          {item.title}
        </p>

        <div className="stars">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <IoIosStarHalf />
        </div>

        <p className="price">
          <span>
            ${item.price}
          </span>
        </p>

      </Link>

      <div className="icons">

        <span
          className="btn_addtocart"
          onClick={handelAddToCart}
        >
          <FaCartArrowDown />
        </span>

        <span
        className={`${isInFav?"in-fav":""}`}
        onClick={handelAddToFav}>
          <FaRegHeart />
        </span>

        <span>
          <FaShare />
        </span>

      </div>

    </div>
  );
}