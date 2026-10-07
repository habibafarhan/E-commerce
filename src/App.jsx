import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/btmHeader";
import TopHeader from "./components/header/topHeader";
import ProductDetails from "./page/productDetails/productDetails";
import Home from "./page/home/home";
import Cart from "./page/cart/cart";
import { Toaster } from "react-hot-toast";
import Scroll from ".././src/components/slide/scroll";
import CategoryPage from "./page/categorypage/categoryPage";
import { AnimatePresence } from "framer-motion";
import SearchResult from "./page/searchResult";
import Favorites from "../src/page/favorites/favorites";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <Scroll />
      <AnimatePresence mood="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResult/>} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={< CategoryPage/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
