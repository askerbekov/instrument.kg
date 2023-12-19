import '../components/styles/categoriesPage.scss'
import FilterBar from "../components/filterBar/FilterBar";
import Layout from "../components/layout/Layout";
import {useMatches, useParams} from "react-router-dom";
import categories from "../components/categories/categories";
import Products from "../components/poducts/Products";
import '../components/styles/categories-page.scss'
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import {useEffect} from "react";
const CategoriesPage = () => {
    const idCategory = useParams()


    return (
    <Layout>
        <BreadCrumbs/>
        <section className={'section-products'}>
            <div className="container">
                <FilterBar/>
                <Products/>
            </div>
        </section>
    </Layout>

    );
};

export default CategoriesPage;