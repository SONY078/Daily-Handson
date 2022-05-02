console.log("working........")

let nam=["sathe","lucky","raj"];
console.log(nam);

let nam2=[];

nam2[0]="rinu";
nam2[1]="konu";
nam2[2]="donu";


console.log(nam2);

//create an array using constructor

let nam3 = new Array("lee","han","chan","min");
console.log(nam3);

let data = new Array("sony","btech","504","vijayawada");
console.log(data);


//push
nam3.push("hyunjin");
nam3.push(3);
console.log(nam3);

//pop
nam3.pop();
nam3.pop();
console.log(nam3);

//shift
nam3.shift();
console.log(nam3);

//unshift
nam3.unshift("lee know");
console.log(nam3);

nam3.push("binnie","hyunjin","felix","IN");
console.log(nam3);

//length

console.log(nam3.length);

//IndexOf

let n1 = [10,20,30,40,50,50,50];
let n2 = [1, 2, 3, 4, 5];

console.log(n1.indexOf(30));
console.log(n1.lastIndexOf(50));
console.log(n1.lastIndexOf(5)); // -1 , represents null value cuz there is no value 5.


//concat

c = n1.concat(n2);
console.log(c);

console.log(n1.concat(n2));

//join
console.log(n1.join(" , "));

//reverse

console.log(n1.reverse());

let n3 = ["sonu", "donu", "dori"];
console.log(n3.sort());

console.log(nam3.sort().reverse());

//splice ans slice
let n4 = [1,2,3,4,5,6,7,8,9,10];
console.log(n4); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
n4.splice(2,2,3,5,6,8);
console.log(n4); // [1, 2, 3, 5, 6, 8, 5, 6, 7, 8, 9, 10]

//slice : starting index is inclusive and last index is exclusive.,not included.
console.log(n4.slice(2,6)); //[3, 5, 6, 8]
console.log(n4); //[1, 2, 3, 5, 6, 8, 5, 6, 7, 8, 9, 10]


