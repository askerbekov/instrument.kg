import '../components/styles/categoriesPage.scss'
import FilterBar from "../components/filterBar/FilterBar";
import Layout from "../components/layout/Layout";
import {useParams} from "react-router-dom";
import categories from "../components/categories/categories";
import Products from "../components/poducts/Products";
import '../components/styles/categories-page.scss'
const CategoriesPage = () => {
    const idCategory = useParams()
    console.log(categories.category[idCategory.categoriesId])

    return (
    <Layout>
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