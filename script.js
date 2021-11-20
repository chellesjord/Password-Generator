// Assignment code here
//password length question
//need to set parameters to numeric values
var length = function () {
  var passwordlength = window.prompt("Choose your password character LENGTH by typing a number between 8 and 128.");

  //answer validation
  if (passwordlength === "" || passwordlength === null) {
    window.alert("You need to provide a valid answer. Please try again.")
    length();
  }
  else if (passwordlength < 8 || passwordlength > 128) {
    window.alert("You need to provide a valid answer. Please try again.")
    length();

  }
  else {
    //console.log and alert for password length
    console.log("Password length: " + passwordlength);
    window.alert("You have chosen a password LENGTH of " + passwordlength + " characters long.");
  }
}

//lowercase included in password question
var lower = function () {
  var passwordlowercase = window.confirm("Would you like to include LOWERCASE characters?");
  if (passwordlowercase) {
    console.log("lowercase: " + passwordlowercase);
    window.alert("You have chosen to include LOWERCASE characters in your password.");
    return passwordlowercase;
  }
  else {
    console.log("lowercase: " + passwordlowercase);
    window.alert("You have chosen NOT to include LOWERCASE characters in your password.");
    return false;
  }
}

//uppercase included in password question
var upper = function () {
  var passworduppercase = window.confirm("Would you like to include UPPERCASE characters?");
  if (passworduppercase) {
    console.log("uppercase: " + passworduppercase);
    window.alert("You have chosen to include UPPERCASE characters in your password.");
    return passworduppercase;
  }
  else {
    console.log("uppercase: " + passworduppercase);
    window.alert("You have chosen NOT to include UPPERCASE characters in your password.");
    return false;
  }
}

//numeric character(s) included in password question
var numeric = function () {
  var passwordnumeric = window.confirm("Would you like to include any NUMERIC characters?");
  if (passwordnumeric) {
    console.log("numeric: " + passwordnumeric);
    window.alert("You have chosen to include NUMERIC characters in your password.");
    return numeric;
  }
  else {
    console.log("numeric: " + passwordnumeric);
    window.alert("You have chosen NOT to include NUMERIC characters in your password.");
    return false;
  }
}

//special character(s) included in password question
var special = function () {
  var passwordspecial = window.confirm("Would you like to include any SPECIAL characters?");
  if (passwordspecial) {
    console.log("special: " + passwordspecial);
    window.alert("You have chosen to include SPECIAL characters in your password.");
    return special;
  }
  else {
    console.log("special: " + passwordspecial);
    window.alert("You have chosen NOT to include SPECIAL characters in your password.");
    return false;
  }
}

//when 'generate password' button is clicked, 
//function for prompts for password criteria start
function generatePassword() {
  length();
  lower();
  upper();
  numeric();
  special();
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
