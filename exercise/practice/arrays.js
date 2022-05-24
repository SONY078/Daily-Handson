let a = [0,1,2,1,0,3,1,1,0,4,0,5,0,0];

let count = 0;
let b = a.filter(count => count ===0).length;
let c = a.filter(count => count === 1).length;
console.log("no.of zereos:",b);
console.log("no.of one's:",c);

let oddeven = [1,2,3,4,5,6,7,8,9,10];

let countodd = 0,counteven = 0;
for(let i=1; i<=oddeven.length;i++)
{
    if(oddeven[i] % 2 == 0)
    {
        counteven++;
    }
    else
    {
        countodd++;
    }    
}
console.log("even count:",counteven);
console.log("odd count:",countodd);

let str = ["hello"];


let c1 = 0;

v = [ "a","e","i","o","u"];

let vc = string => [...string].filter(c1 => 'aeiou'.includes(c1.toLowerCase())).length;

console.log("vowel count of 'hello':",vc('hello'));
console.log("vowel count of 'how are you':",vc('how are you'));
console.log("vowel count of 'fine':",vc('fine'));

// strg = str.toString();

// if(strg == v)
//     {
//         c1++;
//     }
// // for(let j=1;j<str.length-1;j++)
// // {
    
// // }
// console.log(c1);




