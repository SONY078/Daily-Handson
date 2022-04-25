console.log("console is working");
document.write("hello");

// let a;
// console.log(a);

let q;
q=true;
console.log(q);

// let f="sahi";
// const l="hari";
// var age=12;
// console.log(f,l,age);
{
    let f="sahi";
    const l="hari";
    var age=12;
    console.log(f,l,age);
}
// console.log(f,l,age);

console.log(age);

const game = "cricket";

const game1 = "cricket";

console.log(game2); //undefined
var game2;
game2 = "football";
console.log(game2);

add();
function add()
{
	console.log("hello");
}

add1(3,4);
function add1(b,a)
{
    let c=5;
    let res=a+b+c;
    console.log(res);
	console.log("hello");
}

sub(100,50);
function sub(a,b)
{
    let res=a-b;
    console.log(res);
	console.log("hello");
}
//arithmetic
console.log(10+90);//100
console.log(10-90);//-80
console.log(10*90);//900
console.log(10/90);//0.111111
console.log(10%90);//10
//comparision
console.log(10<90);//true
console.log(10>90);//false
console.log(10<=90);//true
console.log(10<=10);//true
console.log(10>=90);//flase
console.log(10>=10);//true
console.log(10==90);//false
console.log(10==10);//true
console.log(10===90);//flase
console.log(10===10);//true
console.log(10=="10");//true checks the value but not datatype
console.log(10==="10");//false checks both value and datatypes
console.log(2!=3);//true
console.log(2!==3);//true
//logical
console.log(2||3);//2
console.log(0||3);//3
console.log(0||0);//0
console.log(2&&3);//3
console.log(0&&3);//0
console.log(1&&0);//0
console.log(1&&1);//1
console.log(!0);//true
console.log(!1);//false
console.log(!2);//false

//increment decrement
let a =1;
a++;
console.log(a);//2
a--;
console.log(a);//1
//a=1
console.log(a++);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
console.log(a);//2
a--;
console.log(a--);//1
console.log(a);//0
let x=2;
x*=3;
x/=3;
x+=2;
x-=4;




















