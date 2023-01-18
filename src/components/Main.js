function Main(props) {
  return (
    <main class="content">
      <section class="profile">
        <button
          class="profile__avatar-btn"
          onClick={props.onEditAvatar}
        ></button>
        <img class="profile__image" />
        <div class="profile__container">
          <div class="profile__info">
            <h1 class="profile__name"></h1>
            <p class="profile__job"></p>
          </div>
          <button
            class="profile__edit"
            type="button"
            aria-label="кнопка редактирования профиля"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          class="profile__add-btn"
          type="button"
          aria-label="кнопка добавления фотографии"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section
        class="cards"
        aria-label="карточки с фотографиями"
      ></section>
    </main>
  );
}

export default Main;
