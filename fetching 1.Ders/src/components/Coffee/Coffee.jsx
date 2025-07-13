import React from 'react';

const Coffee = ({ title, description, ingredients = [], image, id}) => {
  return ( 
    <div className='coffee-item'>
    <img src={image} />
    <div className='coffee-info'>
        <div className='info-row'>
        <span className='label'>Title:</span>
        <span className='value'>{title}</span>
    </div>
     <div className='info-row'>
        <span className='label'>Description:</span>
        <span className='value'>{description}</span>
    </div>
    <div className='info-row'>
        <span className='label'>Ingredients:</span>
        <span className='value'>{ingredients.join(", ")}</span>
    </div>
  </div>

  </div>
  );
};

export default Coffee;