function UserFavoriteAnimals({ favAnimals }) {
  return (
    <div className="animals">
      <h3>My Favorite Animals:</h3>
      <ul>
        {favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserFavoriteAnimals;