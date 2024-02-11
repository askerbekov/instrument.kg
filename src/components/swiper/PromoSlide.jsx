import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Skeleton} from "@mui/material";

const PromoSlide = ({product}) => {
  const [img, setImg] = useState(new Image());
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://placehold.co/1920x1440', { responseType: 'blob' })
      .then(response => {
        const url = URL.createObjectURL(response.data);
        const newImg = new Image();
        newImg.src = url;
        setImg(newImg);
      })
      .catch(error => {
        console.error('Ошибка при загрузке изображения:', error);
      })
      .finally(() => setLoading(false))
  }, [product]);


  return (
    <div key={product.id}>
      {loading ?
        <Skeleton variant="rectangular" width={1250} height={500} />
        :
        <img className={'img-promo'} src={img.src} alt=""/>
      }
      <h2 className={'description'}>{product.description}</h2>
    </div>
  );
};

export default PromoSlide;