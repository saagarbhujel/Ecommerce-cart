import React from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';



function Card(props) {

    
  return (
    <>
      <div className="card">
        <Header img={props.img} />
        <Body
          productName={props.productName}
          price={props.price}
          totalSum={props.totalSum}

        />
        <Footer
          addToCartBtn="Add To Cart"
          buyNow="Buy Now"
          
        />
      </div>
    </>
  );
}

export default Card