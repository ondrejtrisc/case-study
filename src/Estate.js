import React from 'react';
import './Estate.scss';

function Estate({image, name, price, priceColor, locality, floorArea, floorAreaColor, landArea, landAreaColor, companyLogo, companyName, handleClick}) {
  
  return (
    <div className="estate" onClick={handleClick}>
      <div className="estate__image">
        <img src={image} />
      </div>
      <div className="estate__name">
        {name}
      </div>
      <div className={'estate__price ' + priceColor}>
        Price: {price}
      </div>
      <div className="estate__locality">
        Locality: {locality}
      </div>
      <div className={'estate__floor-area ' + floorAreaColor}>
        Floor area: {floorArea}
      </div>
      <div className={'estate__land-area ' + landAreaColor}>
        Land area: {landArea}
      </div>
      <div className="estate__company">
        <img src={companyLogo} />
        {companyName}
      </div>
    </div>
  );
}

export default Estate;
