function ArrayIntersect(arr1,arr2)
{
    const set1 = new Set(arr1)
     const result= arr2.filter(item=>set1.has(item)) 
     return[...new Set(result)]
}
// set means remove duplicate also ... changing set to array 


let array1=[1,2,3,2,3,4,5,6]
let array2=[1,3,2,3,5,7]
console.log(ArrayIntersect(array1,array2));

