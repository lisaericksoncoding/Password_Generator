// Set variables
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomCombo = []

var chooseLength = "";
var chooseNumber;
var chooseCharacter;
var chooseLowercase;
var chooseUppercase;

function getOptions() {
  var chooseLength = (prompt("How many characters would you like your password to be?"));

  if (chooseLength < 8 || chooseLength > 128) {
    alert("Password must be at least 8 characters but no more than 128 characters. Please re-submit.");
    var chooseLength = (prompt("How many characters would you like your password to be?"));
  }

  alert("Great! Now you'll select which characters you'd like your password to contain.")

  var chooseNumber = (confirm("Would you like your password to contain numbers? If yes, click OK"));
  var chooseCharacter = (confirm("Would you like your password to contain special characters? If yes, click OK"));
  var chooseLowercase = (confirm("Would you like your password to contain lowercase letters? If yes, click OK"));
  var chooseUppercase = (confirm("Would you like your password to contain uppercase letters? If yes, click OK"));

  if ((chooseNumber == false) && (chooseCharacter == false) && (chooseLowercase == false) && (chooseUppercase == false)) {
    alert("You must select at least one character type.")

    var chooseNumber = (confirm("Would you like your password to contain numbers? If yes, click OK"));
    var chooseCharacter = (confirm("Would you like your password to contain special characters? If yes, click OK"));
    var chooseLowercase = (confirm("Would you like your password to contain lowercase letters? If yes, click OK"));
    var chooseUppercase = (confirm("Would you like your password to contain uppercase letters? If yes, click OK"));
  }
  var passwordOptions = { length: chooseLength, number: chooseNumber, specialCharacter: chooseCharacter, lowerCase: chooseLowercase, uppercase: chooseUppercase };
  return passwordOptions
}

function generatePassword() {
  var passwordOptions = getOptions()
  var possibleCharatacters = []
  var selectedCharacters = []
  if (passwordOptions.number) {
    possibleCharatacters = possibleCharatacters.concat(number)
  }
  if (passwordOptions.specialCharacter) {
    possibleCharatacters = possibleCharatacters.concat(character)
  }
  if (passwordOptions.lowerCase) {
    possibleCharatacters = possibleCharatacters.concat(lowercase)
  }
  if (passwordOptions.uppercase) {
    possibleCharatacters = possibleCharatacters.concat(uppercase)
  }
  for (let i = 0; i < passwordOptions.length; i++) {
    var randomPasswordCharacter = possibleCharatacters[Math.floor(Math.random() * possibleCharatacters.length)];
    selectedCharacters.push(randomPasswordCharacter)
  }
  return selectedCharacters.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


