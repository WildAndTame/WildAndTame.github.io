// Declare email as a variable
var email = "email@example.com";

// TODO grab email from form

// URL of the web app to POST
var url = "https://script.google.com/macros/s/AKfycbzkTSD_-TPK6gWSL4MD9AQuMBwR7T-R2mb6lXz56SV5D3mvHFs/exec";

$.post( url, email);

var userEmail = $( "#email" ).serialize();


function function_name(userEmail) {
    alert(userEmail);
    // $.post( url, userEmail);
}
