import React, { useState } from 'react'
import style from "./popup.module.css";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/slices/login'
import { setUser } from '../../redux/slices/userInfo'
import { getProduct } from '../../redux/slices/products';

export default function LoginPopup(props) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [password2,setPassword2] = useState("");
  const [myname,setMyname] = useState("");
  const [mylastname,setMylastname] = useState("");

  const [MyLogin,setMyLogin] = useState(props.login);

  const dis = useDispatch();

  const loginFunc=()=>{
    axios.post('/login',{
      email,
      password
    })
    .then(res => {
      if(res.data.status){
        dis(setLogin(true));
        dis(setUser({
          name:res.data.result.name,
          surname:res.data.result.surname,
        }));
        axios.post("/products")
          .then(res =>{
              console.log(res.data.data);
              console.log(res.data);
          })
      }
      else{
        alert("E-posta yada şifre hatalı!");
      }
    })
  }

  const registerFunc=()=>{
    axios.post('/register',{
      email,
      password,
      name:myname,
      surname:mylastname
    })
    .then(res=>{
      if(res.data.status == true){
        alert("kullanıcı başarılı bir şekilde kaydedildi")
        dis(setLogin(true));
        dis(setUser({
          name:res.data.result.name,
          surname:res.data.result.surname,
        }));
        dis(getProduct());
      }
      else if(res.data.status == "unsucces"){
        alert("bu kullanıcı var")
      }
      else{
        alert("veriler boş geldi")
      }
    })

    /*
      true (data)
      unsucces (bu veriler zaten)
      false (boş veri)
    */
  }

  return (
    <div className={style.popupContainer+" center"} onMouseDown={()=>props.popup(false)}>
        <div className={style.popup+" text-black d-flex flex-column justify-content-between"} style={{height:MyLogin?"550px":"400px"}} onMouseDown={(e)=>e.stopPropagation()}>
          <div className='center h-25 bg-color1 text-white'>Logo</div>
          <div className='p-4'>
            { MyLogin && <div className='gap-3 d-flex'>
              <input type="text" value={myname} onChange={(e)=>setMyname(e.target.value)} className={style.input+" fs-4"} placeholder="İsim"/>
              <input type="text" value={mylastname} onChange={(e)=>setMylastname(e.target.value)} className={style.input+" fs-4"} placeholder="Soyisim"/></div>
            }
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className={style.input+" fs-4"} placeholder="E-posta"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className={style.input+" fs-4"} placeholder="Şifre"/>
            {MyLogin && <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} className={style.input+" fs-4"} placeholder="Tekrar şifre"/>}
          </div>
          <div className='p-4 d-flex justify-content-between' >
            <div 
              className={"btn w-25"+(MyLogin?" btn-primary":" btn-danger")} 
              style={{transition:"0.3s"}} onClick={()=>setMyLogin(!MyLogin)}
              >
              {MyLogin?"Giriş":"Kayıt ol"}
            </div>

            <div 
              className={"btn w-50"+(!MyLogin?" btn-primary":" btn-danger")} 
              style={{transition:"0.3s"}} 
              onClick={MyLogin?registerFunc:loginFunc}
              >
              {!MyLogin?"Giriş":"Kayıt ol"}
            </div>
          </div>
        </div>
    </div>
  )
}
