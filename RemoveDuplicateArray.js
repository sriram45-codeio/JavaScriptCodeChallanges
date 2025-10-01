function removeDup(arr)
{
   return  [...new Set(arr)]

}

const nums=[1,2,1,2,4,3,6,4,5,7,5,8,1]
console.log(removeDup(nums));




function removeDupWithFilter(arra){
    return arra.filter((val,index)=>arra.indexOf(val)===index)

}

const fruits = ["apple","orange","apple","banana","grapes"]
console.log(removeDupWithFilter(fruits))
