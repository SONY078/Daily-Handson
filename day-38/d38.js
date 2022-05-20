//JQuery :
//--------
 //         is a JS Library which provides

 //APPLICATION PROGRAMMING INTERFACE(API)//
//It connects two applications to pass data from one to another ......

//AJAX - Its helps us to query the API's. It allows us to make the server calls and display the data without
// reloading the pages.
//It allows us to communicate with remote webserver in an asynchronous way with help of 
 //AJAX calls, we can request data from web servers dynamically. It helps us to create CRUD applications...




//  $("button").click(function(){
//      $.ajax({
//                 url : "https://jsonplaceholder.typicode.com/todos/1",
//                 type : "GET",
//                 success : function(response)
//                 {
//                     console.log(response);
//                     document.getElementById("naming").innerHTML = response.title ;
//                     document.getElementById("naming").innerHTML = response.id ;
//                     document.getElementById("naming").innerHTML = response.userId ;
//                     document.getElementById("naming").innerHTML = response.completed ;

//                 }
                
//          })
     
//  })




//CALLBACK :
// They are just a name or convention for using Javascript functions. 
//It instead of returning results immediately like other functions, takes time to produce the result. 
//These are more of like an IO Operations.



const getEmployeeID = () =>
{
    setTimeout(() => 
    {
        console.log("Fetching the employee details");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout(() =>
        {
            let employeeDetails = 
            {
                name : "Kai",
                age : 20
            }
            console.log(`the name of the employee is ${employeeDetails.name} and the age is ${employeeDetails.age}`);

            setTimeout(() =>
            {
                employeeDetails.genger = "Male",
                console.log(`the gender is ${employeeDetails.genger}`);

                setTimeout(() =>
                {


                    employeeDetails.salary = "20L",
                    console.log(`the salary of the employee is ${employeeDetails.salary}`);

                    setTimeout(() =>
                    {
                        employeeDetails.Designation = "Youtuber",
                        console.log(`the designation of the employee is ${employeeDetails.Designation}`);
                    },5000)


                },4000)


            },3000)


        },2000)

    },1000)

}

getEmployeeID();


