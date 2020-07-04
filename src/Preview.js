import React from 'react';
import './Preview.scss';

function Preview({text, image, handleClick}) {

  return (
    <div className="preview" onClick={handleClick}>
      <div className="preview__image" style={{backgroundImage: 'url(' + image + ')'}}></div>
      <div className="preview__text">
        {text}
      </div>
    </div>
  );
}

export default Preview;
