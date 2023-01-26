import { useContext, useEffect, useState } from 'react';

import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const user = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
        <img
          className="profile__image"
          src={user.avatar}
          alt={`фотография ${user.name}`}
        />
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{user.name}</h1>
            <p className="profile__job">{user.about}</p>
          </div>
          <button
            className="profile__edit"
            type="button"
            aria-label="кнопка редактирования профиля"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="кнопка добавления фотографии"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="cards" aria-label="карточки с фотографиями">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
