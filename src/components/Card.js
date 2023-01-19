const Card = (props) => {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={props.card.link}
        alt={`Изображение ${props.card.name}`}
        onClick={handleClick}
      />
      <div className="card__caption">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-btn"
            type="button"
            aria-label="кнопка лайк"
          ></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
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
