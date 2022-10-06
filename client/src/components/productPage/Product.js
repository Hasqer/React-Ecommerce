import React from 'react'
import Description from './Description';
import ProductImg from './ProductImg';
import Info from './Info';
import Comments from './Comments';

export default function Product() {
  return(
    <div className='container-xl'>
      <div className='row'>
        <ProductImg></ProductImg>
        <Info></Info>
      </div>
      <Description></Description>
      <Comments></Comments>
    </div>
  )
}