import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import categories from "../categories/categories";
import axios from "axios";

const Products = () => {
  const [category, setCategory] = useState()


  useEffect( () => {
    axios.get('https://64e2f01ebac46e480e77eeff.mockapi.io/api/lvl1/users')
      .then(res => setCategory(res.data))
      .catch(err => console.log(err))
  },[])


  return (
    <div className="viewTools">
      {
        category && category?.map( category => {
          return (
            <div key={category.id}>
              <div className={'cardInfo'}>
                <div className={'imgCarad'}>
                  <img src={category.image} alt=""/>
                </div>
                <div className={'titleCard'}>
                  <h3>{category.heading}</h3>
                  {/*<h4>{category.rating}</h4>*/}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Products;