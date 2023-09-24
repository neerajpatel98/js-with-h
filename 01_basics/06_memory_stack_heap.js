// stack=> in stack all primitive datatype got memory
// in primitive copy of varibale will be make not actual refrence will given

// heap => in heap all non primitive datatype will got memory
// in non primitive actual refrence of memory will given




// *************************
// primitive example=>
let myname="Neeraj patel"
let anothername=myname // copy of my name will be given to anothername not actula refrence to the anothername
anothername="Dheeraj patel"
console.log(myname); // output=> Neeraj patel
console.log(anothername);// output=> Dheeraj patel

// *********************
// NON PRIMITIVE EXAMPLE
let userone={ 
    email:"neeraj@google.com",
    upi:"neeraj@ybl"
}

let usertwo=userone  // int this actual refrence of memory will given mean userone and usertwo refrencing same memory location , so if change in any then change in both=> useone and usertwo

usertwo.email="dheeraj@google.com"

console.log(userone.email)// output=> dheeraj@google.com
console.log(usertwo.email)// output=> dheeraj@google.com