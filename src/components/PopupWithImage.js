function PopupWithImage() {
  return (
    <div className="popup popup_type_picture">
      <figure className="popup__image-container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
        ></button>
        <img
          className="popup__image"
          alt="увеличенное изображение"
        />
        <figcaption className="popup__image-caption">El Matador beach</figcaption>
      </figure>
    </div>
  );
}

export default PopupWithImage;
