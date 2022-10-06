import React from 'react'
import style from "./product.module.css";

export default function Description() {
  return (
    <div id={style.commentsBox} className="mt-4 row border border-light bg-white rounded">
                <ul className="rating mb-3" data-mdb-toggle="rating">
                  <li>
                    <i className="bi bi-star-o fa-sm text-danger" title="Bad"></i>
                  </li>
                  <li>
                    <i className="bi bi-star fa-sm text-danger" title="Poor"></i>
                  </li>
                  <li>
                    <i className="bi bi-star fa-sm text-danger" title="OK"></i>
                  </li>
                  <li>
                    <i className="bi bi-star fa-sm text-danger" title="Good"></i>
                  </li>
                  <li>
                    <i className="bi bi-star fa-sm text-danger" title="Excellent"></i>
                  </li>
                </ul>
    </div>
  )
}
