// Data Types : 

//  Primitive -> 7 types -> String , Number , Bool, Null, undefined, Symbol, BigInt, 

//  JS is Dynamically  Lang  as we need not define the Varibale as const, string or something it automatically takes it.

const score =  100
const ScoreValue = 100.3

const islogged = false
const outsideTemp = null
let userID;

// Defining a Symbol

const Edge = Symbol('121')
const anotherEdge = Symbol('121')

// Despite same value in symbol both are considered different
// console.log(anotherEdge === Edge);


// Refernce (Non Primitive) -> Array , Objects, Functions

const heros = ["Arun", "Tarun", "Varun"];  // Arrays

let myobj = {   // Object
    name : "laksh",
    age : 21
}

const Myfunction = function(){
    console.log("hello World");
}

console.log(typeof score );
console.log(typeof ScoreValue );
console.log(typeof islogged );
console.log(typeof outsideTemp );
console.log(typeof userID );
console.log(typeof Edge );
console.log(typeof heros );
console.log(typeof myobj );
console.log(typeof Myfunction );

// https://262.ecma-international.org/5.1/#sec-11.4.3