import Header from "./components/header/Header";
import Product from "./components/productPage/Product";
import Content from "./components/contentPage/Content";
import Cart from "./components/cartPage/Cart";
import {Routes, Route} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { getProduct } from "./redux/slices/products";
import axios from "axios";
import { useEffect } from "react";
import './global.css';
function App() {
  const dis = useDispatch();
  useEffect(()=>{
    axios.post("/products")
    .then(res =>{
      dis(getProduct(res.data.data));
    })
  },[])
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/content" element={<Content/>} />
        <Route path="/urunler/:id" element={<Product />} />
        <Route path="/sepetim" element={<Cart/>} />
      </Routes>
    </div>
    );
}

export default App;
