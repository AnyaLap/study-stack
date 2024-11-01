import React, {useState, useRef, useEffect} from "react";
import "./Card.css";

export const Card = (props) => {

  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const viewTranslationButtonRef = useRef(null);

  useEffect(() => {
    viewTranslationButtonRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    setShowText(true);

    setShowButton(false);
    
    setTimeout(() => {
      setShowText(false);
      setShowButton(true);
    }, 1200);
  };

  return (
    <>
        <div className="card-wrapper" id={props.id} data-tags={props.tags}>
          <div className="card-content">
              <span className="card-text">{props.english}</span>
              <span className="transcription">{props.transcription}</span>
          </div>
          <div className="card-translate">
            {showText ? (
            <p className="card-text card_color">{props.russian}</p>
          ) : (
            showButton && <button
            onFocus={(e) => e.currentTarget.classList.add('focused')}
            onBlur={(e) => e.currentTarget.classList.remove('focused')}
            ref={viewTranslationButtonRef}
            onClick={() => {handleButtonClick();
              props.handleWordsCard()
            }}
            className='card-btn'>
                Перевод</button>
          )}
          </div>
        </div>
    </>
  );
};