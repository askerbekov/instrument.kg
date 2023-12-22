import React, {useState} from 'react';
import {Box, Checkbox, FormControlLabel, Modal, TextField} from "@mui/material";
import './modalOrder.scss'
import InputOrder from "./InputOrder";
import {useDispatch} from "react-redux";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  // height: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'10px',
  p: 4,
};
const ModalOrder = ({handleClose, open}) => {
  const dispatch = useDispatch()
  const [chek, setChek] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [success, setSuccess] = useState(false)

  const [order, setOrder] = useState({
    name:'',
    phone:+996,
    email:'',
    deliver:false,
    addresDeliver:'',
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true)
    dispatch({type:"CLEAR"})
  }
  const handleChek = (event) => {
    event.preventDefault();
    setChek(!chek)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {success ?
            <>
              <h2 className={'section-title'}>Спасибо!</h2>
              <h2 className={'section-title'}>Ваш заказ успешно оформлен</h2>
              <h2 className={'section-title'}>Номер вашего заказа: 12345678</h2>
            </>
            :
            <form
              action=""
              className={'form-order'}
              onSubmit={event => handleSubmit(event)}
            >
              {chek?
                <h2>Проверьте данные заказа</h2>
                :
                <h2>Введите данные для заказа</h2>
              }
              <InputOrder
                chek={chek}
                order={order}
                setOrder={setOrder}
                delivery={delivery}
                setDelivery={setDelivery}
              />
              <div className={'box-form'}>
                {chek?
                  <>
                    <p>Адрес доставки</p>
                    <p className={'txt-align-left'}>{order.addresDeliver}</p>
                  </>
                  :
                  <>
                    <p>Введите адрес доставки</p>
                    <TextField
                      fullWidth
                      disabled={!delivery}
                      id="addresDelivery"
                      label="Адрес"
                      // defaultValue=""
                      value={order.addresDeliver}
                      onChange={event => setOrder({...order, addresDeliver:event.target.value})}
                    />
                  </>
                }
              </div>
              {chek ?
                <div className={'btn-box'}>
                  <button
                    type={"button"}
                    onClick={event => handleChek(event)}
                    className={'add-cart-btn'}
                  >
                    Изменить данные
                  </button>
                  <button
                    type={"submit"}
                    className={'add-cart-btn'}
                  >
                    Оформить заказ
                  </button>
                </div>
                :
                <button
                  type={"button"}
                  onClick={event => handleChek(event)}
                  className={'add-cart-btn'}
                >
                  Оформить заказ
                </button>
              }
            </form>
          }

        </Box>
      </Modal>
    </>
  );
};

export default ModalOrder;