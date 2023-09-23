"use strict"; // Treat all js code as newer version 

// alert(3+3) // it will give error b/c we are using nodejs ,not browser ,it will run in browser console b/c js pahale browser me hi tha

// console.log(3+3); console.log("neeraj")  // ye sahi hai but code na hi redable hai aur na hi future proof, make priority of readabililty
 

console.log(3
    +3
    ) // code readibility should be high
console.log("neeraj");

// TALK ABOUT DATATYPES
let name="neeraj" // string type
let age = 20 // number type
let isLoggedIn=false // boolean type

// how many datatypes you used=>
/*
1. number type range is 2 to pwer 53
2. bigint -> used whe number is very large
3. string-> used in ""
4. boolean => true/false
5.null => it is actually  standalone value ,  null matlab khali value, yani usme koi value hai hi nahi
6.undefined=> means we are not assigned any value 
7.symbol=> used whe require unique value



8. OBJECT =>which is non premitive datatype 
*/


console.log(typeof "neeraj"); // type is string
console.log(typeof "39f");// string
console.log(typeof 93);// number
console.log(typeof null);// object
console.log(typeof undefined);// type is undefined ayega