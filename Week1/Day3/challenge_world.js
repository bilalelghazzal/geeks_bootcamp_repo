// Step 1 
let input = prompt("Enter words separated by commas:");

// Step 2 
let words=input.split('').map(word => word.trim());

// Step 3 
let longest = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }


// Step 4 
let border = '*' + '*'.repeat(longest + 2) + '*';

console.log(border);
for (let i = 0; i < words.length; i++) {
  console.log('* ' + words[i].padEnd(longest) + ' *');
}
console.log(border);
