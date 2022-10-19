import axios from "axios";
import { setUser } from "../../redux/slices/userInfo";
import { useDispatch } from "react-redux";
import {useEffect,useState} from "react";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function TotalInfo({totalPrice, userId, setTotalPrice}) {

    const dis = useDispatch();

    const completeFunction = () => {
        axios.post("/removecart", {
            userId:parseInt(userId)
          })
          .then(res => {
            dis(setUser(res.data.userData));
            localStorage.setItem("user",JSON.stringify(res.data.userData));
            setTotalPrice((e) => {return 0});
          });
    }
   
    return (
            <div className="box-shadow bg-white rounded border border-light">
                <div className="my-3 mx-2 d-flex row justify-content-center align-items-center h-100">
                <div className="m-1">
                    <h1 style={{fontSize:"22px"}} >Sipariş Özeti</h1>
                </div>
                <div className="d-flex row mt-3">
                    <div className="d-flex justify-content-between">
                    <h1 style={{fontSize:"15px"}}>Ürünler</h1>
                    <h1 style={{fontSize:"18px"}}>{numberWithCommas(totalPrice)},00 TL</h1>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                    <h1 style={{fontSize:"15px"}}>Kargo</h1>
                    {
                      parseInt(totalPrice) < 250 ? 
                        (<div className="d-flex">
                            <h1 style={{fontSize:"18px"}}>0 TL</h1>
                        </div>)
                        :(<div className="d-flex">
                            <h1 className="me-1" style={{fontSize:"15px"}}>Bedava</h1>
                            <h1 style={{fontSize:"18px"}} className="text-decoration-line-through">18,99 TL</h1>
                        </div>)
                    }
                    </div>
                    <hr />
                    <div className=" mb-2 d-flex justify-content-end">
                    <h1 style={{fontSize:"26px"}}>{numberWithCommas(totalPrice)},00 TL</h1>
                    </div>
                </div>
                <div className="d-grid">
                    <button className="btn bg-color1 text-white py-3 btn-primary" onClick={completeFunction} type="button">Alışverişi Tamamla</button>
                </div>
                </div>
            </div>
    )}