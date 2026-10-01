                        //*****************CONVERSION**********************//
let score = "33"
let valueInNumber = Number(score)  
console.log(typeof valueInNumber)


//any to number
/*
'1234qwedfg'(any arbitary string) => NaN
'1234'(string of number) => 1234
true/False(boolean) => 1/0
undefined => NaN
null => 0
*/

let isLoggedIn = 234
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//any to boolean
/*
0 => false
"" => flase
1 or any number=> true
"edfg" or any non-empty string => true
*/



//*************************************OPERATION*****************************************//

let val = 12
let negVal = -val
console.log(negVal)


console.log(2*3)
console.log(2**3)
console.log(2-3)
console.log(2+3)
console.log(2/3)
console.log(2%3)


console.log("1" + 2) //12
console.log("2" + 3 + 4) //234
console.log(3 + 4 + "3") //73

/*
console.log(a operator b) => operator= [+, - ,* ,** ,% ,/]
str1="asdfg" ;  str2= " qwerty" => str3=str1 + str2 => "asdfg qwerty"

*/



