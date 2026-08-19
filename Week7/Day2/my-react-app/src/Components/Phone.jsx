import React, { useState } from 'react';

function Phone() {
  const [brand] = useState('Samsung');
  const [model] = useState('Galaxy S20');
  const [color, setColor] = useState('black');
  const [year] = useState(2020);

  const changeColor = () => {
    setColor('blue');
  };

  return (
    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
      <h2>My phone is a {brand}</h2>
      <p>
        It is a <strong>{color}</strong> {model} from {year}.
      </p>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
}

export default Phone;
