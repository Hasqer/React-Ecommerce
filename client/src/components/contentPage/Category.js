import React,{useState} from 'react'
import style from "./content.module.css"

export default function Category({data}) {
  return (
    <div className={style.mybox+" box-shadow text-black bg-white rounded"}>
      <img src={data.photos[0]} className={style.imageBox}>

      </img>
    </div>  
  )
}
