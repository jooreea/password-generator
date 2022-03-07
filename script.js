// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set constant values
const upperCaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const integerNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialCharacter = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'] 

// Password generating function
function generatePassword() {
  //initialize arrays
  var passwordLength = prompt("How many characters would you like your password to be?", 8);
  var requiredArrays = [];
  var requiredCharacters = [];
  // collect required characters and arrays
  if (confirm("Do you want upper case letters in your password?")) {
    for(let i = 0; i < upperCaseAlphabet.length; i++) {
      requiredArrays.push(upperCaseAlphabet[i]);
    };
    requiredCharacters.push(upperCaseAlphabet[Math.floor(Math.random()*upperCaseAlphabet.length)]); 
  };
  if (confirm("Do you want lower case letters in your password?")) {
    for(let i = 0; i < lowerCaseAlphabet.length; i++) {
      requiredArrays.push(lowerCaseAlphabet[i]);
    };
    requiredCharacters.push(lowerCaseAlphabet[Math.floor(Math.random()*lowerCaseAlphabet.length)]);
  };
  if (confirm("Do you want numbers in your password?")) {
    for(let i = 0; i < integerNumber.length; i++) {
      requiredArrays.push(integerNumber[i]);
    };
    requiredCharacters.push(integerNumber[Math.floor(Math.random()*integerNumber.length)]);
  };
  if (confirm("Do you want special characters in your password?")) {
    for(let i = 0; i < specialCharacter.length; i++) {
      requiredArrays.push(specialCharacter[i]);
    };
    requiredCharacters.push(specialCharacter[Math.floor(Math.random()*specialCharacter.length)]); 
  };

  console.log(requiredArrays);
  console.log(requiredCharacters);
  //Get length of characters still needed
  var remainingLength = passwordLength - requiredCharacters.length;
  console.log(remainingLength);
  //Append remaining characters
  for (i = 0; i < remainingLength; i++) {
    requiredCharacters.push(requiredArrays[Math.floor(Math.random()*requiredArrays.length)]); 
  };
  console.log(requiredCharacters);
  //Shuffle order of password characters
  for (let i = requiredCharacters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [requiredCharacters[i], requiredCharacters[j]] = [requiredCharacters[j], requiredCharacters[i]];
  };
  console.log(requiredCharacters);
  //Join array to string and write
  return requiredCharacters.join("")
};