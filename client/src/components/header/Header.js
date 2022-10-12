import React,{ useState,useEffect } from 'react'
import Navbar from './Navbar'
import { BtnForLogin,BtnForUser } from './LoginButtons';
import { useSelector } from 'react-redux'
import img from "../../logo.png";
import style from "./navbar.module.css"
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const loginInfo = useSelector(state => state.login.value);
  const [scroll,setScroll] = useState(0);
  useEffect(()=>{
    setInterval(() => {
      setScroll(window.scrollY)
    }, 300);
  },[])

  const goHome=()=>{
    navigate("/");
  }

  const goUp = ()=>{
    window.scrollTo(0,0);
  }
  return (
    <div>
      <div style={{width:scroll<100?"0px":"50px",height:scroll<100?"0px":"50px"}} className={style.scrollUp+" bg-color2 rounded center crs-pointer"} onClick={goUp}>
        {scroll >= 100 && <i className="bi bi-arrow-up-short fs-1"></i>}
      </div>
      <div className='text-white bg-color1 py-4 user-select-none pb-5 px-4'>
        <div className='container-xxl d-flex justify-content-between mobileMiddle'>
          <div className='mobileDestroy'>
            <img src={img} alt="" width={40} className="crs-pointer" onClick={goHome} style={{marginRight:"20px"}}/>
            <a href="https://github.com/Sarusbr/React-Ecommerce" className='text-decoration-none'><span className='border-start ps-3 ms-3 text-muted border-info'>
              <i class="bi bi-github fs-5 me-2"></i>
              <span>github.com/Sarusbr/React-Ecommerce</span>
            </span></a>
          </div>
          <div>
            { loginInfo ? <BtnForUser/>:<BtnForLogin/>}
          </div>
        </div>
      </div>

      <div className='container-xxl mb-5'> 
        <Navbar></Navbar>
      </div>
    </div>
  )
}
