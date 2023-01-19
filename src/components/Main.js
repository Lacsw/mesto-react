import { useEffect, useState } from 'react';

import api from '../utils/api';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-btn"
          onClick={props.onEditAvatar}
        ></button>
        <img
          className="profile__image"
          style={{ backgroundImage: `url(${userAvatar})` }}
          alt={`фотография ${userName}`}
        />
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button
            className="profile__edit"
            type="button"
            aria-label="кнопка редактирования профиля"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="кнопка добавления фотографии"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section
        className="cards"
        aria-label="карточки с фотографиями"
      ></section>
    </main>
  );
}

export default Main;
