// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';

    var typesCount = lower + upper + number + symbol;

    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (item => Object.values(item)[0]);

    //nothing was selected
    if(typesCount === 0){
        return '';
    }
    
    //create loop
    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
            generatedPassword += randomFunc[funcName]();
        });
    }

    var password = generatedPassword.slice(0, length);
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;

    passwordText.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
});

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Password generator criteria functions
function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = '!@#$%^&*()_+=[],.?'
    return symbols[Math.floor(Math.random() * symbols.length)];
}