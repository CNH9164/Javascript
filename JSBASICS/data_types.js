"use strict" //This is used to treat all JS code as newer version and this need not to be written all the time snce we using node.js

//❌ Without strict mode
x = 10;
console.log(x);  // 10
//This creates a global variable accidentally 😬

//✅ With strict mode
x = 10;  // ❌ ReferenceError
//Now JavaScript forces you to declare variables properly.

//The correct version of code will be
let x=20;
console.log(x); 

//alert(3+33) will through an error since we are using nodejs not browser

//Links: 1.mdn web docs 2. tc39.es

let name = "Vishnu"
let age = 19
let isLoggedIn = true

//number = > 2 to power 53
//bigint => this is used for large numbers
//string => ""
//boolean => true or false
//null => standalone value/it is used to represent as zero here we can define it by ourselves
//null is an object
//undefined => value is not yet assigned
//symbol => it is used to find the unique tools

//object
console.log(typeof null)

