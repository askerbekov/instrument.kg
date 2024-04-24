import React, {memo} from 'react';
import {Navigation, Mousewheel, Scrollbar, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import './discount-swiper.scss'
import {useSelector} from "react-redux";
import SkeletonProduct from "../../poducts/prodcut-plits/SkeletonProduct";
import ProductTitool from "../../poducts/prodcut-plits/product-tool/ProductTitool";
import {product_test, skeletonProduct} from "../../testDB/TestDB";

const SwiperBrands = memo(({name}) => {
  // const products = useSelector(state => state.productsReducer.products)
  const loading = useSelector(state => state.productsReducer.loading)

  return (
    <div className={'swiper-box'}>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={{hiddenClass: false}}
        freeMode={true}
        speed={300}
        // scrollbar={true}
        modules={[Navigation, Mousewheel, Scrollbar, FreeMode]}
        className="mySwiper miniSwiper discount-swiper"
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