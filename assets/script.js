// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ----------------------// variables to populate the password //-----------------------------

 var upperArray= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var number = ["1","2","3","4","5","6","7","8","9","0"];
 var specialChar = ["~","!","@","#","$","%","&" ];


 function generatePassword() {

 
  
  //confirm user specified conditions for the password
  var howManyChars = prompt("Choose a password length between 8 and 128 characters");
  var wantUppercase = confirm("Do you want to use uppercase characters?");
  var wantLowercase = confirm("Do you want to use lowercase characters?");
  var wantNumeric = confirm("Do you want to use numeric characters??");
  var specialCharacter = confirm("Do you want to use special characters?");
  
  
  

  // clear storage to populate var
  var storage = [];
  var result = "";

  // alert if password length does not meet criteria 
  function getLength(x){
    if(x >= 8 && x <= 128){
      return x;
    }else{
      alert("Enter a number between 8 and 128");
      return null;
    }
  }

  //store the length of password
  var passwordLength = parseInt(getLength(howManyChars));

  //combines arrays into storage
  if(wantLowercase){
    storage = storage.concat(lowerArray);
  }

  if(specialCharacter){
    storage = storage.concat(specialChar);
  }

  if(wantUppercase){
    storage = storage.concat(upperArray);
  }

  if(wantNumeric){
    storage = storage.concat(number);
  }

  //run loop and display password
  for(var i = 0; i <= passwordLength; i++){
      result = result + storage[Math.floor(Math.random()*storage.length)];   
  }
  
  return result;
   
}


