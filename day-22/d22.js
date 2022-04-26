console.log("Working...............");



//bitwise
console.log(2&3);//2
console.log(2|3);//3
console.log(2^3);//1
console.log(2<<3);//16
console.log(2>>3);//0


//ternary

2>3 ? console.log("2 is greater than 3") : console.log("2 is less than 3");

let x = 3;
let y = 7;
x > y ? console.log("2 is greater than 3") : console.log("2 is less than 3");
x > y ? x++ : x-- ;
console.log(x);

//IF ELSE

if(x > y)
{
    console.log(x);
}
else
{
    console.log(y);
}

//ELSE IF

let a =12;
let b = 15;
let c = 8;
if(a>b)
{
    console.log(a);    
}
else if(b>c)
{
    console.log(b);
}
else
{
    console.log(c);
}

let age;
age = 65;
if(age<10)
{
    console.log("child");    
}
else if(age<20)
{
    console.log("teenager");
}
else if(age>20 && age<30)
{
    console.log("youngster");
}
else
{
    console.log("adult");
}

//switch

var val = 1;
switch(val)
{
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    case true:
        console.log(val);
        break;        
    default:
        console.log("invalid");
        break;

}

