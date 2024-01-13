import React from 'react';
import "./lineBlock.css"
import block from './tipe-sort/block.png'
import inline from './tipe-sort/inline.png'


const LineBlock = () => {
    return (
        <div className={'sort-type'}>
            <div className={'select-type'}>
                <select name="select">
                    <option value="value1" selected>Популярные</option>
                    <option value="value2">Новинки</option>
                </select>
            </div>
            <div className={'select-lineblock'}>
                <a href=""><img src={inline} alt=""/></a>
                <a href=""><img src={block} alt=""/></a>
            </div>

        </div>
    );
};

export default LineBlock;