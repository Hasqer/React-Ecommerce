import React, { useEffect } from 'react'
import style from "./product.module.css";

export default function ProductImg({photos}) {
    
  return (
    <div id={style.ImageBox} className="col-xl-5 border border-light bg-white rounded  ">
      <div id="carouselExampleIndicators" className={style.slide + " carousel carousel-dark slide h-100"} data-bs-ride="true">
          <div className="carousel-indicators ">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner my-3 ">
          {
              photos != null && photos.map((item,i)=>{
                return(
                  <div key={item}>{
                    (i == 0) ? 
                    <div className="carousel-item active" >
                      <img src={item} id={style.Image} className="rounded d-block w-100" alt="..."/>
                    </div>:
                    <div className="carousel-item ">
                      <img src={item} id={style.Image} className="rounded d-block w-100 h-100" alt="..."/>
                    </div>
                    }
                  </div>
                )
              })
            }
        </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
    </div>
  )
}
