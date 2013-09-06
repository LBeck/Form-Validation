// - The email conforms to the standard pattern
function validateEmail() {

	var email = document.sign_up.email.value;
	var at_position =email.indexOf("@");
	var dot_position = email.lastIndexOf(".");
	// debugger

	 // the @ must not be the first character of the email address, and the last dot must be present after the @ sign, and minimum 2 characters before the end:
	 if (email != ""){

	 	if (at_position < 1 || dot_position < at_position + 2 || dot_position + 2 >= email.length) {
	 		alert("Please enter a valid email address")
	 		return false;
	 	}
	 }
	 return true;
	}

// The password has at least 8 characters
function validatePassword() {

	var password = document.sign_up.password.value;
	if (password != ""){
		if (password.length < 8){
			alert("Error: Your password must contain at least 8 characters!");
			return false;
		}

 // The password has at least one capital letter
 var regex = / *[A-Z]+.*/;
 if (!regex.test(password.value)){
 	alert("Error: Your password must contain at least one capital letter");
 	return false;
 }

 // The password has at least one numeric character
 var regex = /.*\d+.*/
 if(!regex.test(password.value)){
 	alert("Error: Your password must have at least one numeric character");
 	return false;
 }
}
return true;

}


// shorthand for $(document).ready();
$(function(){

// here we're delegating. JS is listening for the 'submit' event on the 'sign-up' form
// if it's on the page. In dynamic pages, the sign-up form might only appear when the user
// clicks a certain tab or enters a particular option. Therefore, we grab the element that's
// the next higher level up (namely, the body) to ensure that the function will be called
// when submit IS clicked (or the user presses the 'enter' key)
$('body').on("submit", "#sign-up", function(e){

 	// 'e.preventDefault()' prevents the document from reloading when submit is clicked.
 	e.preventDefault();

	// serializing allows us to see the data that's passed into the form and that the browser grabs
	// this set of statements returns an array object whose elements are strings of data
	data = $(this).serializeArray();
	console.log(data);

	validateEmail();
	validatePassword();
});

});