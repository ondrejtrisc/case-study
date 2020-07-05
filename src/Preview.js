import React from 'react';
import './Preview.scss';

function Preview({text, image, selection, handleClick}) {

  let overlay;
  switch(selection) {
    case 'left':
      overlay = <div className="preview__overlay">
                  <div className="selection">A</div>
                </div>
    break;
    case 'right':
      overlay = <div className="preview__overlay">
                  <div className="selection">B</div>
                </div>
    break;
    case '':
      overlay = <></>
    break;
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
