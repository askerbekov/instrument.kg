import React from 'react';
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";

const InputOrder = ({chek, order, setOrder, delivery, setDelivery}) => {
  return (
    <>
      <InputField
        label="Имя"
        value={order.name}
        onChange={event => setOrder({...order, name: event.target.value})}
        disabled={chek}
      />
      <InputField
        label="Номер телефона"
        value={order.phone}
        onChange={event => setOrder({...order, phone: event.target.value})}
        disabled={chek}
      />
      <InputField
        label="Email"
        value={order.email}
        onChange={event => setOrder({...order, email: event.target.value})}
        disabled={chek}
      />
      <CheckboxField
        label="Доставка"
        value={delivery}
        onChange={event => setDelivery(!delivery)}
        disabled={chek}
      />
      {/*<InputField*/}
      {/*  label="Адрес доставки"*/}
      {/*  value={order.addresDeliver}*/}
      {/*  onChange={event => setOrder({...order, addresDeliver: event.target.value})}*/}
      {/*  disabled={true}*/}
      {/*/>*/}
    </>
  );
};

export default InputOrder;