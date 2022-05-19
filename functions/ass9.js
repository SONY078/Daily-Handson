
let a;
let b;
function Add()
{
    a=50;
    b=50;
    c = a + b;
    console.log(`the addition of a and b are ${c}`);
}
Add();

//output : the addition of a and b are 100

function Sub(x,y)
{
    sub = x - y;
    console.log(`the Subtraction of a and b are ${sub}`);
}
Sub(20,10);

//output : the Subtraction of a and b are 10

let Mul = (n,m) => 
{
    mul = n*m;
    console.log(`the multiplication of a and b are ${mul}`);
}
Mul(10,10);

//output : the multiplication of a and b are 100



//"Print output:

let d = 21;

var girl = function() 
{
    console.log(d);
    var d = 20;
    console.log(d);
};

// girl();

//output: undefined 20


//"Print output: 
var x = 21;
girl ();
console.log(x)
function girl()
{
    console.log(x);
    var x = 20;
};
//output 20 21


//Print output

// var val1 = 21;
// fun1();
// fun2();
// console.log(fun1);
// fun1 = function()
// { 
//    val1 = 20;
//   console.log(val1);
// };
// fun2 = function() 
// {
//     val1 = 40;
//    console.log(val1);
// };

//output : fun1 is not defined


var val1 = 21;
fun1();
fun2();
console.log(fun1);
function fun1()
{
    val1 = 20;
    console.log(val1);
}
function fun2()
{
    val1 = 40;
    console.log(val1);
}

//output:
// 20
// 81 40
// ƒ fun1()
// {
//     val1 = 20;
//     console.log(val1);
// }

function Factorial(n)
{
    let z = 1;
    for(let i = 1 ; i <= n; i++ )
    {
        z = z * i;
        
    }
    console.log(z);
}
Factorial(5);

//output: 120
