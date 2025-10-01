function reverseNum(num){
    let rev = 0;

    while(num>0){
        let lastdig = num % 10;
        rev = rev * 10 + lastdig;
        num = Math.floor(num/10)
    }
    return rev

}
const number=98765

console.log(reverseNum(number));
