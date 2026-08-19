import './Exercice.css'
function Exercise() {
    const styleHeader = {
                        color: "white",
                        backgroundColor: "DodgerBlue",
                        padding: "10px",
                        fontFamily: "Arial",
                    };
  return (
    <div>
      <h1 style={styleHeader}>Exercise 3</h1>
      <p className="para">This is a simple functional component.</p>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        Learn React
      </a>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        style={{ marginTop: '10px' }}
      />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default Exercise;
