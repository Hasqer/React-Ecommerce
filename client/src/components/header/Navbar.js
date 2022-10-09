import { useState } from 'react'
import style from "./navbar.module.css"
import img from "../../logo.png";

export default function Navbar() {
  const [search,getSearch] = useState(true)
  return (
    <div className={style.bar+' rounded w-100 m-0 bg-color2'}>
      <nav className="navbar navbar-expand-md rounded navbar-dark user-select-none">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={img} alt="" style={{height:"40px"}} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">Monitörler</div>
              </li>
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">Fareler</div>
              </li>
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">Klavyeler</div>
              </li>
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">Kulaklıklar</div>
              </li>
              
            </ul>
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success"><i className="bi bi-search"></i></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
