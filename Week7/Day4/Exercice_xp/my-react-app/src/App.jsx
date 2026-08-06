import BuggyCounter from "./Exercice1/BuggyCounter.jsx";
import ErrorBoundary from "./Exercice1/ErrorBoundary.jsx";


function App() {
  return (
    <div>
      <h1>Simulation 1</h1>

      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h1>Simulation 2</h1>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h1>Simulation 3</h1>

      <BuggyCounter />
    </div>
  );
}

export default App;