import '../components/styles/categoriesPage.scss'
import FilterBar from "../components/filterBar/FilterBar";
import Layout from "../components/layout/Layout";
import {useParams} from "react-router-dom";
import Products from "../components/poducts/Products";
import '../components/styles/categories-page.scss'
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import {memo} from "react";
import AsideBrands from "../components/aside/AsideBrands/AsideBrands";
const CategoriesPage = memo(() => {
    const idCategory = useParams()


    return (
    <Layout>
        <BreadCrumbs/>
        <section className={'section-products'}>
            <div className=" product-tools">
                <FilterBar/>
               <main>
                   <Products/>
               </main>
                <AsideBrands/>
            </div>
        </section>
    </Layout>

    );
});

export default CategoriesPage;