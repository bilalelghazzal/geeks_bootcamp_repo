import React, { useState } from 'react';

const Car = ({ carInfo }) => {
  const [state, setCarColor] = useState({ color: 'red' });

  const setCarColorHandler = () => {
    setCarColor({ color: 'blue' });
  };

  return (
    <div>
      <h1>This car is {state.color} {carInfo.model}</h1>
      <button onClick={setCarColorHandler}>Change Color</button>
    </div>
  );
};

export default Car;
