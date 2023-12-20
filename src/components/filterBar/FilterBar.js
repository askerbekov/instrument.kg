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
            <LengthRange min={0} max={250}/>
        </aside>
    );
};

export default FilterBar;