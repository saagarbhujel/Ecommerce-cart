import React from 'react'


const Footer = (props) => {
  return (
    <>
      <div>
       <button className="add-to-cart">{props.addToCartBtn}</button>
      </div>
      <div>
        
        <button className="add-to-cart">{props.buyNow}</button>
      </div>
    </>
  );
};

export default Footer