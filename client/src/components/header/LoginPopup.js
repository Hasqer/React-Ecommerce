import React, { useState } from 'react'
import style from "./popup.module.css";

export default function LoginPopup({popup}) {

  const [login,setLogin] = useState(false);

  return (
    <div className={style.popupContainer+" center"} onMouseDown={()=>popup(false)}>
        <div className={style.popup+" text-black d-flex flex-column justify-content-between"} style={{height:login?"550px":"400px"}} onMouseDown={(e)=>e.stopPropagation()}>
          <div className='center h-25 bg-color1 text-white'>Logo</div>
          <div className='p-4'>
            { login && <div className='gap-3 d-flex'>
              <input type="text" className={style.input+" fs-4"} placeholder="İsim"/>
              <input type="text" className={style.input+" fs-4"} placeholder="Soyisim"/></div>
            }
            <input type="text" className={style.input+" fs-4"} placeholder="E-posta"/>
            <input type="text" className={style.input+" fs-4"} placeholder="Şifre"/>
            {login && <input type="text" className={style.input+" fs-4"} placeholder="Tekrar şifre"/>}
          </div>
          <div className='p-4 d-flex justify-content-between' >
            <div className={"btn w-25"+(login?" btn-primary":" btn-danger")} style={{transition:"0.3s"}} onClick={()=>setLogin(!login)}>
              {login?"Giriş":"Kayıt ol"}
            </div>
            <div className={"btn w-50"+(!login?" btn-primary":" btn-danger")} style={{transition:"0.3s"}} >
              {!login?"Giriş":"Kayıt ol"}
            </div>
          </div>
        </div>
    </div>
  )
}
