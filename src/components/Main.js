function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-btn"
          onClick={props.onEditAvatar}
        ></button>
        <img className="profile__image" />
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <p className="profile__job"></p>
          </div>
          <button
            className="profile__edit"
            type="button"
            aria-label="кнопка редактирования профиля"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="кнопка добавления фотографии"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section
        className="cards"
        aria-label="карточки с фотографиями"
      ></section>
    </main>
  );
}

export default Main;
