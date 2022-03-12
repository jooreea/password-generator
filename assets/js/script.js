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
  // prompt user for password length and restrict to numbers, >= 8, <= 128
  var passwordLength = prompt("How many characters would you like your password to be?", 8);
  
  // recurse if entry does not meet criteria
  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    if (isNaN(passwordLength)) {
      alert("Please enter a number.");
    } else if (passwordLength < 8) {
      alert("Your password must be at least 8 characters.");
    } else if (passwordLength > 128) {
      alert("Your password must not exceed 128 characters.");
    }
    passwordLength = prompt("How many characters would you like your password to be?", 8);
  };
  
  // function to generate characters
  function generatePasswordCharacters() {
    // initialize arrays
    var requiredPasswordTypes = [];
    var requiredPasswordCharacters = [];
    
    // collect required characters and arrays based on user choices
    var useUpperCaseAlphabet = confirm("Do you want upper case letters in your password?");
    if (useUpperCaseAlphabet) {
      requiredPasswordTypes = requiredPasswordTypes.concat(upperCaseAlphabet);
      requiredPasswordCharacters.push(upperCaseAlphabet[Math.floor(Math.random()*upperCaseAlphabet.length)]); 
    };
    var useLowerCaseAlphabet = confirm("Do you want lower case letters in your password?");
    if (useLowerCaseAlphabet) {
      requiredPasswordTypes = requiredPasswordTypes.concat(lowerCaseAlphabet);
      requiredPasswordCharacters.push(lowerCaseAlphabet[Math.floor(Math.random()*lowerCaseAlphabet.length)]);
    };
    var useIntegerNumber = confirm("Do you want numbers in your password?");
    if (useIntegerNumber) {
      requiredPasswordTypes = requiredPasswordTypes.concat(integerNumber);
      requiredPasswordCharacters.push(integerNumber[Math.floor(Math.random()*integerNumber.length)]);
    };
    var useSpecialCharacter = confirm("Do you want special characters in your password?");
    if (useSpecialCharacter) {
      requiredPasswordTypes = requiredPasswordTypes.concat(specialCharacter);
      requiredPasswordCharacters.push(specialCharacter[Math.floor(Math.random()*specialCharacter.length)]); 
    };
    
    // recurse if no character types are selected
    while (!useUpperCaseAlphabet &&  !useLowerCaseAlphabet && !useIntegerNumber && !useSpecialCharacter) {
      alert("You must select at least 1 character type.");
      return generatePasswordCharacters();
    };
    
    // get length of characters still needed
    var remainingLength = passwordLength - requiredPasswordCharacters.length;
    
    // append remaining characters
    for (let i = 0; i < remainingLength; i++) {
      requiredPasswordCharacters.push(requiredPasswordTypes[Math.floor(Math.random()*requiredPasswordTypes.length)]); 
    };
    
    // shuffle order of password characters
    for (let i = requiredPasswordCharacters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [requiredPasswordCharacters[i], requiredPasswordCharacters[j]] = [requiredPasswordCharacters[j], requiredPasswordCharacters[i]];
    };
    return requiredPasswordCharacters 
  };

  // call function to generate character pool
  var passwordCharacters = generatePasswordCharacters();

  // merge array into single string and write
  return passwordCharacters.join("")
};