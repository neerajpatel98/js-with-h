const accountId=135345345
let accountEmail="neeraj@google.com" // let is also as the var but they have not problem with the scope so it is better to use the let instead of the var
var accountPassoword="344534" // var keyword is used to create variable in js but var have problem with the scope
accountCity="maharajganj" // in javascript variable will defined without any keyword also but it is not good
let accountState;// this variable is undefined but it will got the memory 
  
/* 
PREFER not to use var
because of issue in block scope and functional scope a
*/
// accountId=897599  this will give the error because it will constatn value and it's value can't be changed
// now change each value
accountEmail="n.pss@google.com"
accountPassoword=" 98383437"
accountCity="gorakhpur"
//console.log(accountEmail);
// now print all value in table
console.table([accountId,accountEmail,accountPassoword,accountCity,accountState])