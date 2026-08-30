import "./App.css";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

function App() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
  );

  if (error) {
    return (
      <div className="app">
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="app">
        <h1>Loading users...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Users with SWR</h1>
      {isValidating && <p className="refreshing">Refreshing...</p>}

      <ul className="user-list">
        {data.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
