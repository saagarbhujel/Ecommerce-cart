
import React,{ useState } from 'react'
import './App.css'
import Card from './Components/Card';
import PageFoot from './Components/PageFoot';
import PageHead from './Components/PageHead';






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PageHead heading="Shop Limitlessly" />
      <div className='products'>
        <Card
          img="https://static-01.daraz.com.np/p/fccfe05503b705218812c3b971f4cac8.jpg"
          productName="T-Shirt"
          price=" 950"
          
          
        />
        <Card
          img="https://static-01.daraz.com.np/p/02619b2692fc82642bc5d9581c48391f.png"
          productName="T-Shirt For Men"
          price=" 950"
          value="count"
          
        />
        <Card
          img="https://static-01.daraz.com.np/p/0510d5b759cd4207b174c4451935a234.jpg"
          productName="Box-Pant"
          price=" 1650"
        />
        <Card
          img="https://static-01.daraz.com.np/p/8c88ede811f3b8efc9637b7fee1c7477.jpg"
          productName="Half-Jacket"
          price=" 3550"
        />
        <Card
          img="https://static-01.daraz.com.np/p/02619b2692fc82642bc5d9581c48391f.png"
          productName="T-Shirt For Men"
          price=" 1350"
        />
      </div>
      <PageFoot/>
    </>
  );
}

export default App
