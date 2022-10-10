import style from "./navbar.module.css"
import img from "../../logo.png";

export default function Navbar() {
  return (
    <div className={style.bar+' rounded w-100 m-0 bg-color2'}>
      <nav className="navbar navbar-expand-lg rounded navbar-dark user-select-none">
        <div className="container-fluid">
          <div className="navbar-brand border-end pe-4 text-color1 border-white">
            <b style={{textShadow:"1px 1px 2px rgba(255,255,255,1)"}}>TechUse</b>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent"
          style={{textShadow:"1px 1px 1px rgba(0,0,0,0.5)"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
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
          <div 
          className="px-2 btn btn-outline-success btn-sm ms-2 fs-5 text-color1 rounded d-flex position-relative" 
          style={{position:"relative",right:"0px",top:"0px"}}>
            <div className="position-relative me-2">
              <i className="bi bi-cart"></i>
              <div className={style.cartCount+" center text-white"}>+9</div>
            </div>
            Sepetim
          </div>
          <button className="navbar-toggler mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}
