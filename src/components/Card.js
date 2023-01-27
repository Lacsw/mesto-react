import { useContext } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card, onCardClick }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    //функционал удаления карточки
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={card.link}
        alt={`Изображение ${card.name}`}
        onClick={handleClick}
      />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-btn"
            type="button"
            aria-label="кнопка лайк"
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
        {isOwn && (
          <button
            className="card__remove-btn"
            type="button"
            aria-label="кнопка удаления"
            onClick={handleDeleteClick}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
