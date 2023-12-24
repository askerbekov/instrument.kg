import React, {memo, useEffect, useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import ProductsToList from "./product-to-list/ProductsToList";

const Products = memo(() => {
  const [category, setCategory] = useState()
  const products = useSelector(state => state.productsReducer.products)


  useEffect( () => {
    axios.get('https://64e2f01ebac46e480e77eeff.mockapi.io/api/lvl1/users')
      .then(res => setCategory(res.data))
      .catch(err => console.log(err))
  },[])


  return (
    <div className="viewTools">
      {
        products?.map(product => {
          return(
            <ProductsToList key={product.id} product={product} />
          )
        })
      }


      {/*{*/}
      {/*  category && category?.map( category => {*/}
      {/*    return (*/}
      {/*      <div key={category.id}>*/}
      {/*        <div className={'cardInfo'}>*/}
      {/*          <div className={'imgCarad'}>*/}
      {/*            <img src={category.image} alt=""/>*/}
      {/*          </div>*/}
      {/*          <div className={'titleCard'}>*/}
      {/*            <h3>{category.heading}</h3>*/}
      {/*            /!*<h4>{category.rating}</h4>*!/*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  })*/}
      {/*}*/}
    </div>
  );
});

export default Products;