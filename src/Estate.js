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
      <div className={'estate__price labeled-line ' + priceColor}>
        <span className="line-label">Price</span> <span>{price}</span>
      </div>
      <div className="estate__locality labeled-line">
        <span className="line-label">Locality</span> <span>{locality}</span>
      </div>
      <div className={'estate__floor-area labeled-line ' + floorAreaColor}>
        <span className="line-label">Floor area</span> <span>{floorArea}</span>
      </div>
      <div className={'estate__land-area labeled-line ' + landAreaColor}>
        <span className="line-label">Land area</span> <span>{landArea}</span>
      </div>
      <div className="estate__company">
        <img src={companyLogo} />
        {companyName}
      </div>
    </div>
  );
}

export default Estate;
