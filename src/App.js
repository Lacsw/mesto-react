import logo from './images/header-logo.svg';

function App() {
  return (
    <body class="page">
      <header class="header">
        <img
          src={logo}
          alt="логотип Место"
          class="header__logo"
        />
      </header>
      <main class="content">
        <section class="profile">
          <button class="profile__avatar-btn"></button>
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
            ></button>
          </div>
          <button
            class="profile__add-btn"
            type="button"
            aria-label="кнопка добавления фотографии"
          ></button>
        </section>

        <section
          class="cards"
          aria-label="карточки с фотографиями"
        ></section>
      </main>

      <footer class="footer">
        <p class="footer__copyright">&copy; 2022 Роман Фролов</p>
      </footer>

      <div class="popup popup_type_edit">
        <div class="popup__container">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="кнопка закрытия попапа"
          ></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form
            class="popup__form popup__edit-form"
            name="edit-form"
            novalidate
          >
            <fieldset class="popup__set">
              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_name"
                  type="text"
                  name="name"
                  placeholder="Укажите Ваше имя"
                  id="name-input"
                  minlength="2"
                  maxlength="40"
                  required
                />
                <span class="popup__input-error name-input-error"></span>
              </label>
              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_job"
                  type="text"
                  name="about"
                  placeholder="Укажите Вашу профессию"
                  id="job-input"
                  minlength="2"
                  maxlength="200"
                  required
                />
                <span class="popup__input-error job-input-error"></span>
              </label>
            </fieldset>
            <button
              class="popup__submit-btn"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_add">
        <div class="popup__container">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="кнопка закрытия попапа"
          ></button>
          <h2 class="popup__title">Новое место</h2>
          <form
            class="popup__form popup__add-form"
            name="add-form"
            novalidate
          >
            <fieldset class="popup__set">
              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_place-name"
                  type="text"
                  name="place-name"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  id="place-name-input"
                  required
                />
                <span class="popup__input-error place-name-input-error"></span>
              </label>
              <label class="popup__field">
                <input
                  class="popup__input popup__input_type_link"
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  id="link-input"
                  required
                />
                <span class="popup__input-error link-input-error"></span>
              </label>
            </fieldset>
            <button
              class="popup__submit-btn"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_picture">
        <figure class="popup__image-container">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="кнопка закрытия попапа"
          ></button>
          <img
            class="popup__image"
            src="<%=require('./images/el-matador-beach.jpeg')%>"
            alt="увеличенное изображение"
          />
          <figcaption class="popup__image-caption">El Matador beach</figcaption>
        </figure>
      </div>

      <div class="popup popup_type_confirm">
        <div class="popup__container">
          <h2 class="popup__title">Вы уверены?</h2>
          <button
            class="popup__close-btn"
            type="button"
            aria-label="кнопка закрытия попапа"
          ></button>
          <form
            class="popup__form popup__confirm-form"
            name="confirm-form"
            novalidate
          >
            <button
              class="popup__submit-btn"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_avatar">
        <div class="popup__container">
          <button
            class="popup__close-btn"
            type="button"
            aria-label="кнопка закрытия попапа"
          ></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form
            class="popup__form popup__avatar-form"
            name="avatar-form"
            novalidate
          >
            <label class="popup__field">
              <input
                class="popup__input popup__input_type_avatar"
                type="url"
                name="avatar"
                placeholder="Ссылка на новый аватар"
                id="avatar-link-input"
                required
              />
              <span class="popup__input-error avatar-link-input-error"></span>
            </label>
            <button
              class="popup__submit-btn"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <template class="card-template">
        <article class="card">
          <img class="card__image" />
          <div class="card__caption">
            <h2 class="card__title"></h2>
            <div class="card__like-container">
              <button
                class="card__like-btn"
                type="button"
                aria-label="кнопка лайк"
              ></button>
              <span class="card__like-counter"></span>
            </div>
            <button
              class="card__remove-btn"
              type="button"
              aria-label="кнопка удаления"
            ></button>
          </div>
        </article>
      </template>
    </body>
  );
}

export default App;
