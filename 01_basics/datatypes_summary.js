// primitive types

// 7 types: String, Boolean, Number, null, Undefined, BigInt, Symbol


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 142539879459856554n


// reference types(Non - Primitive)

// array, Objects, Function

const heros = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name : "Sudesh",
    age : 22,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof myfunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
