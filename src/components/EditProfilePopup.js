import React from 'react';

import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ isOpen, onClose }) => {
  return (
    <>
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submitBtnText="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
      >
        <fieldset className="popup__set">
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_name"
              type="text"
              name="name"
              placeholder="Укажите Ваше имя"
              id="name-input"
              minLength="2"
              maxLength="40"
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
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error job-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
    </>
  );
};

export default EditProfilePopup;
