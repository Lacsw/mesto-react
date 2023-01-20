function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_picture ${
        Object.keys(props.card).length !== 0 && 'popup_opened'
      }`}
    >
      <figure className="popup__image-container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          alt={props.card.name}
          src={`${props.card.link}`}
        />
        <figcaption className="popup__image-caption">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
