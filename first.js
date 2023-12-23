var x = 10; // global declaration, can be redifined and updated later. Was the only one available before ES6(2015) not a good practice to use.

let xy = 10; // Blocked declaration, can be updated later but cannot be redifined later.

const xyz = 10; // Blocked declaration, cannot be updated or redifined.

/*
Premitive data type - 
Number  ->  + , _ , decimals all are numbers
String -> ' '
Boolean
Undefined
Null -> Object that indicate 'Abscence of objects'
BigInt
Symbol
*/


/* 
Objects -> collection of data

const student = {
    fullName : 'Agraj Mishra',
    age :'27',
    CGPA:7.99,
    isPass : true
}
*/
const student = {
    fullName:'Agraj Mishra',
    age :'27',
    CGPA : 7.99,
    isPass:true,
}
console.log(student);