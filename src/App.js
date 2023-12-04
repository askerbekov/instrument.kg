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
