console.log("working");

//functions

//basic function
function multiply()
{
    
    console.log("multiply");
}
multiply();
function mul(m,n)
{
    let q = m*n;
    return q;
}
// let m = mul(10,5);
console.log(mul(10,5));



//arguments
function sub(x,y)
{
    let z = x-y;
    console.log(z);
}
sub(10,6);


//arrow function
const add = () => {
    console.log("addition");
}

add();

const add1 = (a,b) => {
    let c = a+b;
    console.log(c);
    
}
add1(10,5);

function div(i,j)
{
    let k = i/j;
    return k;
}
let d = div(100,10);
console.log(d);

document.write(d);


let i=5;
let j=1;
function one()
{
    two();

	console.log(i);
	function two()
	{
		console.log(j);
	}
    console.log(j);
    console.log(i);

}
one();
console.log(j);
console.log(i);

//BLOCK SCOPE and shadowing
console.log("block scope");
//let and const block scoped and var is global scoped
let f =3;
const g= 2;
var h =1;
console.log(f);
console.log(g);
console.log(h);
{
    let f =3;
    const g= 2;
    // var h =1;
    console.log(f);
    console.log(g);
    console.log(h);
}
console.log(f);
console.log(g);
console.log(h);
