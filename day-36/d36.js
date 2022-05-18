const TicketBooking = function()
{
    let Passengercount = 0;

    return function()
    {
        // let Passengercount = 0; // it doesn't incremented cuz 
        Passengercount++;
        console.log(`the passenger count is ${Passengercount}`);
    };
};

let Book = new TicketBooking();  //creating a reference for ticketbooking.
//closure body
// const Book = function()
// {
//     Passengercount++;
//     console.log(`the passenger count is ${Passengercount}`); 
// }

Book();
Book();
Book();

//in closures we can retrieve local data of a function from outside of the function.


function Add()
{
    let a = 10 ;
    let  b = 20 ;
    // return function() //return function can return the values to the closure reference.
    // {
    //     console.log(a+b);
    // }
    function sub()
    {
        a++;
        // b--;
        console.log(`the addition is ${a+b} , the suntraction is ${a-b}`);
    }
    return sub;  //without return statement , the closure doesn't work. 

}

let addition = Add();
addition();
addition();


//In closure even though  the execution context is destroyed , the variable environment somehow 
//keeps living in the engine.

let f; //global variable

const g = function()
{
    const a = 20; //local variable

    f = function() 
    {
        console.log(a*2);
    };
    // return f();
};

g(); // 40 
f(); //nothing
// let m = f(); //40
// m();

const h = function()
{
    const b = 10; //local variable

    f = function() 
    {
        console.log(b*2);
    };
    // return f();
};

h(); // 20
f();


//set time out and set interval

// setTimeout(()=>
// {
//     console.log("I don't like fruits");
// },1000); //displays output after 1 sec.

// setTimeout(()=>
// {
//     console.log("but still we need to eat them,because they are healthy");
// },2000); 

// //passing arguments to set timeout
// setTimeout((fruit1,fruit2)=>
// {
//     console.log(fruit1,fruit2);
// },3000, "Apple","Orange"); //displays output after 2 sec.



// const fruits = ["Apple","Banana","Cherry","Durian"];
// const timer = setTimeout((fruit1,fruit2,fruit3,fruit4)=>
// {
//     console.log(fruit1,fruit2,fruit3,fruit4);
// },5000,
// ...fruits
// );

// console.log("waiting for fruits");

// if(fruits.includes("cherry"))
// {
//     clearTimeout(timer);
// }

// setInterval(() => {
//     console.log("eat fruits");
// }, 2000);  //interrupts every 2 sec.

const boardingPassengers = (n,wait) =>
{
    const personPerGroup = n/3; //local variable of boardingPassengers where n is 180 ,n/3 = 60.

    setTimeout(()=>
    {
        console.log(`boarding ${n} number of passengers`);
        console.log(`boarding ${personPerGroup} number of passengers`);
        // console.log(`boarding ${n} number of passengers`);
        console.log("Boarding in secs",wait);
    },wait*2000); //wait is 2 and settimeout set to 4sec.

}

boardingPassengers(180,2);

