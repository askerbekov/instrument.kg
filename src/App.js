import React from 'react';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import Categories from "./components/categories/categories";
import CategoriesPage from "./pages/CategoriesPage";
import BrandsPage from "./pages/BrandsPage";

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/categories'} element={<CategoriesPage/>} />
      <Route path={'/brands'} element={<BrandsPage/>} />
    </Routes>
  );
};

export default App;


























// import React, {useEffect, useState} from 'react';
// import categories from "./components/categories/categories";
// import axios from "axios";
//
// const App = () => {
//   const [is, setIs] = useState(false)
//   const [ph, setPh] = useState()
//
//
//
//   const myFunc = async () => {
//     const form = document.querySelector('#myForm');
//     const formData = new FormData(form);
//     for (const element of form.elements) {
//       if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
//         formData.append(element.name, element.value);
//       }
//     }
//
//     // Добавьте дополнительные данные к FormData
//     formData.append('name', 'vilka');
//     formData.append('description', 'xoroshiy tovar');
//     formData.append('type', 'rovniy');
//     formData.append('price', 10000);
//     formData.append('favorites', true);
//     formData.append('category', 1);
//     formData.append('brand', 1);
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/tools/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
//   // const myFunc = (event) => {
//   //   const form = document.querySelector('#photo')
//   //   console.log(form.files[0])
//   //   // const formDate = new FormData(form)
//   //   // console.log(formDate)
//   //   setPh(form.files[0])
//   //   axios.post('http://127.0.0.1:8000/api/tools/', {
//   //     "name": "vilka",
//   //     "description": "xoroshiy tovar",
//   //     "type": "rovniy",
//   //     "price": 10000,
//   //     "photos": {ph},
//   //     "favorites": true,
//   //     "category": 1,
//   //     "brand": 1}
//   //   )
//   //     .then(({data}) =>console.log(data))
//   // }
//
//   return (
//     <>
//       <form id={'myForm'} encType="multipart/form-data">
//         <input type={"file"} id={'photos'} name={'photos'}></input>
//         <button
//           type={'button'}
//           onClick={event => myFunc()}
//         >
//           Отправить</button>
//       </form>
//
//       {
//         categories.category.map(cat => {
//           return(
//             <ul>
//               <li>
//                 {cat.category}
//                 <ul>
//                   {
//                     cat.podcategoriy.map(podcat => {
//                       return(
//                         <li>{podcat}</li>
//                       )
//                     })
//                   }
//                 </ul>
//               </li>
//             </ul>
//           )
//         })
//       }
//     </>
//   );
// };
//
// export default App;