function AnagramCheck(str1,str2)
{
    str1= str1.split(" ").join("").toLowerCase()
    str2= str2.split(" ").join("").toLowerCase()


    if(str1.length !== str2.length) return false


    let sorted1= str1.split("").sort().join("")
    let sorted2= str2.split("").sort().join("")


    return sorted1==sorted2


}



console.log(AnagramCheck("School Master"," The ClassRoom"))