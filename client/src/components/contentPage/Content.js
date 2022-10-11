import React from 'react'
import Category from './Category'
import { useSelector } from 'react-redux'

export default function Content() {

  const products = useSelector((s)=>s.products.value);
  console.log(products)
  let categorys = [];
  products.forEach(element => {
    if(!categorys.includes(element.category))categorys.push(element.category);
  });
  return (
    <div className='container-xxl'>
      {
        categorys.map(cate=>{
          return <div>
            <span id={cate} className='fw-bolder fs-4 m-0'>{cate}</span>
            <hr className='mt-1'/>
            <div className='d-flex flex-wrap w-100'>
              {
                products.filter((item) => item.category == cate).map(element=>{
                  return <Category data={element}></Category>
                })
              }
            </div>
          </div>
        })
      }
    </div>
  )
}
