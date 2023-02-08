import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';

import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';

import { setCardsThunk, addCardThunk } from '../store/reducers/cardsSlice';
import {
  updateAvatarThunk,
  getUserInfoThunk,
  setUserThunk,
} from '../store/reducers/userSlice';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfimDeletePopupOpen, setConfimDeletePopupOpen] = useState(false);
  const [deletedCard, setDeletedCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const dispatch = useDispatch();

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleRemoveCardBtnClick(card) {
    setConfimDeletePopupOpen(true);
    setDeletedCard(card);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfimDeletePopupOpen(false);
    setSelectedCard(null);
  }

  //Действия с пользователем
  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, [dispatch]);

  function handleUpdateUser(userInfo) {
    dispatch(setUserThunk(userInfo));
    closeAllPopups();
  }

  function handleUpdateAvatar(link) {
    dispatch(updateAvatarThunk(link));
    closeAllPopups();
  }

  //Действия с карточками
  useEffect(() => {
    dispatch(setCardsThunk());
  }, [dispatch]);

  const handleAddPlaceSubmit = (card) => {
    dispatch(addCardThunk(card));
    closeAllPopups();
  };

  return (
    <>
      <Header />
      <Main
        name="place-name"
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardDelete={handleRemoveCardBtnClick}
      />
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <ConfirmDeletePopup
        isOpen={isConfimDeletePopupOpen}
        onClose={closeAllPopups}
        card={deletedCard}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
