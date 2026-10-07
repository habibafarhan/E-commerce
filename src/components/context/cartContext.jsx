import React, { createContext, useState, useEffect } from "react";

export const CartConText = createContext();

export default function CartProvider({ children }) {


  const [favorites, setFavorites] = useState(() => {
    const savedFav = localStorage.getItem("favorites");

    return savedFav ? JSON.parse(savedFav) : [];
  });

  const addTOFavorites = (item) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);




  
  const removeFromFavorite=(id)=>{
    setFavorites((prev)=>prev.filter((i)=>i.id!==id))
  }



  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...item,
        quantity: 1,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartConText.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addTOFavorites,
        favorites,
        removeFromFavorite
      }}
    >
      {children}
    </CartConText.Provider>
  );
}
