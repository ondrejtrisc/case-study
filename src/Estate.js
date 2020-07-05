import React from 'react';
import './Estate.scss';

function Estate({image, name, price, priceComparison, locality, floorArea, floorAreaComparison, landArea, landAreaComparison, companyLogo, companyName, handleClick}) {
  
  //formats a number adding a space after the thousands, the millions, etc.
  const formatNumber = number => {
    const arr = number.toString().split('');
    return arr.map((digit, index) => ((arr.length - index) % 3 === 1) ? digit + ' ' : digit);
  };
  
  return (
    <div className="estate" onClick={handleClick}>
      <img src={image} alt="" className="estate__image" />
      <div className="estate__line">
        {name}
      </div>
      <div className={'estate__line estate__line--' + priceComparison}>
        <span className="label">Price</span> <span>{formatNumber(price)} Kč</span>
      </div>
      <div className="estate__line">
        <span className="label">Locality</span> <span>{locality}</span>
      </div>
      <div className={'estate__line estate__line--' + floorAreaComparison}>
        <span className="label">Floor area</span> <span>{formatNumber(floorArea)} m²</span>
      </div>
      <div className={'estate__line estate__line--' + landAreaComparison}>
        <span className="label">Land area</span> <span>{formatNumber(landArea)} m²</span>
      </div>
      <div className="estate__company">
        <img src={companyLogo} alt="" />
        {companyName}
      </div>
    </div>
  );
}

export default Estate;
