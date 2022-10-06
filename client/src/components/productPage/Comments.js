import React from 'react'
import style from "./product.module.css";

export default function Description() {
  return (
    <div id={style.commentsBox} className=" my-4 row border border-light bg-white rounded d-flex">
              <div className={style.ratingsBox + " col-xl-2 mt-4 container d-flex justify-content-center align-items-top flex-wrap m-0"}>
                    <div className={style.ratings}>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={"bi bi-star-fill"}></i>
                      <i className={"bi bi-star-fill"}></i>
                    </div>
             <h5 className="text-wrap w-100 d-flex justify-content-center">Ozan Ayrıkan</h5>
             <h6 className="text-wrap w-100 d-flex justify-content-center">26 Eylül 2052</h6>
             </div>
             <div className={ "col-xl-10 mt-4 container d-flex justify-content-start align-items-center m-0"}>
                <p className={style.commentText}>Arkadaşım aldı o yüzden ben de satın aldım, güzel ürün cidden tavsiye ederim</p>
             </div>
             <hr className="mb-0 mt-4 w-100 text-secondary"></hr> 
             <div className={style.ratingsBox + " col-xl-2 mt-4 container d-flex justify-content-center align-items-top flex-wrap m-0"}>
                    <div className={style.ratings}>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={"bi bi-star-fill"}></i>
                      <i className={"bi bi-star-fill"}></i>
                    </div>
             <h5 className="text-wrap w-100 d-flex justify-content-center">Ozan Ayrıkan</h5>
             <h6 className="text-wrap w-100 d-flex justify-content-center">26 Eylül 2052</h6>
             </div>
             <div className={ "col-xl-10 mt-4 container d-flex justify-content-start align-items-center m-0"}>
                <p className={style.commentText}>Arkadaşım aldı o yüzden ben de satın aldım, güzel ürün cidden tavsiye ederim</p>
             </div> 
             <hr className="mb-0 mt-4 w-100 text-secondary"></hr> 
             <div className={style.ratingsBox + " col-xl-2 mt-4 container d-flex justify-content-center align-items-top flex-wrap m-0"}>
                    <div className={style.ratings}>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={style.ratingColor +" bi bi-star-fill"}></i>
                      <i className={"bi bi-star-fill"}></i>
                      <i className={"bi bi-star-fill"}></i>
                    </div>
             <h5 className="text-wrap w-100 d-flex justify-content-center">Ozan Ayrıkan</h5>
             <h6 className="text-wrap w-100 d-flex justify-content-center">26 Eylül 2052</h6>
             </div>
             <div className={ "col-xl-10 mt-4 container d-flex justify-content-start align-items-center m-0"}>
                <p className={style.commentText}>Arkadaşım aldı o yüzden ben de satın aldım, güzel ürün cidden tavsiye ederim</p>
             </div> 
    </div>    
  )
}
