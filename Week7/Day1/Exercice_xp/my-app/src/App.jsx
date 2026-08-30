import Exercise from './Exercice3';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import './App.css';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
  };

  return (
    <div style={{ padding: '20px' }}>
      <section style={{ marginBottom: '30px' }}>
        <h2>Exercise 1</h2>
        {myelement}
        <p>React is {sum} times better with JSX!</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Exercise 2</h2>
        <h3>User Info:</h3>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Animals</h2>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </section>
      <section>
        <h2>Exercise 3</h2>
        <Exercise />
      </section>
    </div>
  );
}

export default App;
