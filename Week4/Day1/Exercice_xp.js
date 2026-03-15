

/*
 * Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:
 * https://api.chucknorris.io/jokes/random?category={category}
 * Check out the API Chuck Norris Documentation : https://api.chucknorris.io/
 * Make sure to check the Response status and throw an error accordingly
 * 
 * CzGSZo1WSlDnPNuYklzVWlHWpjgoryj2
 * https://api.giphy.com/v1/gifs/1?api_key=&rating=pg-13
 */

async function getData() {
    const url = "https://api.giphy.com/v1/gifs/1?api_key=&rating=pg-13"; 
    try {
      const response = await fetch(url); // by default fetch make get method . 
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }

