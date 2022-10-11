import React, { useState } from 'react'
import style from "./cart.module.css";
import Products from "./Products";
import {useSelector} from "react-redux"

export default function TotalInfo({totalPrice}) {
  return (
            <div className='box-shadow bg-white rounded border border-light'>
                <div className="my-3 mx-2 d-flex row justify-content-center align-items-center h-100">
                <div className="m-1">
                    <h1 style={{fontSize:"22px"}} >Sipariş Özeti</h1>
                </div>
                <div className="d-flex row mt-3">
                    <div className='d-flex justify-content-between'>
                    <h1 style={{fontSize:"15px"}}>Ürünler</h1>
                    <h1 style={{fontSize:"18px"}}>{totalPrice.toFixed(3)},00 TL</h1>
                    </div>
                    <div className='d-flex justify-content-between mb-2'>
                    <h1 style={{fontSize:"15px"}}>Kargo Bedava</h1>
                    <h1 style={{textDecoration: "line-through",fontSize:"18px"}}>18,99 TL</h1>
                    </div>
                    <hr />
                    <div className=" mb-2 d-flex justify-content-end">
                    <h1 style={{fontSize:"26px"}}>{totalPrice.toFixed(3)},00 TL</h1>
                    </div>
                </div>
                <div className="d-grid">
                    <button className="btn bg-color1 text-white py-3" type="button">Alışverişi Tamamla</button>
                </div>
                </div>
            </div>
        )}
