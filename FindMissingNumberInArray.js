function Missing(arr)
{
  let num = arr.length+1;

   let total= (num * (num+1)/2)
    let arraySum = arr.reduce((acc,val)=> acc+val,0)

    return total-arraySum
}


console.log(Missing([1,2,3,5,6,7]))