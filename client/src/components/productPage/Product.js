import React from 'react'
import Description from './Description';
import ProductImg from './ProductImg';
import Info from './Info';
import Comments from './Comments';
import {useSelector} from "react-redux"
import { useParams } from 'react-router-dom';


export default function Product() {
  let { id } = useParams();
  const alldata = useSelector(state => state.products.value);
  const selectedProduct = alldata.filter((item) => item.id == id);
  const photos = (selectedProduct[0] !== undefined) ? selectedProduct[0].photos : null;
  
  return(
    <div className='container-xl'>
      <div className='row'>
        <ProductImg photos={photos}/>
        <Info />
      </div>
      <Description />
      <Comments />
    </div>
  )
}