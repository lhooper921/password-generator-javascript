// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining Arrays (all arrays same length to give equal likelihood of selection)
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '12345678901234567890123456'.split('');
const symbols = '~!@#$%^&*()_+?~!@#$%^&*()_'.split('');


// Confirm password parameters
const useLowerCase = confirm('Do you want to include lower case letters?');
const useUpperCase = confirm('Do you want to include upper case letters?');
const useNumbers = confirm('Do you want to include numbers?');
const useSymbols = confirm('Do you want to include symbols?');

// Check if user has selected at least one parameter
function needParameter() {
    if (useLowerCase ===false && useUpperCase=== false && useSymbols === false && useNumbers == false){
    alert('You must select at least one parameter!');
} else {
    alert('Parameters have been set!');
}
}

// Require user to select length between 8-128

function lengthConfirm() {
    var passwordLength = prompt('How long would you like your password to be? Must be between 8-128 characters');
    if (passwordLength >= 8  && passwordLength <= 128) {
      alert("Your password will be " + passwordLength + " characters!");
      return passwordLength;
    } else {
      alert("Password must be between 8-128 characters!");
    
        lengthConfirm()
    }
  }
 
//   Password Length
let setPasswordLength= lengthConfirm();

let password = [];

if (useLowerCase) {
    for (let i = 0; i < 2; i++) {
        password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    


if (useUpperCase) {
    password = password.concat(upperCase[Math.floor(Math.random() * upperCase.length)]);
}
if (useNumbers) {
    password = password.concat(numbers[Math.floor(Math.random() * numbers.length)]);
}
if (useSymbols) {
    password = password.concat(symbols[Math.floor(Math.random() * symbols.length)]);
}}}

password.length= setPasswordLength;


function shuffle(Array) {
    var currentIndex = Array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = Array[currentIndex];
        Array[currentIndex] = Array[randomIndex];
        Array[randomIndex] = temporaryValue;
    }

    return password;
}


function generatePassword(){
    shuffle (password);
    return password.join('');
}

 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


