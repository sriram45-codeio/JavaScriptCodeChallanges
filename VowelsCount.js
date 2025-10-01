function VowelCount(words){

   let vowels='aeiouAEIOU';
   let vowelcounts=0;
   let consonontCount=0;

   for(let char of words)
   {

    let code = char.charCodeAt(0)

         if((code>=65 && code<=90) || (code>=97 && code<=122)){



            if(vowels.includes(char)){
                vowelcounts++
            }
            else{
                consonontCount++
            }
         }


}

            return `Vowels ${vowelcounts} and Consonants  ${consonontCount}  removed symbols and numbers`
}


let sentence = "Hello Bro I am a Noob!"


console.log(VowelCount(sentence))