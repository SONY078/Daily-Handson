let employee1 =
{
    ename : "sachi",
    eid : 2022012 ,
    designation : "software developer" 


}
let employee2 =
{
    ename : "sachi",
    eid : 2022013 ,
    designation : "front-end developer" 
}
let employee3 =
{
    ename : "karthi",
    eid : 2022014 ,
    designation : "software developer" 
}

function showDetails(age,gender)
{
    console.log(this.ename , this.designation , age,gender) ;
}

showDetails.call(employee1,22,"M");
showDetails.call(employee2,22,"M");
showDetails.call(employee3,22,"M");

showDetails.apply(employee3,[23,"M"]);
showDetails.apply(employee3,[22,"M"]);
showDetails.apply(employee3,[21,"M"]);

showDetails.bind(employee1)(23,"M");

let r = showDetails.bind(employee2);
r(22,"M");

let r1 = showDetails.bind(employee3);
r(21,"M");



const StudentPrototype = 
{
    calcAge(params)
    {
        console.log(2022 - this.bYear);
    },
    initialise(fname,lname,bYear)
    {
        this.fname = fname;
        this.lname = lname ;
        this.bYear =bYear;
    }
}

const rocky = Object.create(StudentPrototype);
console.log(rocky);

rocky.initialise("rocky","raj",1990);
rocky.calcAge();

const rahul = Object.create(StudentPrototype);
console.log(rahul);

rahul.name = "rahul";
rahul.bYear = 2000 ;
rahul.calcAge();

console.log(rahul);

//classes in JS doesn't work exactly the same as java classes.
//they are syntactic sugar to object prototype ,instances that we have read.
//they are special kind of functions.

//1. classes are also first class functions.
//2. classes are not hoisted/don't support hoisting.

const ClassPrototype = class
{
    constructor(fname,lname,bYear)
    {
        this.fname = fname ;
        this.lname = lname ;
        this.bYear = bYear ;
    }
    calcAge()
    {
        console.log(2022 - this.bYear);        
    }
}

const jaan = new ClassPrototype("jaan","sindh",1995);
console.log(jaan);
jaan.calcAge();



console.log(jaan.__proto__);
ClassPrototype.prototype.greet = function()
{
    console.log("Hello !!");
}
jaan.greet();