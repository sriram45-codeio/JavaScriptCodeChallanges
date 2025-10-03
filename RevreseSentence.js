function reverseSentence(words){

  words=  words.split(" ")
  .map(val=>val.split("").reverse().join(""))
  .join(" ")

   let result=""
  for(let i=words.length-1;i>=0;i--){
        result= result+words[i]
  }

  return result

}

let sentence = "I love JavaScript Always!"

console.log(reverseSentence(sentence))