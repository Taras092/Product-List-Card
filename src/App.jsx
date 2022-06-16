import React, { useState, useEffect } from 'react';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Header } from './components/Header/Header';
import { Users } from './components/Users/UsersList';
import './common.scss';
import { fetchToken, createUser, fetchUsersData } from './gateway/gateway';


const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => findTokken(), []);

  const findTokken = () => {
    fetchToken().then(data => setToken(data.token));
  };

  const handleCreateUser = event => {
    createUser(event, token).then(data => console.log(data));
  };

  const handleButtonClick = () => {
    const hiddeElement = document.getElementById('userForm');
    hiddeElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  const handleButtonUserClick = () => {
    const hiddeElement = document.getElementById('user_info');
    hiddeElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
      <div className="page">
        <Header onClickButton={handleButtonClick} onClickUserButton={handleButtonUserClick} />
        <Users />
        <CreateUser onSubmit={handleCreateUser} />
      </div>
  );
};

export default App;
