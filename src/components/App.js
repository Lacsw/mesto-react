import React, { useEffect, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(userInfo) {
    api.setUserInfo(userInfo).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    });
  }

  useEffect(() => {
    api.getUserInfo().then((userData) => {
      setCurrentUser(userData);
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <PopupWithForm
        name="add"
        title="Новое место"
        submitBtnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__set">
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_place-name"
              type="text"
              name="place-name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
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
      </PopupWithForm>

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
      >
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
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
