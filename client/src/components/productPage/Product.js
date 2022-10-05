import React from 'react'
import style from "./product.module.css";

export default function Product() {
  return (
  <>
      <div className="container-xxl mt-2">
      <div className="row justify-content-between">
            <div id={style.productImageBox} className="col-xl-5 border border-light bg-white rounded ">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://productimages.hepsiburada.net/s/32/550/10376494710834.jpg/format:webp" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://productimages.hepsiburada.net/s/32/550/10376529969202.jpg/format:webp" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://productimages.hepsiburada.net/s/32/550/10376530001970.jpg/format:webp" class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
              <div id={style.productInfoBox} className="col-xl-7 rounded">
                <div id={style.productInfoSubBox} className='bg-white rounded border border-light h-100'>
                <div id={style.title} className="m-4">
                  <h5>Anker Soundcore Life Q10 Kablosuz Bluetooth 5.0 Kulaklık - 60 Saate Varan Çalma Süresi - Siyah Kırmızı - A3032</h5>
                </div>
                </div>
              </div>
        </div>
    </div>
  </>
  ) 
}

/*

     <div classNameName="container-xl rounded bg-primary float-none">
     <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" classNameName={style.images + " image fluid"} alt="test"></img>

      </div>
      <img Style="height:700px;object-fit: cover; " className="w-100 m-4 mx-auto d-block" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt=""></img>
*/