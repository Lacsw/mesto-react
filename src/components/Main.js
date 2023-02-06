import { useSelector } from 'react-redux';

import Card from './Card';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardDelete,
}) {
  const currentUser = useSelector((state) => state.user.user);
  const cards = useSelector((state) => state.cards.cards);

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
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
