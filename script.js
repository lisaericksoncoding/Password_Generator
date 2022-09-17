// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var chooseLength = "";
var chooseNumber;
var chooseCharacter;
var chooseLowercase;
var chooseUppercase;

function generatePassword () {
  var chooseLength = (prompt("How many characters would you like your password to be?"));

  if (chooseLength < 8 || chooseLength > 128) {
    alert("Password must be at least 8 characters but no more than 128 characters. Resubmit.");
    var chooseLength = (prompt("How many characters would you like your password to be?"));
  }

 alert("Great! Now you'll select which characters you'd like your password to contain.")

  var chooseNumber = (confirm("Would you like your password to contain numbers?"));
  var chooseCharacter = (confirm("Would you like your password to contain special characters?"));
  var chooseLowercase  = (confirm("Would you like your password to contain lowercase letters?"));
  var chooseUppercase  = (confirm("Would you like your password to contain uppercase letters?"));

  if ((chooseNumber = false) && (chooseCharacter = false) && (chooseLowercase = false) && (chooseUppercase = false)) ;
  {alert("You must selecct at least one character type.")}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}