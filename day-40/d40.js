console.log("Working....");

/* Async/Await - They are used to handle the promises more efficiently. The word async is
used before a function to make sure that it returns a promise. So, we therefore use async
before the function to return a promise instead of some values/function.

Await is used to wait for the result that is supposed to be returned from the promise.
So, we can use the keyword await when calling the function which returns a promise.

Async/Await is also used for making the API calls.*/


//Await is only worked only when you wrrite async.

const fun1 = () =>
{
    return "function one";
}

const fun2 = () =>
{
    return "function two";
}

const fun3 = () =>
{
    return new Promise((resolve,reject) =>
    {

    
        setTimeout(() => {

            // return "function three";
            resolve("function three");

        },3000);

    })
}


const CallFuns = async () =>
{
    let r1 = fun1();
    console.log(r1); //function one

    let r2 = fun2();
    console.log(r2); //function two

    let r3 = await fun3();
    console.log(r3); //undefined
}

// CallFuns();

console.log("-------------");

async function PromisesExamples()
{
    console.log("inside a function");
    const response = await fetch('https://api.github.com/users');

    console.log("Before resonse received");

    const users = await response.json();

    console.log("Users are resolved");

    return users;
}

console.log("before calling function");
let d = PromisesExamples();
console.log("after calling function");
console.log(d);
d.then((r)=>
{
    console.log("response received",r);
    r.map((item)=>
    {
        console.log(item.id,item.login);
        // console.log(item.login);
    })
})

console.log("end of the program");
