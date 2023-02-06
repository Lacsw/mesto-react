import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useSelector((state) => state.user.user);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  useEffect(() => {
    setName(currentUser.name ?? '');
    setDescription(currentUser.about ?? '');
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitBtnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
            value={name}
            onChange={handleNameChange}
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
            value={description}
            onChange={handleDescChange}
          />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
