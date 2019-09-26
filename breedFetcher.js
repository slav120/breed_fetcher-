const request = require('request');
const breed = process.argv[2]
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
  const data = JSON.parse(body);
  const breedDescription = data[0] 
  //console.log(breedDescription.description)
  
 // if (error = null){
  //return
  //}
   if (breedDescription == null  ) {
    console.log('error here')
  }
  else {console.log(breedDescription.description)
  } 
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});


//const request = require('request');
//request('https://api.thecatapi.com/v1/breeds/search?q=sib', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
//});