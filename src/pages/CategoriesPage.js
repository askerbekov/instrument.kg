import '../components/styles/categoriesPage.scss'
import FilterBar from "../components/filterBar/FilterBar";
import Layout from "../components/layout/Layout";
import {useMatches, useParams} from "react-router-dom";
import categories from "../components/categories/categories";
import Products from "../components/poducts/Products";
import '../components/styles/categories-page.scss'
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import {memo} from "react";
const CategoriesPage = memo(() => {
    const idCategory = useParams()


    return (
    <Layout>
        <BreadCrumbs/>
        <section className={'section-products'}>
            <div className="container product-tools">
                <FilterBar/>
                <Products/>
            </div>
        </section>
    </Layout>

    );
});

export default CategoriesPage;