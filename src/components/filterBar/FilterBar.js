import React, {useState} from 'react';
import './filterBar.scss'
import DropDown from "./dropMenus/DropDown";

const FilterBar = () => {

    return (
        <aside className={'filterBar'}>
<<<<<<< HEAD
            <h3>Наборы инструмента бытового</h3>
           <DropDown/>
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
=======
>>>>>>> 27fdf8d9dc7b4f6df6434a2bf1650bc4775e42f6

            {/*<h3>Наборы инструмента бытового</h3>*/}
            {/*<div className={'kinds'}>*/}
            {/*    <h4>Группа товаров</h4>*/}
            {/*    <div>*/}
            {/*        <input type="checkbox"/>*/}
            {/*        <label htmlFor="">Ручной инструмент</label>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={'kinds'}>*/}
            {/*    <h4>Бренд</h4>*/}
            {/*   <div>*/}
            {/*       <input type="checkbox"/>*/}
            {/*       <label htmlFor="">СИБРТЕХ</label>*/}
            {/*   </div>*/}
            {/*   <div>*/}
            {/*       <input type="checkbox"/>*/}
            {/*       <label htmlFor="">SPARTA</label>*/}
            {/*   </div>*/}
            {/*    <div>*/}
            {/*        <input type="checkbox"/>*/}
            {/*        <label htmlFor="">СИБРТЕХ</label>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div className={'kinds'}>*/}
            {/*    <h4>Цена</h4>*/}
            {/*    <div>*/}
            {/*        <input type="checkbox"/>*/}
            {/*        <label htmlFor="">Ручной инструмент</label>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </aside>
    );
};

export default FilterBar;