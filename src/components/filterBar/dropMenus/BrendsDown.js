import React, {useState} from 'react';

const BrendsDown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div>
                <section>
                    <div
                        className={'drop-down'}
                        onClick={event => setIsOpen(!isOpen)}
                    >
                        <span>Бренд</span>
                        <i className={`icon arrow ${isOpen ? 'arrow-down' : ''}`}></i>
                    </div>
                    <div className={`drop-info ${isOpen ? 'drop-none' : ''}`}>
                        <label htmlFor="" className={'checkbox'}>
                            <input type="checkbox"/>
                            <span>Denzel</span>
                        </label>
                        <label htmlFor="" className={'checkbox'}>
                            <input type="checkbox"/>
                            <span>Matrix</span>
                        </label>
                        <label htmlFor="" className={'checkbox'}>
                            <input type="checkbox"/>
                            <span>Stels</span>
                        </label>
                        <label htmlFor="" className={'checkbox'}>
                            <input type="checkbox"/>
                            <span>Kronwerk</span>
                        </label>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default BrendsDown;