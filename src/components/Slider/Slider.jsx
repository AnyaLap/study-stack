import React, { useState, useEffect, useRef, useContext } from "react";
import { Card } from "../Card/Card";
import  wordsDef  from '../../wordsDef.json';
import { ModalGame } from "../Modal/ModalGame";
import { MyContext } from '../../context/Context';
import './Slider.css'

export const Slider = () => {

  const { wordsContext } = useContext(MyContext); // Получаем данные из контекста
  const wordsData = wordsContext.length ? wordsContext : wordsDef;
  const [currentIndex, setCurrentIndex] = useState(0);//Текущий индекс
  const [isModalOpen, setIsModalOpen] = useState(false);//Модальное окно
  const [showText, setShowText] = useState(false);//Показать текст
  const [showButton, setShowButton] = useState(true);//Показать кнопку
  const [showWordsCount, setShowWordsCount] = useState(0);//Показать счетчик слов
  const [translatedIndexes, setTranslatedIndexes] = useState([]);//Массив переведенных индексов
  const [animation, setAnimation] = useState(" ");//Анимация
  const btnRef = useRef(null);//Фокус кнопки

  useEffect(() => {
    // Откроем модальное окно при загрузке компонента.
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Переключение карточек назад
  const handlePreviousCard = () => {
    setAnimation("prev");

    setTimeout(() => {
      setAnimation(" ");
      // Переход к предыдущему элементу(если 0, то переходим к последнему элементу массива)
      setCurrentIndex((currentIndex === 0) ?  wordsData.length - 1 : (currentIndex - 1) %  wordsData.length);
    }, 400);
  };

   // Переключение карточек вперед
  const handleNextCard = () => {
    setAnimation("next");

    setTimeout(() => {
      // Переход к следующему элементу(если на последнем элементе массива, то переходим к первому)
      setCurrentIndex((currentIndex + 1) %  wordsData.length);
      setAnimation(" ");
    }, 400);
  };

  // Кнопка перевода карточки
  const handleButtonClick = () => {
  // Проверяем, была ли уже переведена текущая карточка
      if (!translatedIndexes.includes(currentIndex)) {
        setShowWordsCount(showWordsCount + 1); // Увеличиваем счетчик
        setTranslatedIndexes([...translatedIndexes, currentIndex]); // Добавляем индекс в переведенные
      }
    setShowText(true);
    setShowButton(false);
  }
  // Кнопка назад, чтобы вернуться к кнопке Перевод
  const handleBackButtonClick = () => {
    setShowText(false);
    setShowButton(true);
  };

  // Кнопка Знаю, для уже знакомых слов
  const handleButtonKnowClick = () => {
    handleNextCard(); // Переходим к следующей карточке
    setShowWordsCount(showWordsCount + 1); // Увеличиваем счетчик
  }

  // Сброс состояний кнопки перевода для отображения только на конкретной карточке и фокус на ней при рендере
  useEffect(() => {
    setShowText(false);
    setShowButton(true);

    setTimeout(() => {
      // Устанавливаем фокус на кнопку после изменения индекса
      if (btnRef.current) {
          btnRef.current.focus();
      }
    }, 0);
  }, [currentIndex]);

  const currentCard =  wordsData[currentIndex];

  return (
  
    <div className="wrapper-slider">
      <div className="slider">
        <button className="slider-btn" 
          onClick={handlePreviousCard}>
          <img className="slider-img img-left" src="./images/arrow-slider.png" alt="" />
        </button>

        <div className={`slider-cards ${animation}`}>
          <Card
            english={currentCard?.english}
            transcription={currentCard?.transcription}
            russian={currentCard?.russian}
            handleButtonClick = {handleButtonClick}
            handleBackButtonClick = {handleBackButtonClick}
            showText={showText}
            showButton={showButton}
            btnRef={btnRef}
          />
        </div>

        <button className="slider-btn"
          onClick={handleNextCard}>
          <img className="slider-img img-right" src="./images/arrow-slider.png" alt="" />
        </button>
      </div>
      <div className="count">
        <button className="btn-know"
        onClick={handleButtonKnowClick}>
          Знаю это слово</button>
        <p>Изучено: {`${parseInt(showWordsCount)} из ${wordsData.length}`}</p>
      </div>
      <div>
      <ModalGame isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};