import React, { useState, useEffect } from "react"
import style from "./cart.module.css";
import Products from "./Products";
import TotalInfo from "./TotalInfo";
import {useSelector} from "react-redux"

export default function Cart() {
  const {cart : cartData, id : UserId} = useSelector(state => state.userInfo.value) || {};
  const [totalPrice, setTotalPrice] = useState([]);
  const loggedIn = useSelector(state => state.login.value);
  const [priceSum,sumPriceSum] = useState(0);


  if(!loggedIn)
    window.location.replace("/");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    let data = 0;
    totalPrice.forEach(element => {
      data += parseInt(element.price*element.count);
    });
    sumPriceSum(data);
  },[totalPrice])

  return(
    <div className="container-xl">
      <div className="row">
        <div id={style.containerProductBox} className="col-xl-9 rounded">
          <div className="box-shadow pt-4 pb-3 mb-4 px-2 bg-white rounded border border-light">
            {
              (cartData.length > 0) ?(
              cartData.map((element, i)=>{
                return(
                    <Products key={i} cartData={cartData[i]} userId={UserId} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                )
              }))
              :(<div className="conteiner-xl flex-column center">
                  <i style={{fontSize:"80px"}} className="bi bi-cart"></i>
                  <h1 className="text-center">Sepetinde ürün bulunmamaktadır.</h1>
              </div>)
            }
          </div>
        </div>
        <div id={style.containerInfoBox} className="col-xl-3 rounded mb-4">
          <TotalInfo totalPrice={priceSum} userId={UserId} setTotalPrice={setTotalPrice}/>
        </div>
      </div>
    </div>
  )}