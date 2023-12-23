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

/* DOM - Document object model ->
A tree like structure created when a webpage loaded.

All the HTML elements we create is converted in an object called 'Document' under 'Window' Object.
*/
window.console.log('Hello'); // will work fine as well since console method is one of many method of WINDOW object.
console.log(window); // will show the window object
console.log(window.document); // will show entire code of the document object "not the attributes".
console.dir(window.document); // dir is used to show all the functions and attributes of the WINDOW class

//This Document is the model of the html code that we write.
/* advantages of DOM -> is to dynamically update the page based on an input/event without changing any server code.
DYNAMIC Maniplation */

//we can use methods to get and manipulate the DOM elements. Methods are listed below.
let subheading = document.getElementById("subhead");
console.dir(subheading);
let classContent = document.getElementsByClassName("tempClass");
console.dir(classContent);
let allTagcontent = document.getElementsByTagName("p");
console.dir(allTagcontent);

//what we will generally use
let firstpTags = document.querySelector("h1");
console.dir(firstpTags);

let allPtags= document.querySelectorAll("temp");
console.dir(allPtags);

/* important Properties to know : 
 1. tagName - shows content of the selected element
 2. innerHTML - shows all the content of the selected element including the html tags
 3. innerText - shows just the plain text content of the tag. includes change line annotations like \n as well.
 4. textContent - shows just the plain text even iff the component visibility is hidden on the component. 
*/
/* In order to change the attribute name we have 2 methods 
element.getAttribute("attrName"); -> gets the attribute name/ class name from the selected Element.
element.setAttribute("AttrName","NewAttrName"); -> sets the attr name to the newAttrName on the selected element.
*/

//Creating elements in DOM 
/* creating is a two step process : Create and then Insert it to the DOM tree.

For creations of element use : let ele = document.createElement("button"); -> we usually pass the type of element we want to create in the argument.

Methods that we have : 
1. node.append(ele);  - insert at the last of child list of the selected node.
2. node.prepend(ele); - insert at the start of the child list of the selected node.
3. node.before(ele); - insert right before the selected node starts.
4. node.after(ele); - insert right after the selected node ends.

for removal of any element from the DOM tree 
element.remove();
*/

