var https = require ('https');

var options = {
  host: "www.example.org",
  path: "/"
}

// called by https when request is made

callback = function(response) {
  console.log('in Response handler callback!') //This is basically called when the request has been completed.

  response.on('data', function(chunk){ //don't forget to define what you want the callback to run on.
    console.log("-- CHUNK LENGTH " + chunk.length + " --") //shows the length of the chunk I'm trying to get
    console.log(chunk.toString()); //Turns the chunk into a string and outputs.
  })
// console.log("Response: ",response); // This is used to actually LOG the response. This is actually a stream.
};

console.log("I'm about to make a request");

https.request(options, callback).end();

console.log("I've made the request");