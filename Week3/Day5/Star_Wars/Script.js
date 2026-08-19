const h1 = document.getElementById("name");
const pId = document.getElementById("ids");
const pHeight = document.getElementById("height");
const pGender = document.getElementById("gender");
const pBirthYear = document.getElementById("birth-year");
const pHomeWorld = document.getElementById("home-world");
// button 
const btn = document.getElementById("btn");

// Clear all text fields
function clearFields(message = "") {
    h1.textContent = message;
    pId.textContent = "";
    pHeight.textContent = "";
    pGender.textContent = "";
    pBirthYear.textContent = "";
    pHomeWorld.textContent = "";
}

// Fetch & update UI with a random or specified Star Wars character
async function getData(characterId) {
    // Get a random id if none is provided, avoiding 17 (missing), and 83 (does not exist)
    let id;
    if (characterId) {
        id = characterId;
    } else {
        // 1 to 83, but 17 is missing in SWAPI people list
        do {
            id = Math.floor(Math.random() * 83) + 1;
        } while (id === 17); // skip 17
    }

    try {
        const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();

        if (!data.result || !data.result.properties) {
            clearFields("Not found!");
            return;
        }

        const person = data.result.properties;
        h1.textContent = person.name;
        pId.textContent = `ID: ${id}`;
        pGender.textContent = `Gender: ${person.gender}`;
        pHeight.textContent = `Height: ${person.height}`;
        pBirthYear.textContent = `Birth Year: ${person.birth_year}`;

        // Fetch homeworld name if URL exists and is not empty
        if (person.homeworld) {
            try {
                const homeRes = await fetch(person.homeworld);
                if (!homeRes.ok) throw new Error();
                const worldData = await homeRes.json();
                if (worldData.result && worldData.result.properties && worldData.result.properties.name) {
                    pHomeWorld.textContent = `Home World: ${worldData.result.properties.name}`;
                } else {
                    pHomeWorld.textContent = "Home World: Unknown";
                }
            } catch {
                pHomeWorld.textContent = "Home World: Unknown";
            }
        } else {
            pHomeWorld.textContent = "Home World: Unknown";
        }
    } catch (err) {
        clearFields("Error retrieving data.");
    }
}

btn.addEventListener("click", () => getData());
