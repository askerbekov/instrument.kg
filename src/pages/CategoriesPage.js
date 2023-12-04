import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../components/styles/categoriesPage.scss'
import FilterBar from "../components/filterBar/FilterBar";
import Layout from "../components/layout/Layout";



const CategoriesPage = () => {
    const [category, setCategory] = useState()

    useEffect( () => {
        axios.get('https://64e2f01ebac46e480e77eeff.mockapi.io/api/lvl1/users')
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    },[])
    return (
    <Layout>
    <div className="container filterWrapper ">
        <FilterBar/>
        <div className="viewTools">
            {
                category && category.map( category => {
                    return (
                        <div key={category.id}>
                            <div className={'cardInfo'}>
                                <div className={'imgCarad'}>
                                    <img src={category.image} alt=""/>
                                </div>
                                <div className={'titleCard'}>
                                    <h3>{category.heading}</h3>
                                    <h4>{category.rating}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </Layout>

    );
};

export default CategoriesPage;