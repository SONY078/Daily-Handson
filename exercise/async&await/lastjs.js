//What is callback function?
//A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

function ans()
{
    console.log("inside ans");
    let x =10 , y=2;
    let z = x*y;
    console.log("multiplication:",z);  
}

function mul()
{
    // let x =10 , y=2;
    // let z = x*y;
    // console.log("multiplication:",z);
    console.log("inside mul()");
    ans();
    
}
mul();


function PrintNumber()
{
    setTimeout(()=>
    {
        console.log("1");

        setTimeout(()=>
        {
            console.log("2");

            setTimeout(()=>
            {
                console.log("3");

                setTimeout(()=>
                {
                    console.log("4");
                    setTimeout(()=>
                    {
                        console.log("5");
                        setTimeout(()=>
                        {
                            console.log("6");
                            setTimeout(()=>
                            {
                                console.log("7");
                                
                                
                            },7000)
                            
                        },6000)
                        
                    },5000)
                    
                },4000)
            
            },3000)
        },2000)
    },1000)
}
PrintNumber();



let PrintNum1 = () =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve("1");
        },1000);
    })
}

let PrintNum2 = () =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve("2");
        },2000);
    })
}

let PrintNum3 = () =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve("3");
        },3000);
    })
}
let PrintNum4 = () =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve("4");
        },4000);
    })
}
let PrintNum5 = () =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve("5");
        },5000);
    })
}
let PrintNum6 = () =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve("6");
        },6000);
    })
}
let PrintNum7 = () =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve("7");
        },7000);
    })
}

const PrintNumbers = async () =>
{
    let r1 = await PrintNum1();
    console.log(r1);
    let r2 = await PrintNum2();
    console.log(r2);
    let r3 = await PrintNum3();
    console.log(r3);
    let r4 = await PrintNum4();
    console.log(r4);
    let r5 = await PrintNum5();
    console.log(r5);
    let r6 = await PrintNum6();
    console.log(r6);
    let r7 = await PrintNum7();
    console.log(r7);
}

PrintNumbers();

const promise = new Promise ((resolve,reject)=>{
    resolve()
})
promise.then(()=>{
    setTimeout(() => {
      console.log("1");  
    }, 1000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("2");  
    }, 2000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("3");  
    }, 3000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("4");  
    }, 4000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("5");  
    }, 5000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("6");  
    }, 6000);
})
promise.then(()=>{
    setTimeout(() => {
      console.log("7");  
    }, 7000);
})
// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
 const pass = new Promise((resolve,reject) =>{
     let x = 0   //x is not equal to 0 then it will go to else and then caught by .catch() method                                                   
     if(x==0){
         resolve(x);
     }
     else{
         reject(err);
     }
 })

 pass
 .then((x) =>{
     console.log("Passed") 
 })
 .catch((err) =>{
     console.log("Not passed");
 })

// Create examples to explain callback function


const name1 = (nameOfStudent) => {
    console.log("Hi",nameOfStudent);
}
const greeting = (student, callbackFunction) =>{
    callbackFunction(student);
}
greeting("Durga", name1);

// Create examples to explain callback hell function


const getEmployeeID = () => {
   
    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1,2,3,4,5];
        console.log(id);
        
        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
            
            setTimeout(() => {
                employeeDetails.gender = "Male",
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
               
                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                },2000);
           
            }, 2000);
        
        }, 2000)
  
    },2000);
}


// getEmployeeID();



//Create examples to explain promises function

const getEmployeeDetails = new Promise((resolve, reject) =>{
    setTimeout (() => {
        let employeeDetails = {
            name : "durga",
            age : 23
        }
       
        resolve(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

    }, 3000, );
   })

.then((employeeDetails) =>{
   console.log(employeeDetails);
})



//Create examples to explain async await function
const fn1 = () => {
    return "I am function one";
}
const fn3 = () => {
    return "I am function three"
}
const fn2 = () => {
    return new Promise((resolve,reject) =>  {
        setTimeout(() => {
            resolve ("I am function two")
        }, 3000);
    })
}

const callFns = async () =>{
    let res1 = fn1();
    console.log(res1);

    let res2 = await fn2();
    console.log(res2);


    let res3 = fn3();
    console.log(res3);
}

 callFns();

//  Create examples to explain promise.all function

const p1 = Promise.resolve(3);
const p2 = 2003;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise");
  }, 1000);
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // 
});