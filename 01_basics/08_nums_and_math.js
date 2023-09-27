const score = 400  // automatically js will find that it is number type
console.log(score);// output 400 hai , ya par automatically define hua hai ki it is number


const balance = new Number(100) // by this , ye confirm hai ki 100 is a number , pura surity hia ki 100 is number
console.log(balance);// output 100 , yaha par specifically cast kiya hai ki ye number hai

// toString(), is function is convert the number in string

console.log(balance.toString());// output => 100 , but this is string not a number 
console.log(typeof balance);// object string

console.log(balance.toString().length); // after converting in string can apply function of string
console.log(balance.toFixed(2)); // output=> 100.00 , it will fix the number til 2 decimal 

// *** PRECISION =>

const otherNmuber=23.8966
console.log(otherNmuber.toPrecision(3)); // output=> 23.9, toPrecision will give the precise value

const othernumber1=123.8966
console.log(othernumber1.toPrecision(2));// for 3- output=> 123, for 4- output=> 123.9
/// for number 1123.899 and precision 3=> output-1.12e+3 means 1120

// ****** using- local string****
const hundres=1000000
console.log(hundres.toLocaleString());  // output=> 10,00,000  in IND standard , if give output=> in us statndard 1,000,000 then do toLocaleString()


// Number.MAX_SAFE_INTEGER => by this can find the safe integer or any function used






//++++++++++++++++++++++++++++++++++++ MATH OF JS +++++++++++++++++++++++++++++++


// basic math=>
console.log(Math) // outut=> Object [Math] {}
console.log(Math.abs(-4))/// give abslute value output=> 4
console.log(Math.round(4.9))// output=> 5 , it will round our vlaue if 4.3 the output is 4
console.log(Math.ceil(4.8))// output=> 5 , it will give the upper value 5
console.log(Math.floor(4.8))// it will give the lower value output=> 4
console.log(Math.min(1,1,2,4,6))// output=> 1 , give the minimum value
console.log(Math.max(1,1,2,4,6))// output=> 6 , it will give the max value




// ** Math.random()
console.log(Math.random())//   Math.random()  this will give value always b/w 0 and 1 , includeing 0 and 1

// if we want value from Math.random() greater than 1 then do Math.random()*10+1

console.log((Math.random()*10)+1);
// if we want only floor value the do =>
console.log(Math.floor((Math.random()*10)+1));// this will do 4.3434 to 4 only

// IMP=> IF we want the Math.random() value b/w 10 and 20 the =>

const min=10
const max=20

console.log(Math.random()*(max-min+1)+min) // due to this it give value b/w 10 to 20
