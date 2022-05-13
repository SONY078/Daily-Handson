console.log("Working.....");



// let element = document.createElement("div");
// element.className = "child";
// element.innerHTML = `<b>javascript</b>`;
// console.log(element);
// document.querySelector("div#parent").appendChild(element);


// let element1 = document.createElement("img");
//     element1.setAttribute("src","../day-31/download.png");
// console.log(element1);
// document.querySelector("div#parent").appendChild(element1);


// console.log("working...")

// let element1 = document.createElement("div");
// element1.className = "new";
// element1.innerHTML = "<b>Hello everyone</b>";
// console.log(element1);
// document.querySelector("div.item1").appendChild(element1)

// let element2 = document.createElement("img");
// element2.className = "image";
// element2.setAttribute("src","./download.png");
// console.log(element2);
// document.querySelector("div#item2").appendChild(element2);

//---------------------------------------------------------


a();
function a()
{
    console.log("I am ....");
}

//function supports hoisting
//function body is called function stmt/definition
//function stmt supports hoisting, i.e called function even before declaring the fn.

var b = function()
{
    console.log("I am ....");
}

//since this fn is anonymous fn, it won't support hoisting. fn expression don't support hoisting. 
console.log(b);
b();

//a fn expression is unnamed fn assigned to variable, The variable receives fn def  which in turn can call the fn by calling the variable name.

{
    let d = function()
    {
        console.log("This is function abc");
    }
    d();
}

//d();  - gets error as d isn't defined. 
//fn can only called inside the scope .

//Arrow functions - Declared in ES6(2015)

let f = () => 
{
    console.log("Hello!! this is arrow function");
}
f();




//First Class Functions - The functions can be passed as values
// into another functions or can be returned from another functions as values. This unique feature of
// functions makes them call as first classs functions/ First class citizens.








// let g = function(param)
// {
//     console.log("function G");
//     console.log(param);
// }


let g = function(param)
{
    console.log("function G");
    console.log(param);
    param(); //callback fn
}

function h()
{
    console.log("Function H");
}

let param = function()
{
    console.log("Function H");
}

g(h);

let i = function()
{
    return function j()
    {
        console.log("Function J");
    }
}
let returnVal = i()
console.log(returnVal);

setTimeout(() => 
{
    console.log("Hi i am inside a callback function");
} ,4000);

const say = (nameOFPerson) =>
{
    console.log("Hello",nameOFPerson);
}


const greet = (friend,callBackFunction) =>
{
    callBackFunction(friend);
}

 greet("Pranav",say);

// js is synchronous language. 











