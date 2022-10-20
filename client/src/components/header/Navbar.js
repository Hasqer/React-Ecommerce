import style from "./navbar.module.css"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/search"; 
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const searchValue = useSelector((e)=>e.search.value);
  const dis = useDispatch();
  const data1 = useSelector((s)=>s.userInfo.value);
  const [ser,setSer] = useState("");
  const loginData = useSelector((s)=>s.login.value);
  let data = 0;
  
  
  /* useEffect(()=>{
    dis(setSearch(ser))
  },[ser]) */

  try {
    data = (data1 == null ? 0 : data1.cart.length)
  } catch {
    data = 0;
  }

  const goCart=()=>{
    if(loginData)navigate("/sepetim");
    else alert("Önce giriş yapmalısınız!");
  }
  const goHome=()=>{
    dis(setSearch(""));
    navigate("/");
  }
  return (
    <div className={style.bar+' rounded w-100 m-0 bg-color2 border border-dark text-dark shadow'}>
      
      <nav className="navbar navbar-expand-lg rounded navbar-dark user-select-none">
        <div className="container-fluid">
          <div className="navbar-brand pe-2 text-color1 crs-pointer" onClick={goHome}>
            <b style={{textShadow:"1px 1px 2px rgba(255,255,255,1)"}}>TechUse{ser}</b>
          </div>
          <div className="collapse navbar-collapse ps-2 border-start border-white" id="navbarSupportedContent"
          style={{textShadow:"1px 1px 1px rgba(0,0,0,0.5)"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item"><a href="/#Kulaklık" className="text-decoration-none ">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">
                  Kulaklık
                </div></a>
              </li>
              <li className="nav-item"><a href="/#Klavye" className="text-decoration-none">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">
                  Klavye
                </div></a>
              </li>
              <li className="nav-item"><a href="/#Monitör" className="text-decoration-none">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">
                Monitör
                </div></a>
              </li>
              <li className="nav-item"><a href="/#Mouse" className="text-decoration-none">
                <div className={style.navbuttons+" nav-link center crs-pointer text-white"} aria-current="page">
                  Mouse
                </div></a>
              </li>
              
            </ul>
            <div className="d-flex" role="search">
              <input 
              value={searchValue} 
              onChange={(e)=>{dis(setSearch(e.target.value)) && (window.location.pathname != "/" && navigate("/"))}}
              className="form-control me-2" type="search" id="searchInput" placeholder="Search" aria-label="Search"/>
            </div>
            
          </div>
          <div 
          className="px-2 btn btn-outline-success btn-sm ms-2 fs-5 text-white rounded d-flex position-relative" 
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
