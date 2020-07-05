import React from 'react';
import './Estate.scss';

function Estate({image, name, price, priceColor, locality, floorArea, floorAreaColor, landArea, landAreaColor, companyLogo, companyName, handleClick}) {
  
  return (
    <div className="estate" onClick={handleClick}>
      <img src={image} className="estate__image" />
      <div className="estate__line">
        {name}
      </div>
      <div className={'estate__line estate__line--' + priceColor}>
        <span className="label">Price</span> <span>{price} Kč</span>
      </div>
      <div className="estate__line">
        <span className="label">Locality</span> <span>{locality}</span>
      </div>
      <div className={'estate__line estate__line--' + floorAreaColor}>
        <span className="label">Floor area</span> <span>{floorArea} m²</span>
      </div>
      <div className={'estate__line estate__line--' + landAreaColor}>
        <span className="label">Land area</span> <span>{landArea} m²</span>
      </div>
      <div className="estate__company">
        <img src={companyLogo} />
        {companyName}
      </div>
    </div>
  );
}

export default Estate;
