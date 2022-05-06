var n  = "$id";

// var nm="sohi";
// var nm1="sahi";
// console.log("my name is",nm,nm1);

let mobile = 
{
    brand : "samsung",
    weight : 189,
    isWorking : true,
    11 : "android version",
    displayInfo : function(){
        console.log(` the brand of any mobile is ${brand} and weight is ${weight} which is in workingcondition ${isWorking} , also with an android  version of ${11} `)
     }
}
console.log("samsung")
console.log(mobile);

let mobile1 = 
{
    brand : "samsung",
    weight : 189,
    isWorking : true,
    11 : "android version",
    displayInfo : function(){
        console.log(` the brand of any mobile is ${mobile1.brand} and weight is ${mobile1.weight} which is in workingcondition ${mobile1.isWorking} , also with an android  version of ${mobile[11]} `)
     }
}
console.log("using ")
console.log(mobile1.displayInfo());

let mobile2 = 
{
    brand : "samsung",
    weight : 189,
    isWorking : true,
    11 : "android version",
    displayInfo : function(){
        console.log(` the brand of any mobile is ${this.brand} and weight is ${this.weight} which is in workingcondition ${this.isWorking} , also with an android  version of ${this[11]} `)
     }
}
console.log("using this")
console.log(mobile2.displayInfo());


mobile.camera = "64px";
console.log("cam");
console.log(mobile);

let mb ={};
mb.brand = "realMe";
mb.weight = 150;
mb.isWorking = true ;
mb["camera"] = "64px";

console.log(mb);

function Computer(brand,OS,processor,storageType,version)
{
    this.brand = brand;
    this.OS = OS;
    this.processor = processor;
    this.storageType = storageType;
    this.version = version;
}

let Dell = new Computer("Dell","Windows","Intel","built-in",11);
let Acer = new Computer("Acer","Linux","Intel5","Hard-disk",12);
// console.log(Dell,Acer);
console.log(Dell);
console.log(Acer);
console.log(Dell.processor);

delete mobile.isWorking;
console.log(mobile.hasOwnProperty("camera"));

console.log(Object.keys(Dell));
console.log(Object.values(Dell));
for(const [k,v] of Object.entries(Acer))
{
    console.log(k,v);
}


value = 22; 

console.log(value);
console.log(this);    

//array 

let a =[1,2,3,4,5];
let b =[6,7,8,9,10];
console.log(...a.concat(b));
let c = [...a,...b];
console.log(...c);

