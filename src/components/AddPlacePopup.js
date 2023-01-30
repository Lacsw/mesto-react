import { useState } from 'react';

import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  };

  return (
    <>
      <PopupWithForm
        name="add"
        title="Новое место"
        submitBtnText="Создать"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <fieldset className="popup__set">
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_place-name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              id="place-name-input"
              required
              value={name}
              onChange={handleNameChange}
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
              value={link}
              onChange={handleLinkChange}
            />
            <span className="popup__input-error link-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
    </>
  );
};

export default AddPlacePopup;
