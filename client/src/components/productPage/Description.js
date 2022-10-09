import React from 'react'
import style from "./product.module.css";

export default function Description({longDescription}) {
  return (
    <div id={style.descriptionBox} className="mt-4 mb-0 row border border-light bg-white rounded h-100">
            <p>
              {longDescription}
            </p>
    </div>
  )
}
