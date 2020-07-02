import React from 'react';
import './Preview.scss';

function Preview({text, image, handleClick}) {

  return (
    <div className="preview" onClick={handleClick}>
      <img src={image} className="preview__image"></img>
      <div className="preview__text">
        {text}
      </div>
    </div>
  );
}

export default Preview;
