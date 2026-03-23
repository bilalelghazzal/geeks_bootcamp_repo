const products = require('./Products.js');

function findProductByName(productName) {
  return products.find(p => p.name.toLowerCase() === productName.toLowerCase());
}

const namesToSearch = ['Wireless Headphones', 'Yoga Mat', 'Nonexistent Product'];

namesToSearch.forEach(name => {
  const product = findProductByName(name);
  if (product) {
    console.log(`Found: ${product.name} - $${product.price} [${product.category}]`);
  } else {
    console.log(`Product "${name}" not found.`);
  }
});
