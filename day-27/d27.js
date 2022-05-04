console.log("working.......");

let n = [1,2,3,4,5,6,7,8,9];

//map
n.map((Item)=>
{
    console.log(Item)
});


console.log(n);

//filter
let r1 = n.filter((Item)=>
{
    return Item >3 
});
console.log(r1);

//reduce
let r2 = n.reduce((acc,cur)=> acc = acc + cur,0);
console.log(r2);

let r3 = n.reduce((acc,cur)=> acc = acc * cur,1);
console.log(r3);

//charAt
let str = "every cat in her life would slap her owner once";
console.log(str.charAt(2));
console.log(str.length);

let s = "a b c d";
console.log(s.length);

//endsWith
console.log(str.endsWith("l"));
console.log(str.endsWith("e"));

//includes

console.log(str.includes("cat"));

//indexOf

console.log(str.indexOf("c"));

//lastIndexOf

console.log(str.indexOf("e")); //0
console.log(str.lastIndexOf("e")); //46

//length

console.log(str.length); //47
console.log(s.length);   //7 

//replace

console.log(str.replace("slap","punch"));

//search

console.log(str.search("slap")); //28

console.log(str.search("cat")); //6

//substr

console.log(str.substring(0,6)); //every
console.log(str.substring(6,9)); //cat
console.log(str.substring(17,22)); //life
console.log(str.substring(28,32)); //slap

console.log(str.substring(6,0)); //every


let email = "sarika12@gmail.com"
let v = email.split("@");
console.log(v);


