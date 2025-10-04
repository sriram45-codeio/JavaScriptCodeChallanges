function NestedFlatten(arr)
{
    let result =[]


    arr.forEach(element => {
        if(Array.isArray(element))
        {
            result= result.concat(NestedFlatten(element))
        }
        else{
            result.push(element)
        }
        
    });
    return result
}
let array = [1,[2,[3,4],5],6]
console.log(NestedFlatten(array))