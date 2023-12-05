import React from 'react';
import './filterBar.scss'

const FilterBar = () => {
    return (
        <aside className={'filterBar'}>
            <h3>Наборы инструмента бытового</h3>
            <div className={'kinds'}>
                <h4>Группа товаров</h4>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">Ручной инструмент</label>
                </div>
            </div>
            <div className={'kinds'}>
                <h4>Бренд</h4>
               <div>
                   <input type="checkbox"/>
                   <label htmlFor="">СИБРТЕХ</label>
               </div>
               <div>
                   <input type="checkbox"/>
                   <label htmlFor="">SPARTA</label>
               </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">СИБРТЕХ</label>
                </div>

            </div>
            <div className={'kinds'}>
                <h4>Цена</h4>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">Ручной инструмент</label>
                </div>
            </div>
        </aside>
    );
};

export default FilterBar;