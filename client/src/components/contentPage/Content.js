import React from 'react'
import Category from './Category'
import { useSelector } from 'react-redux'
import sliderImages from './sliderImages'

export default function Content() {
  const products = useSelector((s)=>s.products.value);
  const search = useSelector((s)=>s.search.value);
  let categorys = [];
  products.forEach(element => {
    if(!categorys.includes(element.category))categorys.push(element.category);
  });
  return (
    <div className='container-xxl'>
      {search.length <= 0 && <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sliderImages[0]} alt="" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={sliderImages[1]} alt="" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={sliderImages[2]} alt="" className="d-block w-100"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>}
      {
        search.length > 0 ? <div className='d-flex flex-wrap'>
          {
            products.map((element,i)=>{
              return element.title.toLowerCase().includes(search.toLowerCase()) && <Category key={i} data={element}></Category>
            })
          }
        </div>:
        
        categorys.map((cate,i1)=>{
          return <div key={i1} className="mt-5">
            <span id={cate} className='fw-bolder m-0 fs-4'>{cate}</span>
            <hr className='mt-1'/>
            <div className='d-flex flex-wrap w-100'>
              {
                products.filter((item) => item.category == cate).map((element,i2)=>{
                  return <Category key={i1+"-"+i2} data={element}></Category>
                })
              }
            </div>
          </div>
        })
      }
    </div>
  )
}
