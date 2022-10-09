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
  const selectedProduct = alldata.filter((item) => item.id == id)[0] || {};

  return(
    <div className='container-xl'>
      <div className='row'>
        <ProductImg photos={selectedProduct.photos}/>
        <Info title={selectedProduct.title} shortDescription={selectedProduct.shortDescription} price={selectedProduct.price}/>
      </div>
      <Description longDescription={selectedProduct.longDescription}/>
      <Comments comments={selectedProduct.comments} />
    </div>
  )
}