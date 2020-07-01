import React, { useState } from 'react';
import './Preview.scss';

function Preview({text, imageURL}) {

  return (
    <div className="preview">
      <img src={imageURL}></img>
      <div className="preview__text">
        {text}
      </div>
    </div>
  );
}

export default Preview;
