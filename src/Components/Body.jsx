import React,{useState} from 'react'
import Footer from './Footer';

const Body = (props) => {
    
     const [count, setCount] = useState(1);

     const decrement =()=>{
         
       ( count<=1 )? (count=1) : (setCount((count) => count - 1));
     }

     const increment =()=>{
        setCount((count)=>count+1 )
     }
  return (
    <>
      <div>
        <h3> {props.productName} </h3>
        <p className="price">Rs {props.price}</p>
      </div>
      <div>
        <h4>Order Summary</h4>
        <p>{count}</p>
        <p>Total Payment:{count * props.price} </p>
      </div>
      <div className="icrBtn">
        <button onClick={decrement}>-</button>
        <p>{count} </p>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Body