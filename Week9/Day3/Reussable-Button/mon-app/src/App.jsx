import BaseButton from "./BaseButton";

function App() {
  const handleSave = () => {
    console.log("Save button clicked!");
  };

  const handleDelete = () => {
    console.log("Delete button clicked!");
  };

  return (
    <div>
      <h1>Reusable Buttons</h1>

      <BaseButton text="Save" color="#007bff" action={handleSave} />

      <BaseButton text="Delete" color="#dc3545" action={handleDelete} />
    </div>
  );
}
//
export default App;
