function Occurence(str){
         str = str.toLowerCase().replaceAll(" ","")
        let obj={}
        for(let i=0;i<str.length;i++){
            if(obj[str[i]]){
                obj[str[i]]++
            }
            else{
            obj[str[i]]=1
        }
        }
        return obj

}



console.log(Occurence("Aa Bb Cc"));
