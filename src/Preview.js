import React from 'react';
import './Preview.scss';

function Preview({text, imageURL, handleClick}) {

  return (
    <div className="preview" onClick={handleClick}>
      <img src={imageURL} className="preview__image"></img>
      <div className="preview__text">
        {text}
      </div>
    </div>
  );
}

export default Preview;
