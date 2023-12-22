import React from 'react';

const CheckboxField = ({ label, value, onChange, disabled }) => {
  return (
    <div className={'box-form'}>
      <p>{label}</p>
      <div className={'delivery_chekbox'}>
        <input
          id={`${label.toLowerCase()}_chekbox`}
          onChange={onChange}
          type="checkbox"
          checked={value}
          disabled={disabled}
        />
        <label htmlFor={`${label.toLowerCase()}_chekbox`}>{label}</label>
      </div>
    </div>
  );
};

export default CheckboxField;