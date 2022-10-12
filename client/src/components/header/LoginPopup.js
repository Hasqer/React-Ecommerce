import React, { useState } from 'react'
import style from "./popup.module.css";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/slices/login'
import { setUser } from '../../redux/slices/userInfo'
import img from "../../logo.png";

export default function LoginPopup(props) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [password2,setPassword2] = useState("");
  const [myname,setMyname] = useState("");
  const [mylastname,setMylastname] = useState("");

  const [MyLogin,setMyLogin] = useState(props.login);

  const dis = useDispatch();

  const formControl = () =>{
    const splitEmail = email.split("@");
    if(
      !email.includes("@") || 
      splitEmail.length != 2 || 
      splitEmail[0].length < 3 || 
      splitEmail[1].length < 3 || 
      !splitEmail[1].includes(".") ||
      splitEmail[1][0] == "." ||
      splitEmail[1][(splitEmail[1].length)-1] == "."
      ){
      alert("E-posta Uygun değil!");
      return false;
    }
    else if(password.length < 8){
      alert("Şifre 8 karakterden az olamaz!")
      return false;
    }
    else if(MyLogin){ //kayıt kısmında ise
      if(password != password2){
        alert("Şifreler aynı değil!");
        return false;
      }
      else if(myname.length < 3){
        alert("İsim 3 karakterden az olamaz!")
        return false
      }
      else if(mylastname.length < 3){
        alert("Soyisim 3 karakterden az olamaz!")
        return false
      }
      
    }
    return true;
  }

  const loginFunc=()=>{
    if(!formControl())return;
    axios.post('/login',{
      email,
      password
    })
    .then(res => {
      if(res.data.status){
        dis(setLogin(true));
        dis(setUser(res.data.result));
        localStorage.setItem("user",JSON.stringify(res.data.result));
        localStorage.setItem("pass",password.toString());
        localStorage.setItem("email",email.toString());
      }
      else{
        alert("E-posta yada şifre hatalı!");
      }
    })
  }

  const registerFunc=()=>{
    if(!formControl())return;
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
        dis(setUser(res.data.result));
        localStorage.setItem("user",JSON.stringify(res.data.result));
        localStorage.setItem("pass",password.toString());
        localStorage.setItem("email",email.toString());
      }
      else if(res.data.status == "unsucces"){
        alert("bu kullanıcı var")
      }
      else{
        alert("veriler boş geldi")
      }
    })
  }

  const enterLogin=(e)=>{
    if(e.key == "Enter"){
      if(!MyLogin) loginFunc();
      else registerFunc();
    }
  }

  return (
    <div className={style.popupContainer+" center"} onMouseDown={()=>props.popup(false)}>
        <div className={style.popup+" text-black d-flex flex-column justify-content-between"} style={{height:MyLogin?"550px":"400px"}} onMouseDown={(e)=>e.stopPropagation()}>
          <div className='center h-25 bg-color1 text-white'>
            <img src={img} alt="" width={90} 
            style={
              {
                boxShadow:"0px 0px 20px white,inset 0px 0px 5px white",
                borderRadius:"100%",
                padding:"10px"
              }
              }/>
          </div>
          <div className='p-4'>
            { MyLogin && <div className='gap-3 d-flex'>
              <input type="text" onKeyDown={enterLogin} value={myname} onChange={(e)=>setMyname(e.target.value)} className={style.input+" fs-4"} placeholder="İsim"/>
              <input type="text" onKeyDown={enterLogin} value={mylastname} onChange={(e)=>setMylastname(e.target.value)} className={style.input+" fs-4"} placeholder="Soyisim"/></div>
            }
            <input onKeyDown={enterLogin} type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className={style.input+" fs-4"} placeholder="E-posta"/>
            <input type="password" value={password} onKeyDown={enterLogin} onChange={(e)=>setPassword(e.target.value)} className={style.input+" fs-4"} placeholder="Şifre"/>
            {MyLogin && <input onKeyDown={enterLogin} type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} className={style.input+" fs-4"} placeholder="Tekrar şifre"/>}
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
