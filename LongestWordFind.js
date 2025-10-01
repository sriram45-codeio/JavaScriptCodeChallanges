function Longest(sentence)
{
   let words= sentence.split(" ")
   let longestWord=''

   for(const word of words){
    if(word.length>longestWord.length){
        longestWord=word

    }
   }
         return longestWord
}

console.log(Longest("Who is the prime minister of India - Modi "))