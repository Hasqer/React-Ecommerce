import React from 'react'
import Category from './Category'
import { useSelector } from 'react-redux'

export default function Content() {

  const products = useSelector((s)=>s.products.value);
  let categorys = [];
  products.forEach(element => {
    if(!categorys.includes(element.category))categorys.push(element.category);
  });
  return (
    <div className='container-xxl'>
      {
        categorys.map((cate,i1)=>{
          return <div key={i1}>
            <span id={cate} className='fw-bolder fs-4 m-0'>{cate}</span>
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
