import Events from './Components/Events';
import Car from './Components/Car';
import Phone from './Components/Phone';

function App() {
  return (
    <>

      <Phone />
       <Car carInfo={carinfo} />
      <Events />
      

    </>
  );
}

export default App;
