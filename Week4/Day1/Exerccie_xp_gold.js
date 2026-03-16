//24jHidEC5k20mIfR0VHWpgmPwXE1QyWz
fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  if (data.data && data.data.length > 0) {
    // pick index of random gif 
    const randomIndex = Math.floor(Math.random() * data.data.length);
    // url of the gif 
    const gifUrl = data.data[randomIndex].images.original.url;

    // Create an image element and append it to the body
    const img = document.createElement('img');
    // source 
    img.src = gifUrl;
    // name of gif :  random
    img.alt = 'Random gif';
    // add it to body of html 
    document.body.appendChild(img);
  } else {

    console.log('No GIFs found.');
  }
})
.catch(error => {
  console.error('Fetch error:', error);
});

// Exercice 2 : 
let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("slow");
          console.log("slow promise is done");
      }, 2000);
  });
}; 


let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("fast");
          console.log("fast promise is done");
      }, 1000);
  });
}; 


let sequentialStart = async function () {
  console.log('==SEQUENTIAL START==');
  const slow = await resolveAfter2Seconds();
  console.log(slow);
  const fast = await resolveAfter1Second();
  console.log(fast);
}

sequentialStart()

// output : 

/**
 * ==SEQUENTIAL START==
starting slow promise
slow promise is done
slow
starting fast promise
fast promise is done
fast
 */


/*==== Exercice 3 =====  * / 

//  output is : 
/*
 * ==CONCURRENT START with await==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
slow
fast
*/

// Exerccie 4  : 

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];
const getData = async function() {
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        return await resp.json();
      })
    );
    const [users, posts, albums] = results;
  
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log("ooooooops");
  }
}

getData()

/**
 * const getdata2= async function() {
  urls.forEach(url => {
    const response = await fetch(url);
  const data= await response.json();
  })
}
 */



