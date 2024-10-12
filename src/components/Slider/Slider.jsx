import React, { useState } from "react";
import { Card } from "../Card/Card";
import './Slider.css'

export const Slider = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(" ");

  if (!words ||  words.length === 0) {
    return <div>Карточки отсутствуют</div>;
  }

  const handlePreviousCard = () => {
    setAnimation("prev");
    setTimeout(() => {
      setCurrentIndex((currentIndex === 0) ?  words.length - 1 : (currentIndex - 1) %  words.length);
      setAnimation(" ");
  }, 400);
  };

  const handleNextCard = () => {
  
    setAnimation("next");
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) %  words.length);
      setAnimation(" ");
  }, 400);
  };

  const currentCard =  words[currentIndex];

  return (
    <div className="slider">
      <button className="slider-btn" onClick={handlePreviousCard}><img className="slider-img img-left" src="./images/arrow-slider.png" alt="" /></button>
      <div className={`slider-cards ${animation}`}>
          <Card
            {...currentCard}
          />
      </div>
      <button className="slider-btn" onClick={handleNextCard}><img className="slider-img img-right" src="./images/arrow-slider.png" alt="" /></button>
    </div>
  );
};

Slider.defaultProps = {
  words: [
    { id: "1",
      english: "dislocation",
      transcription: "[dɪsləʊˈkeɪʃn]",
      russian: "вывих",
      tags: "medicine",
      tags_json: "[medicine]",
      boolean: "false" 
    }
  ]
};