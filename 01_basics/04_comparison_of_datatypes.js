console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("\n");
console.log("2">1);// in this output=> true b/c js will convert the "2"  in number and compare the 2>1 which is true
console.log("02">5);//in this output=> false b/c js will convert the "02"  in number and compare the 2>5 which is false
console.log("\n");

console.log(null>0);  // in null  comparison operator convert it to a number and treating it as 0 , but equalitu check(==) not do like that so 0>0 output=> false
console.log(null==0);// false 
console.log(null>=0);// true
console.log("\n");

console.log(undefined==0);// undefined is also not give the predictable output
console.log(undefined>0);
console.log(undefined<0);
console.log("\n");

console.log("2" === 1);