const name="Neeraj"
const repoCount=50

console.log(name + repoCount + " value"); // basically ye concatinate ho gaya hai , //  syntex outdated ho gaya hai so better is=>

console.log(`my name is ${name} and my repo count is ${repoCount}`); // better than prev ,`` => due to this string interpolation hota hai=> means kisi bhi variable ko inject kar sakte hai 
// dulie to this string interpolation app bahut sari chize on the way kar sakte hai => like name.ToUpperCase or any dot operation

const gameName= new String("Neerajpatel") // this is string object not simple string
console.log(typeof gameName)

// using function=>

console.log(gameName[0])
console.log(gameName.length);// length is not a function so not write like => length()
console.log(gameName.toUpperCase());// toUpperCase() it is an function

console.log(gameName.charAt(2)); // give the charector at the given index position 
console.log(gameName.indexOf('r'));// give the index of the given charector

const newString=gameName.substring(0,4)// give charector only at index 0,1,2,3 bus.., you can't give negative value in substring() if you give -value then it will convert it in 0 e.g=> substring(-8,4) => become substring(0,4)
console.log(newString);// so output=> Neer


const anotherString=gameName.slice(-11,4) // you can give negative(-) value in the slice()
console.log(anotherString);

// for trim the extra space =>

const newStringone="    neerajpatel    "// for trim these extraspace used the trim function for string
console.log(newStringone);// output=> "   neerajpatel   "
console.log(newStringone.trim()); // output =>  neerajpatel  which is trimmed output


// if want to remove the spaces or any thing like %20 from url then what to do=>


const url= "https://neeraj.com/hitest%20patel"
console.log(url.replace('%20','-'));// it means=> in url '%20' replace with '-'

console.log(url.includes('neeraj')); // output=> true => this will told that neeraj given string me hai ya nahi
console.log(url.includes('sundar'));// output=> false


// split string in array on basis on any like '-' or space(" ")  =>

const mystring="Neeraj-Kumar-Patel"
console.log(mystring.split('-')); // output => [ 'Neeraj', 'Kumar', 'Patel' ]

 