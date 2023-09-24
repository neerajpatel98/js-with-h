// data ko kis taraha  se memory me rakha jata hai and how to access them on the basis of it they divided in two part 1. primitive datatyepe 2. non primitive datatype

// *********** primitive datatypes***************
// all primitive value is call by value type means => agar ham ise kahi copy karte hai to ,original memory ka copy kar ke diya jata hai ,memory ka original refrence nahi milta hai ,so agar value change karte hai to copy wale me change hota hai original memory me change nahi hota
/*
these 7 types =>
1. Number
2. string
3. boolean
4. null
5.undefined
6. Symbol => used for unique value
7. BigInt=> used to store larger value
*/
// example of primitive
const score=100 // type => number
const newscore=100.3// number

const isLoggedIn=false// boolean
const outsideTemp=null// typeof=> object
let userEmail;// undefined

const id=Symbol("124")
const anotherid=Symbol("124")

console.log(id===anotherid);

// ********************************  REFRENCE (NON PRIMITIVE DATATYPE) ********************
//isme memory ka directly refrence allocate kiya jata hai 
/*
these are 3 types=>
1. Array
2. Objects
3.Functions
*/

// example of non primitive

const heros=["shaktiman","nagraj","dogo"];// array 
console.log(typeof heros);// type=> object

let myobj={// object
    name:"neeraj",
    age:32
}
console.log(typeof myobj); // type=> object


const myfunction=function(){ // function 
    console.log("hello world \n")
}

console.log(typeof myfunction); // type=: function object

// java script is Dynamically typed laguage because data ka type run time par hi defined ho raha hai