import React, { useState } from 'react';

import './book.css';



function Book(props) {

  const [count, setCount] = useState(0);



  const increase = () => {

    setCount(count + 1);

  };



  const decrease = () => {

    if (count > 0) {

      setCount(count - 1);

    }

  };



  return (

    <div id="book">

      <img

        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUuVnGPT27nsvOYYIo-3-mCpYV_GYR4emGg&s"

        alt="no"

        height={100}

        width={100}

      />

      <h1>Title: {props.title}</h1>

      <h1>Price: {props.price}</h1>

      <div>

        <button onClick={increase}>+</button>

        <span >{count}</span>

        <button onClick={decrease}>-</button>

      </div>

    </div>

  );

}



export default Book;