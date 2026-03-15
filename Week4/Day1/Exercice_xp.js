


/*
 * Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:
 * https://api.chucknorris.io/jokes/random?category={category}
 * Check out the API Chuck Norris Documentation : https://api.chucknorris.io/
 * Make sure to check the Response status and throw an error accordingly
 * 
 * CzGSZo1WSlDnPNuYklzVWlHWpjgoryj2
 * https://api.giphy.com/v1/gifs/1?api_key=&rating=pg-13
 */

fetch("https://api.giphy.com/v1/gifs/1?api_key=&rating=pg-13")
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
//