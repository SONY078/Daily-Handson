console.log("Working......");



const StudentPrototype = 
{
    CalcAge()
    {
        console.log(2022-this.bYear);
    },
    Initialise(fname,lname,bYear)
    {
        this.fname =fname ;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const sachi = Object.create(StudentPrototype);
console.log(sachi);
sachi.Initialise("sachi","gautham",2000);
console.log(sachi);
sachi.CalcAge();

const PersonPrototype = Object.create(StudentPrototype);
console.log(PersonPrototype);
PersonPrototype.InitialiseOne = function ( fname , lname ,bYear , course)
                                {
                                    StudentPrototype.Initialise.call(this, fname,lname,bYear);
                                    this.course = course;
                                }

PersonPrototype.introduce = function()
                            {
                                console.log(`My name is ${this.fname} ${this.lname} ${this.bYear} and course is ${this.course}`);
                            }

const jake = Object.create(PersonPrototype);
console.log(jake);
jake.InitialiseOne("jake","Zehan",2001,"MUSIC");
console.log(jake);
jake.CalcAge();
jake.introduce();

console.log(jake.__proto__);
console.log(jake.__proto__.__proto__);
console.log(jake.__proto__.__proto__.__proto__);
console.log(jake.__proto__.__proto__.__proto__.__proto__);

//Closures - Closure is not something that we create manually or explicitly . It happens automatically in certain situations which we need to recognize.
//Closure makes a function rememberr all the variables that existed at the functions birthplace intially.
// Any function always has access to the variable environment of the execution context in which the function was created.

const ticketBooking  = function()
{
    let Passengercount = 0 ;
    return function()
    {
        Passengercount ++;
        console.log(`the passenger count is ${Passengercount}`);
    };
};
const book = ticketBooking();
book();
book();
book();
console.dir(book);



