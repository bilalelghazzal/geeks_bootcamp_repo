import { useState, useRef } from "react";

export default function Exercice2() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleInput = () => {
    const length = inputRef.current?.value.length ?? 0;
    setCount(length);
  };

  return (
    <div className="character-counter">
      <h2>Character Counter</h2>
      <input
        ref={inputRef}
        type="text"
        onInput={handleInput}
        placeholder="Type here..."
        aria-label="Text input for character counting"
      />
      <p>
        Characters typed: <strong>{count}</strong>
      </p>
    </div>
  );
}
