function PopupWithImage() {
  return (
    <div class="popup popup_type_picture">
      <figure class="popup__image-container">
        <button
          class="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
        ></button>
        <img
          class="popup__image"
          alt="увеличенное изображение"
        />
        <figcaption class="popup__image-caption">El Matador beach</figcaption>
      </figure>
    </div>
  );
}

export default PopupWithImage;
