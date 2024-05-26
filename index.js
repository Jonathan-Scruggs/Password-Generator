const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
function generateRandomPasswords(){
    let password1 =""
    let password2 = ""
    for (i=0;i < 15;i++){
        characterIndex = Math.floor(Math.random() * characters.length)
        password1 += characters[characterIndex]
    }
    for (i=0;i < 15;i++){
        characterIndex = Math.floor(Math.random() * characters.length)
        password2 += characters[characterIndex]
    }
    password1El.textContent = password1
    password2El.textContent = password2
}


function copyToClipboard(id){
    // Get the text field
    const element = document.getElementById(id);
    const password = element.innerText
    navigator.clipboard.writeText(password) // writing text field to the navigators clipboard
    alert('Password copied to clipboard!'); // Alert to let the user know they copied the password
}