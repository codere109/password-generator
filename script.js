function generatePassword() {
    console.log("In my generate password function")
    console.log(arr)
    var password = createPassword()
    document.getElementById("textout").value = password
}

function getCharacterTypes() {
    let passwordObject = 
    {specCharacters:["<",">","(", ")","!", "&", "$"], 
    numbers:([0,1,2,3,4,5,6,7,8,9]), 
    letters:(["a","b","c","d","e","f","g","g","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])};
    //manipulate that array to identify other data types to include


    //if my passwordBase is not empty
    if(passwordBase.length > 0){
        return passwordBase
    }
    return getCharacterTypes()
}

function getLength(){
    var passwordLength = prompt("What length do you want your password to be?")
    console.log(passwordLength)
    if(passwordLength > 8 && passwordLength < 128){
        console.log("Condition met!")
        return passwordLength
    }
    if(confirm("Try Again?") == false){
        return "invalid"
    }
    return getLength()
}

function createPassword() {
    var passwordLength = getLength()
    if(passwordLength == "invalid"){
        return "Unable to genereate password"
    }
                         // ===> getLength()
    // passwordLength = eight ---- 10
    console.log(passwordLength, " has been received")

    //var passwordBase = getCharacterTypes()

    var finalizedPassword = ''
    //this string needs to get random letters from the array of options

    return finalizedPassword
}

document.getElementById("start").addEventListener("click", generatePassword)
var arr = ["a", "B", "#", "1", "2", "("]

function getRandomElement(arr) {
    if(arr.length == 0){
        return -1
    } 
    return arr[Math.floor(Math.random() * arr.length)];
}

var randomItem = getRandomElement([34])

if(randomItem == -1){
    console.log("Program is ass")
}


