import { useDispatch } from 'react-redux';

import PopupWithForm from './PopupWithForm';
import { removeCardThunk } from '../store/reducers/cardsSlice';

const ConfirmDeletePopup = ({ isOpen, onClose, card }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeCardThunk(card._id));
    onClose();
  };

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверенны?"
      submitBtnText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default ConfirmDeletePopup;
