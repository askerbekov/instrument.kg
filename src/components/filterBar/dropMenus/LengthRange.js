import React, {useState} from 'react';

const LengthRange = ({min, max}) => {
    const [isOpen, setIsOpen] = useState(false)

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
                    <label htmlFor="length">
                        <input
                            id="length"
                            type="range"
                            min={min}
                            max={max}
                        />
                    </label>
                </div>

            </section>
        </div>
    );
};

export default LengthRange;