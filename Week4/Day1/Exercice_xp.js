//EXerc 1 : 
fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=24jHidEC5k20mIfR0VHWpgmPwXE1QyWz")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });


// Exercice 2 

/**
 * Read carefully the documention to understand all the possible queries that the URL accept.
 * Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
 * Make sure to check the status of the Response and to catch any occuring errors.
 * Console.log the Javascript Object that you receive.
 */
fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&api_key=24jHidEC5k20mIfR0VHWpgmPwXE1QyWz")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });




// Exercice 3 


/**
 * Create an async function, that will await for the above GET request.
 * The program shouldn’t contain any then() method.
Make sure to check the status of the Response and to catch any occuring errors.
 */
async function name() {
  try {
    const response= await fetch("https://www.swapi.tech/api/starships/9/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}



// Exercice 4 
function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved'); 
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');  
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall(); 
/**
 * the output will be :
 * calling 
 * after two second display : resolved.
 */
