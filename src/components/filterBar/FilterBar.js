import React, {useState} from 'react';
import './filterBar.scss'
import DropDown from "./dropMenus/DropDown";
import BrendsDown from "./dropMenus/BrendsDown";
import LengthRange from "./dropMenus/LengthRange";

const FilterBar = () => {

    return (
        <aside className={'filterBar'}>
            <h3>Наборы инструмента бытового</h3>
           <DropDown/>

            <BrendsDown/>
            <LengthRange min={60} max={250}/>

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
        </aside>
    );
};

export default FilterBar;