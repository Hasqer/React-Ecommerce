import React, { useState, useEffect } from 'react'
import style from "./cart.module.css";
import axios from "axios";
import { setUser } from "../../redux/slices/userInfo";
import { useDispatch } from "react-redux";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function Products({cartData, userId, setTotalPrice}) {

    const dis = useDispatch();
    const [count, setCount] = useState(1);

    useEffect(() => {
       setTotalPrice((e) => {return parseInt(e) + parseInt(cartData.price)});
      },[]);


    const increase = (e) =>  {
        setCount(count + 1);
        setTotalPrice((e) => {return parseInt(e) + parseInt(cartData.price)});
    };
    
    const decrease = (e) =>  {
        if(count > 1){
            setCount(count - 1);
            setTotalPrice((e) => {return parseInt(e) - parseInt(cartData.price)});
        }
        else{
            axios.post("/removecart",{
                productId:parseInt(e.target.id),
                userId:parseInt(userId)
              })
              .then(res => {
                dis(setUser(res.data.userData));
                localStorage.setItem("user",JSON.stringify(res.data.userData));
                setTotalPrice((e) => {return parseInt(e) - parseInt(cartData.price)});
              });
        }
    };


    return(
            <div className='container-xl d-flex p-2 m-0 mb-2 py-2 bg-white rounded border d-flex align-items-center justify-content-between '>
                <div className={style.photoBox +" col-xl-2 center"}>
                <img src={cartData.photos} className={style.Images + " rounded d-block box-shadow"} alt="..."/>
                </div>
                <div className={style.titleBox + " ps-3  col-xl-8 h-100 mt-3"}>
                    <p>{cartData.title}​​​​</p>
                </div>
                <div className="col-xl-2 d-flex align-items-center justify-content-end" >
                    <div className={style.priceBox + " d-flex  justify-content-start w-100 align-items-center"}>
                        <p className='m-auto'>{numberWithCommas(cartData.price)},00 TL</p>
                    </div>
                <div className="d-flex flex-column justify-content-center">
                    <button type="button"  onClick={increase} className='btn btn-sm m-0 p-0  border-0'>
                        <i style={{fontSize:"20px"}} id={cartData.id} className="bi bi-plus-circle"></i>
                    </button>
                    <input type="number" value={count} readOnly className={style.counter + " m-0 p-0 text-center"}/>
                    <button type="button" onClick={decrease} className='btn btn-sm m-0 p-0  border-0'>
                        <i style={{fontSize:"20px"}}  id={cartData.id} className={(count>1) ? "bi bi-dash-circle" : "bi bi-trash3"}></i>
                    </button>
                </div>
            </div>
        </div>
    )}