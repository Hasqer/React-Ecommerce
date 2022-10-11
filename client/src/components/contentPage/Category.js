import style from "./content.module.css"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userInfo";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Category({data}) {
  const userdata = useSelector((s) => s.userInfo.value);
  const [filter,setFilter] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(userdata != undefined){
      setFilter(Object.keys(userdata).length != 0 ? userdata.cart.some(item => item.id == data.id):"empty");
    }
    else setFilter(false);
  },[userdata])

  const goProduct=()=>{
    navigate("/urunler/"+data.id);
  }
  const dis = useDispatch();

  const addcart=(e)=>{
    e.stopPropagation();
    if(userdata != null){
      if(filter == false){
        axios.post("/addcart",{
          userId:userdata.id,
          productId:data.id
        })
        .then(res => {
          dis(setUser(res.data.users[0]));
          localStorage.setItem("user",JSON.stringify(res.data.users[0]));
        })
      }
      else if( Object.keys(userdata).length == 0) alert("Sepete eklemeden önce giriş yapmalısınız!")
    }
    else alert("Sepete eklemeden önce giriş yapmalısınız!");
  }

  return (
    <div 
    className={style.mybox+" box-shadow p-3 text-black bg-white rounded position-relative crs-pointer"} 
    onMouseDown={goProduct}>
      <img src={data.photos[0]} className={style.imageBox}></img>
      <div className='p-2'>
        {
          data.title.length > 60 ? data.title.slice(0,60)+"...":data.title
        }
      </div>
      
      <div className={style.buyBtn}>
        <div className={style.btnPrice+" fw-bolder fs-4 m-2 text-color1"}>{data.price+" TL"}</div>
        <div className={"btn btn-"+(filter==true?"danger":"primary")+" center"} onMouseDown={addcart}>
          <i className="bi bi-cart me-2"></i>{filter == true ? "Sepette Mevcut":"Sepete Ekle"} </div>
      </div>
    </div>  
  )
}
