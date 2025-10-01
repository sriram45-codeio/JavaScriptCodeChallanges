function palindrome(str) {
    str = str.toLowerCase()

    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {

        result = result + str[i]

    }

    return str === result;
}


console.log(palindrome("MAdam"))



let firstName="level"

let newResult= firstName.split("").reverse().join("")

if(firstName===newResult){
    console.log(`${firstName} is palindrome`);
    
}
else{
   console.log(`${firstName} is not a palindrome`);
}


