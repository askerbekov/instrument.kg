import React from 'react';
import HomePage from "./pages/HomePage";
import {Link, Route, Routes} from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import BrandsPage from "./pages/BrandsPage";
import ToolPage from "./pages/toolPage/ToolPage";
import ScrollToTop from "./components/scrollToTop";
import CartsPage from "./pages/cartsPage/CartsPage";
import AboutUs from "./pages/AboutUs";

const App = () => {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route
          path={'/'}
          element={<HomePage/>}
          handle={{
            // you can put whatever you want on a route handle
            // here we use "crumb" and return some elements,
            // this is what we'll render in the breadcrumbs
            // for this route
            crumb: () => <Link to="/">Главня</Link>,
          }}
        />
        <Route
          path={'/categories'}
          element={<CategoriesPage/>}
        />
        <Route path={'/categories/:categoriesId'} element={<CategoriesPage/>} />
        <Route path={'/categories/:categoriesId'} element={<CategoriesPage/>} />
        <Route path={'/categories/:categoriesId/podcatalog/:podcatalogId'} element={<CategoriesPage/>} />
          <Route path={'/aboutUs'} element={<AboutUs/>} />
        <Route path={'/brands'} element={<BrandsPage/>} />
        <Route path={'/brands/:brand'} element={<CategoriesPage/>} />
        <Route path={'/tool'} element={<ToolPage/>} />
        {/*<Route path={'/tool/'} element={<ToolPage/>} />*/}
        <Route path={'/carts'} element={<CartsPage/>} />
      </Routes>
    </>

  );
};

export default App;
