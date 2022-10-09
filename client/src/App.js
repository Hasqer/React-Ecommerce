import Header from "./components/header/Header";
import Product from "./components/productPage/Product";
import Content from "./components/contentPage/Content";
import Cart from "./components/cartPage/Cart";
import {Routes, Route} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getProduct } from "./redux/slices/products";
import { setUser } from "./redux/slices/userInfo";
import { setLogin } from "./redux/slices/login";
import axios from "axios";
import { useEffect, useState } from "react";
import './global.css';


function App() {
  const dis = useDispatch();
  const [load,setLoad] = useState(false);
  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user!=null){
      dis(setUser(JSON.parse(user)));
      dis(setLogin(true));
    }
    axios.post("/products")
    .then(res =>{
      dis(getProduct(res.data.data));
      setLoad(true)
    })
  },[])
  return (
    <div>
      <Header></Header>
      {load && <Routes>
        <Route path="/content" element={<Content/>} />
        <Route path="/urunler/:id" element={<Product />} />
        <Route path="/sepetim" element={<Cart/>} />
      </Routes>}
    </div>
    );
}

export default App;
