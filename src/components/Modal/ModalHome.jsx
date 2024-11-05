
import './ModalHome.css';

export const ModalHome = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="modal-overlay">
      <div className="modal-home">
        <p>Привет, меня зовут <span>Криспи</span>! И это словарь для грациозных! Вы сможете увидеть разнообразные слова, их транскрипцию и перевод. Каждое поле таблицы можно легко изменить — просто кликните на нужное слово или фразу, внесите необходимые правки и сохраните изменения. Также, если какая-то запись вам больше не нужна, вы можете просто удалить её одним нажатием. Ну что? Приступим?</p>
        <button className='btn-modal focused' onClick={onClose}>ВПЕРЕД!</button>
        <img className='img-modal' src="./images/icon.png" alt="" />
      </div>
    </div>
  );
};
