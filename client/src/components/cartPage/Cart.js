import React from 'react'
import style from "./cart.module.css";

export default function Cart() {
  return(
    <div className="container-xl flex-row justify-content-center">
        <h1 class="display-1 d-flex justify-content-start">Shopping Cart</h1>
        <div className="d-flex">
          <div className="col-xl-8 m-0 mt-4 row border border-light rounded h-100">
            <div id={style.detailBox} className="m-0 d-flex justify-content-start rounded bg-primary ">
            </div>
          </div>
          <div id={style.cartBox} className="col-xl-4 mt-4 mb-0 row border border-light rounded bg-secondary m-0 p-0">
          </div>
        </div>

    </div>
  )
}