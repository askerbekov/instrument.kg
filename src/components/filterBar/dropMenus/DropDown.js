import React, {useState} from 'react';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <section>
                <div
                    className={'drop-down'}
                    onClick={event => setIsOpen(!isOpen)}
                >
                    <span>Группа товаров</span>
                    <i className={`icon arrow ${isOpen ? 'arrow-down' : ''}`}></i>
                </div>
                <div className={`drop-info ${isOpen ? 'drop-none' : ''}`}>
                    <label htmlFor="" className={'checkbox'}>
                        <input type="checkbox"/>
                        <span>Ручной инструмент</span>
                    </label>
                </div>
            </section>

        </div>
    );
};

export default DropDown;