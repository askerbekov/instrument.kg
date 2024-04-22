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
import toolImg from "../../assets/tool/tool.jpg"
import toolImg2 from "../../assets/tool/tool2.jpg"
import toolImg3 from "../../assets/tool/tool3.jpg"
import toolImg4 from "../../assets/tool/tool4.jpg"
import toolImg5 from "../../assets/tool/tool5.jpeg"
import toolImg6 from "../../assets/tool/tool6.jpg"
import toolImg7 from "../../assets/tool/tool7.jpg"
import toolImg8 from "../../assets/tool/tool8.jpg"
import toolImg9 from "../../assets/tool/tool9.jpg"
import toolImg10 from "../../assets/tool/tool10.jpg"

const product_test = [
  {
    thumbnail: toolImg,
    title: 'Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta',
    description: 'Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta',
    article: 1234567,
    price: 1200,
    old_price: 1499,
  },
  {
    "thumbnail": toolImg2,
    "title": "Электрическая дрель, 550 Вт, 3000 об/мин",
    "description": "Мощная электрическая дрель с плавным регулированием оборотов. Подходит для сверления отверстий в различных материалах.",
    "article": 2345678,
    "price": 1999,
    "old_price": null
  },
  {
    "thumbnail": toolImg3,
    "title": "Набор кованых гаечных ключей, 6 штук, Cr-V",
    "description": "Набор высококачественных кованых гаечных ключей из хром-ванадиевой стали. Идеально подходят для работы с гаечными соединениями разных размеров.",
    "article": 3456789,
    "price": 999,
    "old_price": 1299
  },
  {
    "thumbnail": toolImg4,
    "title": "Струбцина для деревообработки, 150 мм",
    "description": "Прочная струбцина с ручкой из прочного материала и стальными зажимами. Идеально подходит для фиксации заготовок при деревообработке.",
    "article": 4567890,
    "price": 499,
    "old_price": null
  },
  {
    "thumbnail": toolImg5,
    "title": "Комплект сверлильных бит, 13 штук, HSS",
    "description": "Набор высококачественных сверлильных бит разных размеров из быстрорежущей стали. Подходит для сверления отверстий в металле, дереве и пластике.",
    "article": 5678901,
    "price": 299,
    "old_price": 399
  },
  {
    "thumbnail": toolImg6,
    "title": "Молоток кузнечный, 500 г",
    "description": "Кузнечный молоток с удобной рукоятью и закаленной головкой. Подходит для кузнечных работ и работы с металлом.",
    "article": 6789012,
    "price": 799,
    "old_price": null
  },
  {
    "thumbnail": toolImg7,
    "title": "Столярный нож, изогнутый лезвие, 25 мм",
    "description": "Столярный нож с изогнутым лезвием и удобной рукоятью. Идеально подходит для точной резки дерева и обработки заготовок.",
    "article": 7890123,
    "price": 199,
    "old_price": null
  },
  {
    "thumbnail": toolImg8,
    "title": "Клещи комбинированные, 200 мм",
    "description": "Комбинированные клещи с зубчатыми губками и удобной изолированной ручкой. Подходят для снятия и установки различных крепежных элементов.",
    "article": 8901234,
    "price": 399,
    "old_price": null
  },
  {
    "thumbnail": toolImg9,
    "title": "Шабер строительный, 50 мм",
    "description": "Шабер со сменными лезвиями и удобной рукоятью. Подходит для удаления старой краски и шпаклевки с поверхностей перед нанесением нового покрытия.",
    "article": 9012345,
    "price": 149,
    "old_price": null
  },
  {
    "thumbnail": toolImg10,
    "title": "Лобзик электрический, 800 Вт, с фиксацией угла наклона",
    "description": "Электрический лобзик с мощным двигателем и возможностью фиксации угла наклона. Подходит для резки дерева, пластика и металла.",
    "article": 1234567,
    "price": 2199,
    "old_price": null
  }
]

const skeletonProduct=[1,2,3,4,5,6,7,8]

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