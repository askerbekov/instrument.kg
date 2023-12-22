import React from 'react';
import Layout from "../components/layout/Layout";
import HeadImageAbout from '../components/assets/img.png'
import '../components/styles/aboutUs.scss'


const AboutUs = () => {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className={'abouts-header'}>
                        <h2>О нас</h2>
                        <p>"Строительный магазин "Строймастер" был открыт в 2000 году. Мы специализируемся на продаже строительных инструментов и материалов для профессионального и бытового использования. Наша команда опытных специалистов поможет вам подобрать все необходимое для вашего проекта, будь то ремонт квартиры или строительство дома."</p>
                    </div>
                    <div className={'abouts-main'}>
                        <div>
                            <h3>10+</h3>
                            <p>более 10 именитых брендов</p>
                        </div>
                        <div>
                            <h3>18+</h3>
                            <p>лет опыта и совершенствования</p>
                        </div>
                        <div>
                            <h3>7000+</h3>
                            <p>довольных клиентов</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-7">
                           <div className="box col-desc">
                               <h2>Наша команда</h2>
                              <p>Наша команда состоит из квалифицированных специалистов с многолетним опытом работы в строительной отрасли. Мы гордимся тем, что у нас работают люди, которые увлечены своей работой и стремятся помочь клиентам. Наши сотрудники проходят регулярное обучение и сертификацию, чтобы обеспечить нашим клиентам самые высокие стандарты обслуживания.</p>
                           </div>
                        </div>
                        <div className="col-5">
                            <div className="box col-images">
                                <img src={HeadImageAbout} alt="Header instruments img"/>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </div>
    );
};

export default AboutUs;