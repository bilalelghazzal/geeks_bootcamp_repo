// Select elements from DOM
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonType = document.getElementById('pokemon-type');
const message = document.getElementById('message');

const prevBtn = document.getElementById('prev-btn');
const randomBtn = document.getElementById('random-btn');
const nextBtn = document.getElementById('next-btn');


let currentPokemonId = null;

//  show loading
function showLoading() {
  message.textContent = "";
  pokemonImage.src = ""; // zdd image / gif
  pokemonName.textContent = "Loading...";
  pokemonId.textContent = "";
  pokemonHeight.textContent = "";
  pokemonWeight.textContent = "";
  pokemonType.textContent = "";
}

//show error
function showError() {
  pokemonImage.src = "";
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  pokemonHeight.textContent = "";
  pokemonWeight.textContent = "";
  pokemonType.textContent = "";
  message.textContent = "Oh no! That Pokemon isnot available…";
}

// func display data
function displayPokemon(data) {
  pokemonImage.src = data.sprites.other['official-artwork'].front_default || "";
  pokemonName.textContent = data.name;
  pokemonId.textContent = `ID: ${data.id}`;
  pokemonHeight.textContent = `Height: ${data.height / 10} m`;
  pokemonWeight.textContent = `Weight: ${data.weight / 10} kg`;
  pokemonType.textContent = `Type: ${data.types.map(t=>t.type.name).join(', ')}`;
  message.textContent = "";
}

//  fetch function
async function fetchPokemonById(id) {
  showLoading();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) throw new Error("Not found");
    const data = await response.json();
    currentPokemonId = data.id; // Update global for next/prev
    displayPokemon(data);
  } catch (e) {
    showError();
  }
}

// Random fetch
randomBtn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  fetchPokemonById(randomId);
});

// Previous fetch
prevBtn.addEventListener("click", () => {
  if (currentPokemonId && currentPokemonId > 1) {
    fetchPokemonById(currentPokemonId - 1);
  }
});

// Next fetch
nextBtn.addEventListener("click", () => {
  if (currentPokemonId && currentPokemonId < 898) {
    fetchPokemonById(currentPokemonId + 1);
  }
});
//