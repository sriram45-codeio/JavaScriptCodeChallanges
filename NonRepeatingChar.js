function Repeating(str){
    let obj={}

    for(let char of str){
        if(obj[char]){
            obj[char]++
        }
        else{
            obj[char]=1
        }
    }

    for (let char of str){
        if(obj[char]==1){
            return char
        }
    }

    return null
}



console.log(Repeating("swiss"))