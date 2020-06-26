import React from 'react';
import MyButton from '../myButton/MyButton'
import './CollectionItems.scss';

const CollectionItems = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${' '}{price}</span>
    </div>
    <MyButton inverted> ADD TO CART </MyButton>
  </div>
);

export default CollectionItems;