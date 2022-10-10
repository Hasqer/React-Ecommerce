import style from "./content.module.css"
import { useNavigate } from "react-router-dom";

export default function Category({data}) {
  const navigate = useNavigate();
  const goProduct=()=>{
    navigate("/urunler/"+data.id);
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
        <div className="btn btn-primary center" onMouseDown={(e)=>e.stopPropagation()}><i class="bi bi-cart me-2"></i>Sepete Ekle</div>
      </div>
    </div>  
  )
}
