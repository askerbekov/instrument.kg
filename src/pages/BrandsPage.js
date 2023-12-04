import React from 'react';
import Layout from "../components/layout/Layout";
import '../components/styles/brends.scss'
import Denzel from '../components/assets/brandsAssets/1.png'
import Matrix from '../components/assets/brandsAssets/2.png'
import Stels from '../components/assets/brandsAssets/3.png'
import Sibrtekh from '../components/assets/brandsAssets/4.png'
import Bars from '../components/assets/brandsAssets/5.png'
import Sparta from '../components/assets/brandsAssets/6.png'
import Palisad from '../components/assets/brandsAssets/7.png'
import Gross from '../components/assets/brandsAssets/8.png'
import Elfe from '../components/assets/brandsAssets/9.png'
import Stern from '../components/assets/brandsAssets/10.png'
import Kronwerk from '../components/assets/brandsAssets/11.png'
import Stroymash from '../components/assets/brandsAssets/12.png'

const BrandsPage = () => {
    return (
        <Layout>
            <div className={'container'}>
                 <h2>Все бренды</h2>
                <div className="row">
                    <div className="col-3">
                        <div className="box">
                            <img src={Denzel} alt="Denzel"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Matrix} alt="Matrix"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Stels} alt="Stels"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Sibrtekh} alt="Sibrtekh"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Bars} alt="Bars"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Sparta} alt="Sparta"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Palisad} alt="Palisad"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Gross} alt="Gross"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Elfe} alt="Elfe"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Stern} alt="Stern"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Kronwerk} alt="Kronwerk"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={Stroymash} alt="Stroymash"/>
                        </div>
                    </div>
                </div>


            </div>

        </Layout>
    );
};

export default BrandsPage;