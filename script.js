// Assignment code here

//random number generator to pick from array of password settings.
var randomNumber = function () {
  var value = Math.floor(Math.random() * 92);
  return value;
}

var lowercaseset = "a b c d e f g h i j k l m n o p q r s t u v w x y z ";
var uppercaseset = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ";
var numericset = "0 1 2 3 4 5 6 7 8 9 ";
var specialset = "! @ # $ % ^ & * ( ) _ + { } | : - = [ ] ; ' , . / < > ? ~ ";

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
    return passwordlength;
  }
}

//lowercase included in password question
var lower = function () {
  var passwordlowercase = window.confirm("Would you like to include LOWERCASE characters?");
  if (passwordlowercase) {
    console.log("lowercase: " + passwordlowercase);
    return lowercaseset;
  }
  else {
    console.log("lowercase: " + passwordlowercase);
    return "";
  }
}

//uppercase included in password question
var upper = function () {
  var passworduppercase = window.confirm("Would you like to include UPPERCASE characters?");
  if (passworduppercase) {
    console.log("uppercase: " + passworduppercase);
    return uppercaseset;
  }
  else {
    console.log("uppercase: " + passworduppercase);
    return "";
  }
}

//numeric character(s) included in password question
var numeric = function () {
  var passwordnumeric = window.confirm("Would you like to include any NUMERIC characters?");
  if (passwordnumeric) {
    console.log("numeric: " + passwordnumeric);
    return numericset;
  }
  else {
    console.log("numeric: " + passwordnumeric);
    return "";
  }
}

//special character(s) included in password question
var special = function () {
  var passwordspecial = window.confirm("Would you like to include any SPECIAL characters?");
  if (passwordspecial) {
    console.log("special: " + passwordspecial);
    return specialset;
  }
  else {
    console.log("special: " + passwordspecial);
    return "";
  }
}

var charactertypeprompts = function () {
  var passcharacters = lower() + upper() + numeric() + special();

  if (passcharacters === null || passcharacters === "" || passcharacters === NaN) {
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
  //obtain characters based on user preference
  var charcters = charactertypeprompts();
  //make characters into an array
  var myArray = charcters.split(" ");

  //randomize numbers from array
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  var shuffledMyArray = myArray;
  shuffle(shuffledMyArray);

  //get characters for length requested by user
  const list = shuffledMyArray;
  const size = passwordlength;
  const items = list.slice(0, size);
  passwordstring = items.join("");
  return passwordstring
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