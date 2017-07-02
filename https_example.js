var https = require ('https');

var options = {
  host: "www.example.org",
  path: "/"
}

// called by https when request is made

callback = function(response) {
  console.log('in Response handler callback!') //This is basically called when the request has been completed.
  console.log("Response: ",response);
};

console.log("I'm about to make a request");

https.request(options, callback).end();

console.log("I've made the request");