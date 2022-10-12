import React from 'react'
import Category from './Category'
import { useSelector } from 'react-redux'

export default function Content() {
  const asd = ["asd1","asd2","asd3"]
  const products = useSelector((s)=>s.products.value);
  const search = useSelector((s)=>s.search.value);
  let categorys = [];
  products.forEach(element => {
    if(!categorys.includes(element.category))categorys.push(element.category);
  });
  return (
    <div className='container-xxl'>
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
