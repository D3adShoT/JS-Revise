let selBody = document.querySelector("body");
console.dir(selBody);
let newBut = document.createElement("button");
newBut.innerText = 'Click here';
newBut.style.backgroundColor = 'red';
newBut.style.color='white';
selBody.after(newBut);
newBut.remove();
/*
let paraEle = document.querySelector("p");
console.dir(paraEle);
paraEle.classList.add("newClass"); //add the new css class to the para element.
*/
/* 
Events in JS 
We can use events to trigger DOM modulation 
*/

let button = document.getElementById("btn1");
console.dir('button found ->',button);
console.log('button found log ->',button);

button.onclick = () => {
console.log('button found log ->',button);

    console.log('Button clicked');
}; // we cannot add another onclick method on the same element using this same approach

// We use eventListeners - recommended way! to add one or more callbacks for a same event.
let button2 = document.getElementById("btn2");
button2.addEventListener("click",()=>{ console.log('Button Clicked eve1')});
button2.addEventListener("click",()=>{ console.log('Button Clicked eve2')});

// we can remove listners as well. But for that we must have a callback method reference name as well just writing arrow method will NOT WORK. 
let button3 = document.getElementById("btn3");
let handlecb = () =>{ console.log('Button clicked by handler')};
button3.addEventListener("click",()=>{ console.log('Button Clicked eve1')});
button3.addEventListener("click",handlecb);
button3.addEventListener("click",()=>{ console.log('Button Clicked eve3')});
button3.addEventListener("click",handlecb);
button3.addEventListener("click",handlecb);
button3.removeEventListener("click",handlecb);


