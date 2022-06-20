const baseUrl = 'https://62ab73aaa62365888bdcbd95.mockapi.io/products';
const baseUrlOrder = 'https://62ab73aaa62365888bdcbd95.mockapi.io/backets';

export const createCardsOrder = userData => {
  return fetch(baseUrlOrder, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create User');
    }
    return response.json();
  });
};

export const fetchCreateCardsData = () => {
    return fetch(baseUrlOrder).then(res => {
      if (res.ok) {
        return res.json();
      }
    });
}

export const fetchCardsData = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
};
