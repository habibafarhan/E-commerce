import React, { useContext } from "react";
import { CartConText } from "../../components/context/cartContext";
import PageTransition from "../../components/pageTransition";
import Product from '../../components/slide/product'
function favorites() {
  const { favorites } = useContext(CartConText);

  return (
    <PageTransition>
      <div className="category_products">
        <div className="container">
          <div className="top_slide">
            <h2>your favorites</h2>
          </div>
          {favorites.length === 0 ? (
            <p>no favorites products yet.</p>
          ) : (
            <div className="products">
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default favorites;
