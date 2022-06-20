import React, { useState, useEffect } from 'react';
import { Cards } from './component/Cards/Cards';
import { fetchCardsData, fetchCreateCardsData } from './gateway/gateway';
import './common.scss';

const App = () => {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    fetchCards()
  }, []);

  const fetchCards = () => {
    fetchCardsData().then(data => setCardsList(data));
  }


  return <Cards cardsList={cardsList} />;
};

export default App;
