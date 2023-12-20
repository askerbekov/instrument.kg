import React, {useState} from 'react';

const LengthRange = ({ min = 20, max = 50, value = 40 }) => {
    const [isOpen, setIsOpen] = useState(false)

        const [position, setPosition] = useState(value);
        const [valueText, setValueText] = useState(value);

        const handleChange = (event) => {
            setPosition(event.target.value);
            setValueText(event.target.value);
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
                               value={position}
                               onChange={handleChange}

                           />
                       </div>
                        <div>
                            <label>до</label>
                            <input
                                type="number"
                                value={valueText}
                                max={max}
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LengthRange;