import React, { useState } from 'react'
import style from "./navbar.module.css"
import { useSelector,useDispatch } from 'react-redux'
import { setLogin } from '../../redux/slices/login'
import { setUser } from '../../redux/slices/userInfo'
import LoginPopup from './LoginPopup'

export function BtnForLogin() {
    const [popup,setPopup] = useState(false);
    const [login,setLogin] = useState(false);
    return (
    <div className='d-flex'>
        {popup && <LoginPopup popup={setPopup} login={login}/>}
        <div className={style.singBtn+" "+style.registerBtn} onClick={()=>{setLogin(true);setPopup(true);}}>Kayıt ol</div>
        <div className={style.singBtn+" "+style.loginBtn} onClick={()=>{setLogin(false);setPopup(true);}}>Giriş</div>
    </div>
  )
}


export function BtnForUser() {
    const dis = useDispatch();
    const soru = ()=>{
      dis(setLogin(false));
      dis(setUser(null));
      localStorage.removeItem("user");
    }
    const userInfo = useSelector(state => state.userInfo.value)
    return (
    <div className={style.userInfoBox} onClick={soru}>
      {
        userInfo.name.slice(0,1).toUpperCase()+
        userInfo.name.slice(1).toLowerCase()+
        " "+
        userInfo.surname.slice(0,1).toUpperCase()+
        userInfo.surname.slice(1).toLowerCase()
      }
      <i className="bi bi-box-arrow-right ms-3 fs-4"></i>
    </div>
  )
}