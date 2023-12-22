import React from 'react';
import {TextField} from "@mui/material";


const InputField = ({ label, value, onChange, disabled, deliveryAddres }) => {
  return (
    <div className={'box-form'}>
      <p>{label}</p>
      {disabled ?
        <p className={'txt-align-left'}>{value}</p>
        :
        <TextField
          fullWidth
          label={label}
          // defaultValue=""
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      }
    </div>
  );
};

export default InputField;