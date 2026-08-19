import React from 'react';

function Car(Carinfo) {
    const [color,setColor]=useState("red");
    return(
        <div>
            <h1>This Car is {Carinfo.model}</h1>
            <h2>This Car is {color} and {Carinfo.model}</h2>
            <Garage size="small" />
        </div>
    );
}

export default Car;
