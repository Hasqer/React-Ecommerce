import React from 'react'
import style from "./product.module.css";

let ratingCount = [1,2,3,4,5];

export default function Description({comments}) {
  
  return (
    <div id={style.commentsBox} className=" my-4 row border border-light bg-white rounded d-flex">    
     {
      comments != null && comments.map((item,x)=>{
       return(
        <div className="row" key={x} >
                <div key={x} className={style.ratingsBox + " col-xl-2 mt-4 container d-flex justify-content-center align-items-top flex-wrap m-0"}>
                <div key={x} className={style.ratings}>
                  {
                  ratingCount.map((empty, i) =>{
                    if(parseInt(item.rating) >= (i+1))
                    return( <i key={i} className={style.ratingColor +" bi bi-star-fill"}></i>)
                    else
                    return( <i key={i} className="bi bi-star-fill"></i>)
                  })
                  }
                </div>
                <h5 className="text-wrap text-center w-100 d-flex justify-content-center">{item.nameSurname}</h5>
                <h6 className="text-wrap text-center w-100 d-flex justify-content-center">{item.date}</h6>
                </div>
                <div key={Math.random()} className={ "col-xl-10 mt-4 container d-flex justify-content-start align-items-center m-0"}>
                  <p className={style.commentText}>{item.comment}</p>
                </div>
                {
                (x < comments.length-1) && <hr className="mb-0 mt-4 w-100 text-secondary"/>
                }
        </div>)
      })
     }
    </div>    
  )
}
