// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomLowercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function randomUppercase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function randomSymbol(){
  const symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random()* symbols.length)];
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(randomNumber());