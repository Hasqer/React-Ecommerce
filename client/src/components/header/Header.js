import React,{ useState,useEffect } from 'react'
import Navbar from './Navbar'
import { BtnForLogin,BtnForUser } from './LoginButtons';
import { useSelector } from 'react-redux'
import img from "../../logo.png";
import style from "./navbar.module.css"

export default function Header() {
  const loginInfo = useSelector(state => state.login.value);
  const [scroll,setScroll] = useState(0);
  useEffect(()=>{
    setInterval(() => {
      setScroll(window.scrollY)
    }, 300);
  },[])

  const goUp = ()=>{
    window.scrollTo(0,0);
  }
  return (
    <div>
      <div style={{width:scroll<30?"0px":"50px",height:scroll<30?"0px":"50px"}} className={style.scrollUp+" bg-color2 rounded center crs-pointer"} onClick={goUp}>
        {scroll > 30 && <i class="bi bi-arrow-up-short fs-1"></i>}
      </div>
      <div className='text-white bg-color1 py-4 user-select-none pb-5 px-4'>
        <div className='container-xxl d-flex justify-content-between mobileMiddle'>
          <div className='mobileDestroy'>
            <img src={img} alt="" width={40} style={{marginRight:"20px"}}/>
            <span className='border-end pe-3 me-3 border-info'>Hakkımızda</span>
            <span>weare@techuse.com</span>
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
