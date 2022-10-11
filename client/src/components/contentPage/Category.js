import style from "./content.module.css"
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector } from "react-redux";

export default function Category({data}) {
  const userdata = useSelector((s) => s.userInfo.value);
  const navigate = useNavigate();

  const goProduct=()=>{
    navigate("/urunler/"+data.id);
  }

  const addcart=(e)=>{
    e.stopPropagation();
    if(userdata != null){
      axios.post("/addcart",{
        userId:userdata.id,
        productId:data.id
      })
      .then(res => console.log(res.data))
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
        <div className="btn btn-primary center" onMouseDown={addcart}><i className="bi bi-cart me-2"></i>Sepete Ekle</div>
      </div>
    </div>  
  )
}
