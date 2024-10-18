import React, { useState } from "react";
import { Card } from "../Card/Card";
import  words  from '../../words.json';
import wordDefault from '../../wordDefault.json';
import './Slider.css'

export const Slider = ( {wordsData = wordDefault} ) => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(" ");

  wordsData = words || wordDefault

  const handlePreviousCard = () => {
    setAnimation("prev");
    setTimeout(() => {
      setCurrentIndex((currentIndex === 0) ?  wordsData.length - 1 : (currentIndex - 1) %  wordsData.length);
      setAnimation(" ");
  }, 400);
  };

  const handleNextCard = () => {
  
    setAnimation("next");
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) %  wordsData.length);
      setAnimation(" ");
  }, 400);
  };

  const currentCard =  wordsData[currentIndex];

  return (
    <div className="slider">
      <button className="slider-btn" onClick={handlePreviousCard}><img className="slider-img img-left" src="./images/arrow-slider.png" alt="" /></button>
      <div className={`slider-cards ${animation}`}>
        <Card 
        {...currentCard}/>
      </div>
      <button className="slider-btn" onClick={handleNextCard}><img className="slider-img img-right" src="./images/arrow-slider.png" alt="" /></button>
    </div>
  );
};