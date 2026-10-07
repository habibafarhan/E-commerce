import React from "react";
import react, { useContext } from "react";
import { CartConText } from "../../components/context/cartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css"
import PageTransition from "../../components/pageTransition";

export default function Cart() {
  const { cartItems,increaseQuantity,decreaseQuantity ,removeFromCart} = useContext(CartConText);
  console.log(cartItems);
  const total=cartItems.reduce((acc, item)=>acc + item.price*item.quantity, 0)
  return (
   <PageTransition>
     <div className="checkout">
      <div className="order">

        <h1>order summary </h1>


        <div className="items">
          {cartItems.length === 0 ? (
            <p>your cart is empty...</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="item_cart" key={index}>
                <div className="img_name">
<div className="img_item">
<img src={item.images[0]} alt="" />

  </div>                  <div className="content">
                        <h4>{item.title}</h4>
                        <p className="price_item">${item.price}</p>
                        <div className="quantity_control">
                            <button onClick={()=>decreaseQuantity(item.id)}>-</button>
                            <span className="quantity">{item.quantity}</span>

                            <button onClick={()=>increaseQuantity(item.id)}>+</button>
                        </div>
                  </div>

                </div>
                  <button 
                   onClick={()=>removeFromCart(item.id)}
                  className="delete_item"><FaTrashAlt /></button> 
              </div>
            ))
          )}
        </div>
        <div className="bottom_summary">
            <div className="shopTable">
                <p>total:</p>
                <span className="total_checkout">${total.toFixed(2)}</span>
            </div>
            <div className="button_div">
                <button type="submit">place Order</button>
            </div>
        </div>
      </div>
    </div>
   </PageTransition>
  );
}
