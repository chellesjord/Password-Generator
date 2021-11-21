// Assignment code here

//random number generator to pick from array of password settings.
var randomNumber = function () {
  var value = Math.floor(Math.random() * 4);
  return value;
}

var lowercaseset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericset = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialset = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "_", "~", "+"];

//password length question
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
    return passwordlength
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
    return passwordnumeric;
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
    return passwordspecial;
  }
  else {
    console.log("special: " + passwordspecial);
    window.alert("You have chosen NOT to include SPECIAL characters in your password.");
    return false;
  }
}

var questions = function () {
  var passcharacters = [lower(), upper(), numeric(), special()];
  //not working but why
  if (lower === false && upper === false && numeric === false && special === false) {
    window.alert("You have not chosen any characters for your password. Please try again.");
    generatePassword();
  }
  else {
    window.alert("Thank you for your selections. Your password is being generated...");
  }

  return passcharacters;
}

function generatePassword() {
  //function for prompts for password criteria start
  var passwordlength = length();
  var charctercheck = questions();
  console.log(charctercheck);
  for (var i = 0; i < passwordlength; i++) {
    console.log("apple");
  }
  //console.log(passwordlength);
  //figure out a way to loop for that password length
  //console.log(charctercheck);
  //make a randomizer, to pick a number in the array,
  // if the number in array is false, pick another number;
}

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
