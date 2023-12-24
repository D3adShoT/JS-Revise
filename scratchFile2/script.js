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

/* All the objects in JS inherit there properties from a pre defined prototyle object
All the method that we usually make also is included in the prototype of the respected object.

In case we want an object to use another object's method then we must share its prototype with the respective method.
*/

class toyota {
    start(){
        console.log('starting');
    }
}
class fortuner{
    ownerName;
}
let fort = new fortuner();
fortuner.__proto__ = toyota; // now fortuner shares the proto of toyota as well where start method is defined.
fort.start(); //this will run and print the log as mentioned above.

/* inheritance - one class can inherit all the attr and functions of another class */
class fortuner2 extends toyota {
    constructor(){
        console.log('inherieter fortuner');
    }
}

/* usually the code in JS executes in sync fashion, till there is any line which is taking more that expected time.
in such case the respected line is left to execute async manner while execution is carried on */
//we use call backs to ensure the sync execution in such scenrio.

function runLogs(data){
    setTimeout = (()=>{
        console.log('data',data);
    },2000);
}
runLogs(1);
runLogs(2);
runLogs(3);
//all above will execute simult after 2 seconds

//Introducing callbacks.

function runLogsC(data,setCB){
    setTimeout = (()=>{
        console.log('data',data);
        if(setCB){
            setCB();
        }
    },2000);
}
runLogs(1,()=>{
    runLogs(2,()=>{
        runLogs(3)
        })
    }
);
//this will run all the logs call with individual 2 secnds delay but this nested callback makes the code
//non readable, AKA CALLBACK HELL/ pyramid of Doom
//in order to avoid this and have a clean solution we have Promises.
//solving above problem using promises.

function runLogsP(data){
    return new Promise((resolve,reject)=>{
        setTimeout=(()=>{
            console.log('data',data);
            resolve('success');
        },4000);
    });
}
//Promise is returned immediately with pending status,
//Promise.then is executed when promise is resolved/fulfilled
//promise.catch is executed when promise is rejected
console.log('fetching data1..');
runLogsP(1).then((res)=>{
    console.log(res);
    runLogsP(2);
}).then((res)=>{
    console.log(res);
    runLogsP(3);
}).then((res)=>{
    console.log(res,'Completed');
});
//above writted Promise chain is easy to read than Callback hell but we have another method to make 
//it even more easier.
//ASYNC-AWAIT we can reuse the method runLogs written above.
async function callLogs(){
    await runLogs(1);
    await runLogs(2);
    await runLogs(3);
}
// we had to write another async method to call the await calls. to avoid the mannual envocation of this method.
// we can use IIFE - Immediate invocation functions which execute as soon as they are decalred.CANNOT BE CALLED LATER/
(async ()=>{
    await runLogs(1);
    await runLogs(2);
    await runLogs(3);
})();
