import React, { useState } from 'react'
import style from "./navbar.module.css"
import { useSelector,useDispatch } from 'react-redux'
import { setLogin } from '../../redux/slices/login'
import LoginPopup from './LoginPopup'

export function BtnForLogin() {
    const [popup,setPopup] = useState(false);
    const dis = useDispatch();
    return (
    <div className='d-flex'>
        {popup && <LoginPopup popup={setPopup}/>}
        <div className={style.singBtn+" "+style.registerBtn} onClick={()=>setPopup(true)}>Kayıt ol</div>
        <div className={style.singBtn+" "+style.loginBtn} onClick={()=>dis(setLogin(true))}>Giriş</div>
    </div>
  )
}


export function BtnForUser() {
    const dis = useDispatch();
    const userInfo = useSelector(state => state.userInfo.value)
    return (
    <div className={style.userInfoBox}>
      {
        userInfo.name.slice(0,1).toUpperCase()+
        userInfo.name.slice(1).toLowerCase()+
        " "+
        userInfo.lastname.slice(0,1).toUpperCase()+
        userInfo.lastname.slice(1).toLowerCase()
      }
    </div>
  )
}