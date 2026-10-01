const accountId = 144553
let accountEmail = "kunalawasthi031@gmail.com"
var accountPassword =  "1234567" 
/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
accountCity="Kanpur"  // variable can also be defined without declaring but not recommended practice
let accountDate  // if we declare variable without value it will remain undefined


// accountId = 2   //not allowed

accountEmail = "kunalawasthi032@gmail.com"
accountPassword =  "123"
accountCity =  "Lucknow"


console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.table([accountId, accountEmail, accountPassword, accountCity])


