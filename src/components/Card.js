const Card = ({ card, onCardClick }) => {
  function handleClick() {
    onCardClick(card);
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
        <button
          className="card__remove-btn"
          type="button"
          aria-label="кнопка удаления"
        ></button>
      </div>
    </article>
  );
};

export default Card;
