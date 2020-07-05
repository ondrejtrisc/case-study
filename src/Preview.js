import React from 'react';
import './Preview.scss';

function Preview({text, image, selection, handleClick}) {

  //the overlay marking that the preview is selected as the left (A) or the right (B) estate in the comparison
  let overlay;
  switch(selection) {
    case '':
      overlay = <></>;
    break;
    default:
      overlay = <div className="preview__overlay">
                  <div className="selection">{selection}</div>
                </div>;
  }

  return (
    <div className="preview" onClick={handleClick}>
      {overlay}
      <div className="preview__image" style={{backgroundImage: 'url(' + image + ')'}}></div>
      <div className="preview__text">
        {text}
      </div>
    </div>
  );
}

export default Preview;
