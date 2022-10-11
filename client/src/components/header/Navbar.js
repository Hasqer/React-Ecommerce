import style from "./navbar.module.css"
import img from "../../logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
 
export default function Navbar() {
  const navigate = useNavigate();
  const data1 = useSelector((s)=>s.userInfo.value);
  
  let data = 0;

  try {
    data = (data1 == null ? 0 : data1.cart.length)
  } catch {
    data = 0;
  }

  const goCart=()=>{
    navigate("/sepetim");
  }
  const goHome=()=>{
    navigate("/");
  }
  return (
    <div className={style.bar+' rounded w-100 m-0 bg-color2 border border-dark text-dark shadow'}>
      <nav className="navbar navbar-expand-lg rounded navbar-dark user-select-none">
        <div className="container-fluid">
          <div className="navbar-brand border-end pe-4 text-color1 border-white crs-pointer">
            <b style={{textShadow:"1px 1px 2px rgba(255,255,255,1)"}} onClick={goHome}>TechUse</b>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent"
          style={{textShadow:"1px 1px 1px rgba(0,0,0,0.5)"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer"} aria-current="page">
                <a href="#Monitör" className="text-decoration-none text-white">Monitörler</a>
                </div>
              </li>
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer"} aria-current="page">
                  <a href="#Mouse" className="text-decoration-none text-white">Fareler</a>
                </div>
              </li>
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer"} aria-current="page">
                  <a href="#Klavye" className="text-decoration-none text-white">Klavyeler</a>
                </div>
              </li>
              <li className="nav-item">
                <div className={style.navbuttons+" nav-link center crs-pointer"} aria-current="page">
                  <a href="#Kulaklık" className="text-decoration-none text-white">Kulaklıklar</a>
                </div>
              </li>
              
            </ul>
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success"><i className="bi bi-search"></i></button>
            </div>
            
          </div>
          <div 
          className="px-2 btn btn-outline-success btn-sm ms-2 fs-5 text-color1 rounded d-flex position-relative" 
          style={{position:"relative",right:"0px",top:"0px"}}
          onClick={goCart}>
            <div className="position-relative me-2">
              <i className="bi bi-cart"></i>
              <div className={style.cartCount+" center text-white"} style={{display:data==0 ? "none":""}}>
                {data > 9 ? "+9":data}
              </div>
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
