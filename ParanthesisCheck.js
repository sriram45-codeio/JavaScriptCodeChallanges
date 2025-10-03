function Paranthesis(str) {
    if(str.length===0)return false
    let stack= []

    for(let char of str){
        if(char === "("){
           
            stack.push(char)
        }
        else{

             if(stack.length===0){
                return false
  
            }
            stack.pop()
        }
    }

    return stack.length===0
    
}


console.log(Paranthesis(""))