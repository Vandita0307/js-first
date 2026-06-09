//Primitive
//7 types: String,number,boolean,null(empty),undefined,Symbol(unique),BigInt,

//Js -dynamically typed

//Reference(Non Primitive)(Directly allocate memeory)
//Array,Objects,Functions

//Symbols
// a=Symbol('12')
// b=Symbol('12')
// console.log(a==b);//false
// console.log(a===b);//false

// =======================Memory====================
//Stack(Primitive) Heap(Non Primitive)
let myName="Pari"//primitive

 let userOne={//non primitive
    email:"abc@google.com",
    upi:"user@xl"
 }

let userTwo=userOne
userTwo.email="xy@google.com"
console.log(userTwo);
console.log(userOne);


