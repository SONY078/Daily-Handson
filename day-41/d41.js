console.log("Working....");

const handleSubmit = () =>
{
    const username = document.getElementById('name').value;
    console.log(username);

    const email = document.getElementById('email').value;
    console.log(email);

    const phone = document.getElementById('no').value;
    console.log(phone);

    const address = document.getElementById('addr').value;
    console.log(address);

    localStorage.setItem("username",username);
    sessionStorage.setItem("username",username);
    localStorage.setItem("email",email);
    sessionStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    sessionStorage.setItem("phone",phone);
    localStorage.setItem("address",address);
    sessionStorage.setItem("address",address);

}
 //stores all the data in the local system 
const showDetails = () =>
{
    const sd = localStorage.getItem("username");
    console.log(sd);
}


//type error

// const b = 10 ;
// b = 20 ;   

// console.log(b());  //b is int but trying to print function

// Uncaught TypeError: Assignment to constant variable.

//reference error

// console.log(sachi);

//uncaught ReferenceError: sachi is not defined

// const a 10;

//Uncaught SyntaxError: Missing initializer in const declaration



//symbols are always guaranteed to be unique

let s1 = Symbol("baseball");
let s2 = Symbol("baseball");
console.log(s1 == s2);
console.log(s1);


// TDZ - Its a place where the let and const variables reside as long as they are not declared. It also has a default value of undefined only but if we try to access them, then will get ReferenceError

