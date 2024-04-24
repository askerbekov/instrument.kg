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
import ProductTitool from "../poducts/prodcut-plits/product-tool/ProductTitool";
import {product_test, skeletonProduct} from "../testDB/TestDB";


const SwiperBrands = memo(({name}) => {
  // const products = useSelector(state => state.productsReducer.products)
  const loading = useSelector(state => state.productsReducer.loading)

  return (
    <div className={'swiper-box'}>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        navigation={{hiddenClass: false}}
        // mousewheel={{forceToAxis: true}}
        // direction={'horizontal'}
        freeMode={true}
        speed={300}
        // scrollbar={true}
        modules={[Navigation, Mousewheel, Scrollbar, FreeMode]}
        className="mySwiper miniSwiper"
      >
        <h2 className={'title-brands'}>
          <Link to={''} className={'section-title'}>
            {name || 'makita'}
          </Link>
          <div className={'horizontal-line'}></div>
        </h2>
        {loading?
          skeletonProduct.map(skeletonProduct => {
            return(
              <SwiperSlide key={skeletonProduct.id}>
                <SkeletonProduct skeletonProduct={skeletonProduct}/>
              </SwiperSlide>
            )
          })
          :
          product_test?.map(product => {
            return(
              <SwiperSlide key={product.id}>
                <ProductTitool product={{...product}}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
});

export default SwiperBrands;