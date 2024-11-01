import React from "react";
import "./Card.css";

export const Card = (props) => {

  return (
    <>
        <div className="card-wrapper" id={props.id} data-tags={props.tags}>
          <div className="card-content">
              <span className="card-text">{props.english}</span>
              <span className="transcription">{props.transcription}</span>
          </div>
          <div className="card-translate">

            {props.showText 
             ? ( <p className="card_color">{props.russian}
                 <button 
                 className="back-btn"
                 onClick={props.handleBackButtonClick}
                 >Назад
                 </button></p>)
             : (
            props.showButton && <button
              className='card-btn'

              ref={props.btnRef}
              onFocus={(e) => e.currentTarget.classList.add('focused')}
              onBlur={(e) => e.currentTarget.classList.remove('focused')}
              
              onClick={props.handleButtonClick}
            >Перевод</button>
            )}
          </div>
        </div>
    </>
  );
};