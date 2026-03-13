function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.every(word => typeof word === "string")) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Not all elements are strings");
        }
    });
}

function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(uppercasedWords) && uppercasedWords.length > 4) {
            resolve([...uppercasedWords].sort());
        } else {
            reject("Array length is not greater than 4");
        }
    });
}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))


// challenge 2 

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

// First function: toJs
function toJs(morse) {
  return new Promise((resolve, reject) => {
    if (!morse || morse.trim() === "") {
      reject("Input is empty");
      return;
    }
    let morseObj;
    morseObj = JSON.parse(morse);
    resolve(morseObj);
} ) }  ;


const morseJS=toJs(morse);
// Second function: toMorse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    // Use prompt to get user input (works in browser)
    let inputStr = prompt("Enter a word or sentence").toLowerCase();
    let morseArr = [];

    for (const char of inputStr) {
      if (!(char in morseJS)) {
        reject(`Character '${char}' does not exist in the Morse object`);
        return;
      } else {
        morseArr.push(morseJS[char]);
      }
    }
    resolve(morseArr);
  });
}
/*
function joinWords(morseTranslation) {
  // Join each Morse code with a line break
  const morseString = morseTranslation.join('<br>');
  // Find or create a container to display the result
  let outputDiv = document.getElementById('morse-output');
  if (!outputDiv) {
    outputDiv = document.createElement('div');
    outputDiv.id = 'morse-output';
    // Optional: Style the output for visibility
    outputDiv.style.marginTop = '1em';
    outputDiv.style.fontFamily = 'monospace';
    document.body.appendChild(outputDiv);
  }
  // Display the Morse code, preserving line breaks
  outputDiv.innerHTML = morseString;
}
*/

// Third function
function startMorseChallenge() {
  toJs(morse)
    .then((morseObj) => {
      return toMorse(morseObj);
    })
    .then((morseArray) => {
      console.log("Morse translation:", morseArray);
      alert("Morse translation:\n" + morseArray.join(" "));
    })
    .catch((error) => {
      console.log("Error:", error);
      alert(error);
    });
}

// startMorseChallenge();

