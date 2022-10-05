import React from 'react'
import Description from './Description';
import ProductImg from './ProductImg';
import Info from './Info';
import Comments from './Comments';

export default function Product() {
  /*return (
    <div className="container mt-2 w-100 border">
      <div className="row d-flex justify-content-between ">
        <ProductImg></ProductImg>
        <Info></Info> 
      </div>
      <Description></Description>
    </div>
  ) */
  return(
    <div className='container-xxl'>
      <div className='row'>
        <ProductImg></ProductImg>
        <Info></Info>
      </div>
      <Description></Description>
      <Comments></Comments>
    </div>
  )
}