import React, { useState } from 'react';
import { ModalCards } from '../ModalCards/ModalCards';
import { createCardsOrder } from '../../gateway/gateway';
import dolar from '../../img/dolar.png';
import './cards.scss';

export const Cards = ({ cardsList }) => {
  const [visibleModalCards, setVisibleModalCards] = useState(false);
  const [card, setCard] = useState([]);

  const handleCloseModalCards = () => {
    setVisibleModalCards(false);
  };

  const handleVisibleModalCards = card => {
    setVisibleModalCards(true);
    setCard(card);
  };

  const handleCheapestCard = () => {
    const cardEl = cardsList.reduce((acc, el) => (el.price < acc.price ? el : acc));
    setVisibleModalCards(true);
    setCard(cardEl);
  };

    const handleOrder = event => {
      createCardsOrder(event).then(() => alert('Product success order'));
      setVisibleModalCards(false);
    };

  return (
    <section className="cards">
      {visibleModalCards && (
        <ModalCards card={card} onClose={handleCloseModalCards} onOrder={handleOrder} />
      )}
      <div className="cards__page">
        <ul className="cards__list">
          {cardsList.map(card => (
            <li key={card.id} className="cards__item">
              <h6 className="cards__item_category">{card.category}</h6>
              <h1 className="cards__item_name">{card.name}</h1>
              <div className="cards__item_description">
                <div className="cards__item_description-symbol">
                  <img className="cards__item_description-img" src={dolar} alt="currency" />
                </div>
                <div className="cards__item_description-price">{card.price}</div>
                <button
                  className="cards__item_description-btn"
                  onClick={() => handleVisibleModalCards(card)}
                >
                  BUY
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cards__button">
          <button className="cards__btn" onClick={handleCheapestCard}>
            Buy cheapest
          </button>
        </div>
      </div>
    </section>
  );
};
