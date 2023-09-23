//let score= 33
let score="neeraj"
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber); // comes type ,number
console.log(valueInNumber) // it will giver the output NaN means not a number ,lekin typeof karne par type number  aa raha har
 

let isloggedIn="hitesh"
let string=1
let booleanisloggedin=Boolean(isloggedIn)
let booleanstring=Boolean(string)
console.log(typeof booleanisloggedin);

console.log(booleanstring);
// kis typer ke conversion par kaya output ayega=>

/*
1. "33"=> convert in number and output will come 33
2. "33abc"=> convert in number and output will come NaN
3. True=> give 1 convert in number
4. "" => empty string give- false
5."Neeraj"=> give true in boolean conversion
*/
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

// ********************** OPERATION *************************

let value=3
let negvalue=-value
console.log(negvalue);


console.log(3+3); // this all operations all known and easy
console.log(3-3);
console.log(3*3);
console.log(2**3);// this is power
console.log(2%3);
console.log(2/3);
console.log(3+3);

let str1="hello"
let str2=" Neeraj"

let str3=str1+str2
console.log(str3);

console.log(1+"2"); // this will concatinate 12
console.log("1"+2);// same
console.log("1"+2+2)// jab starting will string to sara hi stirng ki taraha act hone lagta hai so output is 122  -> concatinate ho gaya ,string ki taraha
console.log(1+2+"3")// yaha par starting  number har , to sabse pahale number solve hogi then "3" ke sath concatinate hogi -> 33 output

console.log(3+4*5%6)// ye code pratically jaroori nahi hai but curocity ke liye important hai


console.log(true)// output => true
console.log(+true)// output=> 1
// console.log(true+)// it will give the error
console.log(+"")// output=> 0  b/c empty string is false 



let num1,num2,num3
num1=num2=num3=2+2 // likhana sahi hai but code readability ke liye zayada sahi nahi hai

//  ********************* INCREMENT OPERATOR ********************

let gamecounter=100
gamecounter++

console.log(gamecounter);

let x=3
let y=x++ // this is postfix increment operator in which=> pahele y me x ki value assigen hogi then x me increment hogi ,output=> x=4,y=3
let z=++x //this is prefix increment operator in which=> pahele x me increment hogi then  y me x ki value assigen hogi  ,output=> x=4,y=4
console.table([y,z])