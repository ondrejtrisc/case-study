import React from 'react';
import './Estate.scss';

function Estate({name, price, locality, floor_area, land_area, company_logo, company_name}) {
  
  return (
    <div className="estate">
      <ul>
        <li>{name}</li>
        <li>Price: {price}</li>
        <li>Locality: {locality}</li>
        <li>Floor area: {floor_area}</li>
        <li>Land area: {land_area}</li>
        <li><img src={company_logo} /></li>
        <li>{company_name}</li>
      </ul>
    </div>
  );
}

export default Estate;
