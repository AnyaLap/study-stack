
import './ModalGame.css';

export const ModalGame = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Добро пожаловать! Здесь тебя ждет увлекательное путешествие в мир иностранных слов. Просто кликай на стрелки слайдера, чтобы перейти к новым словам. Каждый слайд открывает перед тобой новые языковые горизонты, позволяя расширить твой словарный запас. Учись, развивайся и наслаждайся процессом! Ну что? Начнем наше приключение?</p>
        <button className='btn-modal focused' onClick={onClose}>ВПЕРЕД!</button>
      </div>
    </div>
  );
};
