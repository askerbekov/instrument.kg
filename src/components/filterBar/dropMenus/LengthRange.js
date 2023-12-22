import React, {useState} from 'react';

const LengthRange = ({ min = 20, max = 50, value = 40 }) => {
    const [isOpen, setIsOpen] = useState(false)

    const [fromValue, setFromValue] = useState(value);
    const [toValue, setToValue] = useState(value);

    const handleFromChange = (event) => {
        setFromValue(event.target.value);
    };
        const handleToChange = (event) => {
            setToValue(event.target.value);
        };

    return (
        <div>
            <section>
                <div
                    className={'drop-down'}
                    onClick={event => setIsOpen(!isOpen)}
                >
                    <span>Длина, мм</span>
                    <i className={`icon arrow ${isOpen ? 'arrow-down' : ''}`}></i>
                </div>
                <div className={`drop-info ${isOpen ? 'drop-none' : ''}`}>
                    <div className={"from-to"}>
                       <div>
                           <label>от</label>
                           <input
                               type="number"
                               min={min}
                               value={fromValue}
                               onChange={handleFromChange}

                           />
                       </div>
                        <div>
                            <label>до</label>
                            <input
                                type="number"
                                value={toValue}
                                max={max}
                                onChange={handleToChange}

                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LengthRange;