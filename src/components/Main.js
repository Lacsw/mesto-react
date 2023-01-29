import { useContext, useEffect, useState } from 'react';

import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLikes(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card).then(() => {
      setCards((cards) => cards.filter((c) => (c._id !== card._id)));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
        <img
          className="profile__image"
          src={currentUser.avatar}
          alt={`фотография ${currentUser.name}`}
        />
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__job">{currentUser.about}</p>
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
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
