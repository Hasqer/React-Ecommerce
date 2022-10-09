import React from 'react'
import style from "./product.module.css";

export default function Info({title, shortDescription, price}) {
  return (
    <div id={style.containerInfoBox} className="col-xl-7 rounded p-0 justify-content-end d-flex" >
      <div id={style.InfoBox} className='bg-white rounded border border-light h-100'>
        <div id={style.title} className="m-4 mb-0">
          <h5>{title}</h5>
        </div>
        <div id={style.freeShippingBox}>
          <h3><span className="badge bg-color2 text-wrap">250 TL Üzeri Kargo Bedava</span ></h3>
        </div>
        <div id={style.shortDescriptionBox} className="mx-4">
          <p className='text-wrap'>{shortDescription}</p>
        </div>
        <div id={style.category} className="mx-4 d-flex justify-content-start ">
          <h5>Kategori :</h5>
          <h5 style={{marginLeft: "1rem"}}>Teknoloji</h5>
        </div>
        <div id={style.price} className="mx-4 d-flex ">
          <h1>{price}</h1> <h1>,00  TL</h1>
        </div>
        <div className={style.detailBox + " "}>
          <button type="button" className="btn text-white btn-lg btn-block bg-color1 " >Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}
