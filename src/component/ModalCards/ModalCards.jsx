import React, { useState } from 'react';
import vector from '../../img/arrow-right.png';
import dolar from '../../img/dolar.png';
import './modalcards.scss';


export const ModalCards = ({ card, onClose, onOrder }) => {
  const [hoverVector, setHoverVector] = useState(false);
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [nameError, setNameError] = useState('This field in required!');
  const [phoneError, setPhoneError] = useState('This field in required!');

  const handleBlure = event => {
    if (event.target.name === 'name') {
      setNameDirty(!nameDirty);
    }
    if (event.target.name === 'phone') {
      setPhoneDirty(!phoneDirty);
    }
  };

  const handleName = event => {
    setUserName(event.target.value);
    if (event.target.value < 2 && event.target.value > 20) {
      setNameError('Name must be more than 2 characters and less 20 characters');
      if (!event.target.value) {
        setNameError('');
      }
    } else {
      setNameError('This field in required!');
    }
  };

  const handlePhone = event => {
    setPhone(event.target.value);
    const regexPhone = /^(?:\+38)?(0\d{9})$/;
    if (!regexPhone.test(event.target.value)) {
      setPhoneError('This is not valid phone');
    } else if (!event.target.value) {
      setPhoneError('This field in required!');
    } else {
      setPhoneError('');
    }
  };

  const handleOrder = event => {
    event.preventDefault();
    onOrder({
      name: userName,
      number: phone,
      category: card.category,
      nameProduct: card.name,
      price: card.price,
    });
  };

  const { category, price, name } = card;
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="modal-event">
          <button className="modal-event__close-btn" onClick={() => onClose()}>
            +
          </button>
          <h6 className="modal-event__category">{category}</h6>
          <h1 className="modal-event__name">{name}</h1>
          <div className="modal-event__description">
            <div className="modal-event__description_symbol">
              <img className="modal-event__description_img" src={dolar} alt="dolar" />
            </div>
            <div className="modal-event__description_price">{price}</div>
          </div>
          <form className="modal-form" onSubmit={handleOrder}>
            <div className="modal-form__input">
              <input
                className={nameDirty && nameError ? 'modal-form__error' : 'modal-form__field'}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onBlur={e => handleBlure(e)}
                onChange={handleName}
                value={userName}
                required
              />
              {nameDirty && nameError && <span className="modal-form__field_icon">+</span>}
              {nameDirty && nameError && <span className="modal-form__errorname">{nameError}</span>}
            </div>
            <div className="modal-form__input">
              <input
                className={phoneDirty && phoneError ? 'modal-form__error' : 'modal-form__field'}
                type="phone"
                id="phone"
                name="phone"
                placeholder="+38(XXX) XXX - XX - XX"
                onBlur={e => handleBlure(e)}
                onChange={handlePhone}
                value={phone}
                required
              />
              {phoneDirty && phoneError && <span className="modal-form__field_icon">+</span>}
              {phoneDirty && phoneError && (
                <span className="modal-form__errorphone">{phoneError}</span>
              )}
            </div>
            <button
              type="submit"
              className="modal-form__submit-btn"
              onMouseEnter={() => setHoverVector(true)}
              onMouseLeave={() => setHoverVector(false)}
            >
              ORDER
              {hoverVector && (
                <img className="modal-form__submit-btn-img" src={vector} alt="vector" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};