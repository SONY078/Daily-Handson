console.log("starting.........");

//for

for(let i=0;i<5;i++)
{
    console.log(i);
}

//while

let a=10;
while(a>0)
{
    console.log(a);
    a--;
}

console.log("2 multiples");
for(i=1;i<11;i++)
{
    d = i*2; 
    console.log(d);
}
console.log("2 multiples");
j=1;
while(j<11)
{
    k=j*2;
    console.log(k);
    j++;
}

//do whi
let b=1;
do
{
    // let a;
    // let b =a*i;
    console.log(b);
    b = b + 2;
    
}
while(b<=10);

//for - in 

console.log("for in");

let name="TERRY";

let t = ["k" , " v" , "j" , "RM"];

for(let k in t)
{
    console.log(k);  
}

for(let v of t)
{
    console.log(v);
}


t.forEach((v,index)=>{
    console.log(index,v);
})


var x=10;
console.log(x, "x:",x);

// console.log(i);
    // console.log("*");
    // console.log(i);
    // console.log("=");