const scrape = require('./../index.js');
const product = scrape('32868624226');

product.then(res => {
  console.log('The JSON: ', res);
});