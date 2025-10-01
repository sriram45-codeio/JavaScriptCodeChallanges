let myName= "Thalapathy";

function reverse(str){
    let result=""
    for(let i=str.length-1; i>=0;i--){
        result +=str[i]

    }
    return result;
}


let finalResult=reverse(myName)
console.log(finalResult);





let arrResult = myName.split('').reverse().join("")
console.log(arrResult);