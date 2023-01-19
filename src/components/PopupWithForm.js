function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && 'popup_opened'
      }`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="popup__close-btn"
          type="button"
          aria-label="кнопка закрытия попапа"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__${props.name}-form`}
          name={`${props.name}-form`}
          novalidate
        >
          {props.children}

          <button
            className="popup__submit-btn"
            type="submit"
          >
            {props.submitBtnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
