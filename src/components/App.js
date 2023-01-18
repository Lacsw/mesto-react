import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submitBtnText="Сохранить"
        children={
          <>
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
          </>
        }
      />

      <PopupWithForm
        name="add"
        title="Новое место"
        submitBtnText="Создать"
        children={
          <>
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
          </>
        }
      />

      <PopupWithForm
        name="confirm"
        title="Вы уверенны?"
        submitBtnText="Да"
      />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        submitBtnText="Сохранить"
        children={
          <>
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
          </>
        }
      />

      <PopupWithImage />

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
    </>
  );
}

export default App;
