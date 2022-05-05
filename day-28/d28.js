let map = new Map();

map.set("name","sohi");
map.set("age",22);
map.set(221,"two");

console.log(map.get("221"));  //undefined
console.log(map.get(221));  //two
console.log(map.get("name")); //sohi

console.log(map.has("EMAIL"));  //false
console.log(map.has("sohi"));  //false
console.log(map.has("name"));  //true


map.delete(221);

// map.clear();

console.log(map);
console.log(map.size);

for(let k of map.keys())
{
    console.log(k);
}
for(let v of map.values())
{
    console.log(v);
}

for(let entry of map.entries())
{
    console.log(entry);
}


map.forEach(function(v,k)
{
    console.log(k,v);
})

let s = new Set();
s.add("litchi");
s.add("banana");
s.add("mango");
s.add("orange");
s.add("grapes");
s.add("apples");

console.log(s);

console.log(s.values());
console.log(s.keys());
console.log(s.entries());
console.log(s.has("kiwi"));
console.log(s.has("banana"));

// s.clear();

s.delete("banana");
console.log(s);
console.log("key");
for(let ky of s.keys())
{
    console.log(ky);
}

console.log("val");

for(let val of s.keys())
{
    console.log(val);
}

console.log("entry");

for(let en of s.keys())
{
    console.log(en);
}

let ky = ["apples","apples"];
console.log(ky[0]);


s.forEach(function(val,ky)
{
    console.log(ky,val);
})

console.log(s.size);






































