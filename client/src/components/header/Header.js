import React from 'react'
import Navbar from './Navbar'
import axios from "axios";
import { BtnForLogin,BtnForUser } from './LoginButtons';
import { useSelector } from 'react-redux'
import img from "../../logo.png";

export default function Header() {

  

  const loginInfo = useSelector(state => state.login.value);
  const getUser = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res.data));
  }

  return (
    <div>
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
