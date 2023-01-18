import React, { useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submitBtnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <fieldset className="popup__set">
              <label className="popup__field">
                <input
                  className="popup__input popup__input_type_name"
                  type="text"
                  name="name"
                  placeholder="Укажите Ваше имя"
                  id="name-input"
                  minlength="2"
                  maxlength="40"
                  required
                />
                <span className="popup__input-error name-input-error"></span>
              </label>
              <label className="popup__field">
                <input
                  className="popup__input popup__input_type_job"
                  type="text"
                  name="about"
                  placeholder="Укажите Вашу профессию"
                  id="job-input"
                  minlength="2"
                  maxlength="200"
                  required
                />
                <span className="popup__input-error job-input-error"></span>
              </label>
            </fieldset>
          </>
        }
      />

      <PopupWithForm
        name="add"
        title="Новое место"
        submitBtnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <fieldset className="popup__set">
              <label className="popup__field">
                <input
                  className="popup__input popup__input_type_place-name"
                  type="text"
                  name="place-name"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  id="place-name-input"
                  required
                />
                <span className="popup__input-error place-name-input-error"></span>
              </label>
              <label className="popup__field">
                <input
                  className="popup__input popup__input_type_link"
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  id="link-input"
                  required
                />
                <span className="popup__input-error link-input-error"></span>
              </label>
            </fieldset>
          </>
        }
      />

      <PopupWithForm
        name="confirm"
        title="Вы уверенны?"
        submitBtnText="Да"
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        submitBtnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__field">
              <input
                className="popup__input popup__input_type_avatar"
                type="url"
                name="avatar"
                placeholder="Ссылка на новый аватар"
                id="avatar-link-input"
                required
              />
              <span className="popup__input-error avatar-link-input-error"></span>
            </label>
          </>
        }
      />

      <PopupWithImage />

      <template className="card-template">
        <article className="card">
          <img className="card__image" />
          <div className="card__caption">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button
                className="card__like-btn"
                type="button"
                aria-label="кнопка лайк"
              ></button>
              <span className="card__like-counter"></span>
            </div>
            <button
              className="card__remove-btn"
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
