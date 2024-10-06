import React, {useState} from "react";
import "./Card.css";

export const Card = (props) => {

  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(true);
  };

  return (
    <>
        <div className="card-wrapper" id={props.id} data-tags={props.tags}>
          <div className="card-content">
            <span className="card-text">{props.english}</span>
            <span className="transcription">{props.transcription}</span>
            {/* <h3>{props.russian}</h3> */}
          </div>
          <div className="card-translate">
            {showText ? (
            <p className="card-text card_color">{props.russian}</p>
          ) : (
            <button onClick={handleButtonClick} className="card-btn">Перевод</button>
          )}
          </div>
        </div>
    </>
  );
};