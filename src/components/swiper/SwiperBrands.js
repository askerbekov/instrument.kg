import React, {memo} from 'react';
import {Navigation, Mousewheel, Scrollbar, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import './swiperBrands.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import SkeletonProduct from "../poducts/prodcut-plits/SkeletonProduct";
import ProductNew from "../poducts/prodcut-plits/ProductNew";

// const product = {
//   name: 'Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta',
//   description: 'Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta',
//   article: 1234567,
//   price: 1200,
// }

const skeletonProduct=[1,2,3,4,5,6,7,8]

const SwiperBrands = memo(({name}) => {
  const products = useSelector(state => state.productsReducer.products)
  const loading = useSelector(state => state.productsReducer.loading)

  return (
    <>
      <h2 className={'title-brands'}>
        <Link to={''} className={'section-title'}>
          {name || 'makita'}
        </Link>
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={{hiddenClass: false}}
        mousewheel={{forceToAxis: true}}
        // direction={'horizontal'}
        freeMode={true}
        speed={700}
        // scrollbar={true}
        modules={[Navigation, Mousewheel, Scrollbar, FreeMode]}
        className="mySwiper miniSwiper"
      >
        {loading?
          skeletonProduct.map(skeletonProduct => {
            return(
              <SwiperSlide key={skeletonProduct.id}>
                <SkeletonProduct skeletonProduct={skeletonProduct}/>
              </SwiperSlide>
            )
          })
          :
          products?.map(product => {
            return(
              <SwiperSlide key={product.id}>
                <ProductNew product={{...product}}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
});

export default SwiperBrands;