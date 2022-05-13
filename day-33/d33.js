console.log("Working....");



let student =
{
    fname : "sachi",
    lname : "gowtham",
    age : 22 
    // showDisplay : function()
    //                 {
    //                     console.log(this.fname,this.lname);
    //                 }
}
// student.showDisplay();

let student1 =
{
    name1 : "raji"
}
student1.__proto__ = student ;

console.log(student1.fname,student1.lname,student1.age);

let employee1 =
{
    ename : "sachi",
    eid : 2022012 ,
    designation : "software developer" ,
    showDetails : function(params)
                    {
                            console.log(this.ename,this.eid,this.designation);
                    }  
}

employee1.showDetails();

let employee2 =
{
    place : "bangalore"
}
let employee3 =
{
    salary : 52000
}

employee2.__proto__ = employee1 ;
employee3.__proto__ = employee2 ;
console.log(employee1);
console.log(employee2);
console.log(employee3);

console.log(employee1.ename,employee1.eid,employee1.designation);
console.log(employee2.ename,employee2.eid,employee2.designation,employee2.place);
console.log(employee3.ename,employee3.eid,employee3.designation,employee3.place,employee3.salary);


a = [1,2,3,4,5];
console.log(a.__proto__);//array 
console.log(Array.prototype); //generic array prototype
console.log(a.__proto__.__proto__); // object prototype
console.log(a.__proto__.__proto__.__proto__);//null


console.log(employee1.__proto__);  //object prototype {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(employee2.__proto__); //employee1 prototype {ename: 'sachi', eid: 2022012, designation: 'software developer'}
console.log(employee2.__proto__.__proto__); //employee1 object prototype
console.log(employee2.__proto__.__proto__.__proto__);//null


let employe1 =
{
    ename : "hari",
    eid : 2022012 ,
    designation : "software developer" ,
    showDetail : function(params)
                    {
                            console.log(this.ename,this.eid,this.designation);
                    }  
}
let employe2 =
{
    ename : "sachi",
    eid : 2022013 ,
    designation : "front-end developer" ,
    // showDetail : function(params)
    //                 {
    //                         console.log(this.ename,this.eid,this.designation);
    //                 }  
}
let employe3 =
{
    ename : "karthi",
    eid : 2022014 ,
    designation : "software developer" ,
    // showDetail : function(params)
    //                 {
    //                         console.log(this.ename,this.eid,this.designation);
    //                 }  
}

employe1.showDetail();
employe1.showDetail.call(employe2);
employe1.showDetail.call(employe3);
employe1.showDetail.apply(employe3);
let r = employe1.showDetail.bind(employe3);
r();
// employe2.showDetail();
// employe3.showDetail();
