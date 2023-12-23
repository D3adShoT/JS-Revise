let selBody = document.querySelector("body");
console.dir(selBody);
let newBut = document.createElement("button");
newBut.innerText = 'Click here';
newBut.style.backgroundColor = 'red';
newBut.style.color='white';
selBody.after(newBut);
newBut.remove();

let paraEle = document.querySelector("p");
console.dir(paraEle);
paraEle.classList.add("newClass"); //add the new css class to the para element.
