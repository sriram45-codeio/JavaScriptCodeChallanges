function WordFreq(words){
    let obj={}

  words = words.split(" ")

    for(let word of words){
        if(obj[word]){
            obj[word]++
        }
        else{
            obj[word]=1
        }
    }
    return obj

}


const sentence = "India is the largest population in the world arround 1.4 billion "
console.log(WordFreq(sentence))