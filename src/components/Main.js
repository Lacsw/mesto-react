function Main() {
  function handleEditAvatarClick() {
    const avatarPopupElement = document.querySelector('.popup_type_avatar');
    avatarPopupElement.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const avatarPopupElement = document.querySelector('.popup_type_edit');
    avatarPopupElement.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const avatarPopupElement = document.querySelector('.popup_type_add');
    avatarPopupElement.classList.add('popup_opened');
  }

  return (
    <main class="content">
      <section class="profile">
        <button
          class="profile__avatar-btn"
          onClick={handleEditAvatarClick}
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
            onClick={handleEditProfileClick}
          ></button>
        </div>
        <button
          class="profile__add-btn"
          type="button"
          aria-label="кнопка добавления фотографии"
          onClick={handleAddPlaceClick}
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
