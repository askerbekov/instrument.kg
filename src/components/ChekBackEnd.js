import React, { useState } from 'react';
import axios from 'axios';

const ChekBackEnd = () => {
  const [ph, setPh] = useState([]);

  const myFunc = async () => {
    const photoForm = document.querySelector('#photos');
    const formData = new FormData();

    // Добавляем все файлы в массив
    formData.append('photos', photoForm.files);

    // Добавляем другие данные к форме
    formData.append("name", "vilka");
    formData.append("description", "xoroshiy tovar");
    formData.append("type", "rovniy");
    formData.append("price", 10000);
    formData.append("favorites", true);
    formData.append("category", 1);
    formData.append("subcategory", 1);
    formData.append("brand", 1);

    try {
      // Отправляем запрос с использованием axios
      const response = await axios.post('http://127.0.0.1:8000/api/tools/', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };

  return (
    <>
      <form id={'myForm'} encType="multipart/form-data">
        <input type={"file"} id={'photos'} name={'photos'} multiple={true}></input>
        <button
          type={'button'}
          onClick={event => myFunc()}
        >
          Отправить
        </button>
      </form>
    </>
  );
};

export default ChekBackEnd;














// import React, {useState} from 'react';
// import axios from "axios";
// import categories from "./categories/categories";
//
// const ChekBackEnd = () => {
//   const [is, setIs] = useState(false)
//   const [ph, setPh] = useState([])
//
//
//
//   const myFunc = async () => {
//     const form = document.querySelector('#myForm');
//     const formData = new FormData(form);
//     for (const element of form.elements) {
//       console.log(form.elements)
//       if (element.tagName === 'INPUT' && element.tagName === 'BUTTON') {
//         // setPh(element.value)
//         formData.append(element.name, element.value);
//       }
//     }
//
//     // Добавьте дополнительные данные к FormData
//     //   formData.append('photos', ph)
//       formData.append('name', 'vilka');
//       formData.append('description', 'xoroshiy tovar');
//       formData.append('type', 'rovniy');
//       formData.append('price', 10000);
//       formData.append('favorites', true);
//       formData.append('category', 1);
//       formData.append('subcategory', 1);
//       formData.append('brand', 1);
//
//     console.log(formData)
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/tools/', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     };
//
//
//     // const myFunc = (event) => {
//     //   const photoForm = document.querySelector('#photos')
//     //   // console.log(photoForm.files)
//     //   // setPh(photoForm.files)
//     //
//     //   console.log(photoForm.files)
//     //   setPh([photoForm[0]])
//     //   console.log(ph)
//
//       // for (let i = 0; i < photoForm.files.length; i++) {
//       //   setPh([...ph, photoForm.files[i]])
//       // }
//       // console.log(ph)
//
//
//       // photoForm.files.map(photo => setPh([...ph, photo]))
//
//
//     //   axios.post(`http://127.0.0.1:8000/api/tools/`, {
//     //       "name": "vilka",
//     //       "description": "xoroshiy tovar",
//     //       "type": "rovniy",
//     //       "price": 10000,
//     //       "photos":photoForm.files,
//     //       "favorites": true,
//     //       "category": 1,
//     //       "subcategory":1,
//     //       "brand": 1
//     //   }
//     //   )
//     //     .then(({data}) =>console.log(data))
//     // }
//
//
//     return (
//       <>
//         <form id={'myForm'} encType="multipart/form-data">
//           <input type={"file"} id={'photos'} name={'photos'} multiple={true}></input>
//           <button
//             type={'button'}
//             onClick={event => myFunc()}
//           >
//             Отправить</button>
//         </form>
//       </>
//     );
// };
//
// export default ChekBackEnd;