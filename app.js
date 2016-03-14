// Declare email as a variable
var email = "email@example.com"

// TODO grab email from form

// ID of the script to call
var scriptId = "MpEbwf3hcMJ2E9_iuITsDyXYhgBnRnQ1X";

// Create execution request.
var request = {
    'function': 'addEmail',
    'parameters': email
    // ,'devMode': true   // Optional.
};

// Make the request.
var op = gapi.client.request({
    'root': 'https://script.googleapis.com',
    'path': 'v1/scripts/' + scriptId + ':run',
    'method': 'POST',
    'body': request
});

// Log the results of the request.
op.execute(function(resp) {
  if (resp.error && resp.error.status) {
    // The API encountered a problem before the script started executing.
    console.log('Error calling API: ' + JSON.stringify(resp, null, 2));
  } else if (resp.error) {
    // The API executed, but the script returned an error.
    var error = resp.error.details[0];
    console.log('Script error! Message: ' + error.errorMessage);
  } else {
    // Here, the function returns an array of strings.
    var sheetNames = resp.response.result;
    console.log('Sheet names in spreadsheet:');
    sheetNames.forEach(function(name){
      console.log(name);
    });
  }
});