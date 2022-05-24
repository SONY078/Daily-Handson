// Promises - Promises are used to handle asynchronous operations in JS. 
//They are easy to manage when dealing with multiple asynchronous operations
//where multiple callbacks can create callback hells leading to unmanageable code.
//This doesn't means that promises only used for avoiding callback hells , 
//instead they are often used for handling asynchronous opertions.

//promises take two executor functions as parameters , namely resolve and reject . 
//If the data is fetched correctly , then the control is passed to resolve method which in turn calls .then() method.
// but if the data isn't fetched for some reasons
// i.e there is an error , then the reject method is called which further calls the .catch() method.   

// There are three stages 
// 1. Pending - when the promise is still executing i.e not yet resloved/rejected are called in pending stage.
//2. Resolved/fulfilled - when a promise is resolved or have fetched the data correctly, 
//it ends up into resolved state.
//3. Rejected - When the promise fails in fetching the result , it ends up into rejected state.
console.log("working")
//promise creation
const getEmployeeID = new Promise((resolve , reject) =>
{
    setTimeout(() => 
    {
            let id = [1,2,3,4,5];
            resolve(id);
            reject("the data isn't found");

    },2000);

})

const getEmployeeDetails = (data) => 
{
    return new Promise((resolve,reject) =>
    {
        setTimeout((data)=> 
        {
            let employeeDetails = 
            {
                name : " Suno",
                age : 20 ,
            }
            
            console.log(data);
            // resolve(data);
            resolve(`the employee name is ${employeeDetails.name} and age is ${employeeDetails.age}`);
        },3000,data);
    })
}


//promise consuming - used for consumption of promise 
getEmployeeID
    .then((id) => {
        // console.log(id);
//         getEmployeeDetails("Hi").then((data) =>
//         {
//             console.log("Iam inside the then method",data);
//         })
    })

    .catch((err)=>
    {
        console.log("the error is caught :",err);
    })

    // .finally(() =>
    // {
    //     console.log("end of the program");
    // })

    let promise =new Promise((resolve,reject)=>
    {
        resolve();
    })

promise.then(()=>
{
    setTimeout(()=>
    {
        console.log("first call");
    },1000)
}).then(()=>
{
    setTimeout(()=>
    {
        console.log("second call");
    },3000)
}).then(()=>
{
    setTimeout(()=>
    {
        console.log("third call");
    },4000)
})
