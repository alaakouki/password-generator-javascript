
var generateBtn = document.querySelector("#generate");


var passLength; // should be between 8 - 128 characters only.
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ['`', "!", '~', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '|', '\\', ';', ':', '"', ',', '<', '.', '>', '/', '?'];

var uppercaseConfirmed;
var lowercaseConfirmed;
var numbersConfirmed;
var specialCharConfirmed;
var userDecision;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

// get information required from user
// ask user to advise us how many characters want?
passLength = prompt("Please enter how many characters you want the password to be ? Must be between 8 - 128 characters only");
console.log("Password length choosen: " + passLength);

// stop the transaction if user keep it empty
if (!passLength) {
  alert("Please advise how many characters to generate password");
  return;

}

if (passLength < 8 || passLength > 128) {
  window.alert("only allowed to be between 8 - 128 characters only.");
  passLength = prompt("Please advise again. please choose between 8 - 128 characters only.");
  console.log("Password length choosen: " + passLength);
  } else {
    uppercaseConfirmed = confirm("Would you like the password to be include uppercase ?");
    console.log("Uppercase include confirmed ? " + uppercaseConfirmed);
    lowercaseConfirmed = confirm("Would you like the password to be include lowercase ?");
    console.log("Lowercase include confirmed ? " + lowercaseConfirmed);
    numbersConfirmed = confirm("Would you like the password to be include numbers ?");
    console.log("Numbers include confirmed ? " + numbersConfirmed);
    specialCharConfirmed = confirm("Would you like the password to be include special characters ?");
    console.log("Special characters include confirmed ? " + specialCharConfirmed);
    }

// if user choose all the options or none of them
if (!uppercaseConfirmed && !lowercaseConfirmed && !numbersConfirmed && !specialCharConfirmed){
alert("Can't generate, you should choose at least one option");


uppercaseConfirmed = confirm("Would you like the password to be include uppercase ?");
console.log("Uppercase include confirmed ? " + uppercaseConfirmed);
lowercaseConfirmed = confirm("Would you like the password to be include lowercase ?");
console.log("Lowercase include confirmed ? " + lowercaseConfirmed);
numbersConfirmed = confirm("Would you like the password to be include numbers ?");
console.log("Numbers include confirmed ? " + numbersConfirmed);
specialCharConfirmed = confirm("Would you like the password to be include special characters ?");
console.log("Special characters include confirmed ? " + specialCharConfirmed);
}


if (uppercaseConfirmed && lowercaseConfirmed && numbersConfirmed && specialCharConfirmed) {
userDecision = upperCase.concat(lowerCase, numbers, specialChar);
console.log(userDecision);
}

// Choosen 3 of 4 options

else if (uppercaseConfirmed && lowercaseConfirmed && numbersConfirmed) {
userDecision = upperCase.concat(lowerCase, numbers);
console.log(userDecision);
} else if (uppercaseConfirmed && lowercaseConfirmed && specialCharConfirmed) {
userDecision = upperCase.concat(lowerCase, specialChar);
} else if (uppercaseConfirmed && numbersConfirmed && specialCharConfirmed) {
userDecision = upperCase.concat(numbers, specialChar);
console.log(userDecision);
} else if (lowercaseConfirmed && numbersConfirmed && specialCharConfirmed) {
userDecision = lowerCase.concat(numbers, specialChar);
console.log(userDecision);
}

// Choosen 2 of 4 options

else if (uppercaseConfirmed && lowercaseConfirmed ) {
  userDecision = upperCase.concat(lowerCase);
  console.log(userDecision);
    } else if (uppercaseConfirmed && numbersConfirmed) {
      userDecision = upperCase.concat(numbers);
      console.log(userDecision);
    } else if (uppercaseConfirmed && specialCharConfirmed) {
      userDecision = upperCase.concat(specialChar);
      console.log(userDecision);
    } else if (lowercaseConfirmed && numbersConfirmed) {
      userDecision = lowerCase.concat(numbers);
      console.log(userDecision);
    } else if (lowercaseConfirmed && specialCharConfirmed) {
      userDecision = lowerCase.concat(specialChar);
      console.log(userDecision);
    } else if (numbersConfirmed && specialCharConfirmed) {
      userDecision = numbers.concat(specialChar);
      console.log(userDecision);
    }

// Choosen 1 option only

else if (uppercaseConfirmed) {
userDecision = upperCase;
console.log(userDecision);
} else if (lowercaseConfirmed) {
userDecision = lowerCase;
console.log(userDecision);
} else if (numbersConfirmed) {
userDecision = numbers;
console.log(userDecision);
} else if (specialCharConfirmed) {
  userDecision = specialChar;
  console.log(userDecision);
}


var passSpace = []; // variable to store all of our passwords
for(var i = 0; i < passLength; i++) {
  var passCharacters = userDecision[Math.floor(Math.random() * userDecision.length)];
  passSpace.push(passCharacters);
  console.log(passCharacters);
}

var password = passSpace.join("");
console.log("password generated is: " + password);
return password;

}