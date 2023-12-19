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
import {Link} from "react-router-dom";

const BrandsPage = () => {
    return (
        <Layout>
            <div className={'container'}>
                 <h2>Все бренды</h2>
                <div className="row">
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'denzel'}`} ><img src={Denzel} alt="Denzel"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'matrix'}`} ><img src={Matrix} alt="Matrix"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'stels'}`} ><img src={Stels} alt="Stels"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'sibrtekh'}`} ><img src={Sibrtekh} alt="Sibrtekh"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'bars'}`} ><img src={Bars} alt="Bars"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'sparta'}`} ><img src={Sparta} alt="Sparta"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'palisad'}`} ><img src={Palisad} alt="Palisad"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'gross'}`} ><img src={Gross} alt="Gross"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'elfe'}`} ><img src={Elfe} alt="Elfe"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'stern'}`} ><img src={Stern} alt="Stern"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'kronwerk'}`} ><img src={Kronwerk} alt="Kronwerk"/></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <Link to={`/brands/${'stroymash'}`} ><img src={Stroymash} alt="Stroymash"/></Link>
                        </div>
                    </div>
                </div>


            </div>

        </Layout>
    );
};

export default BrandsPage;