console.log("Working!! let's get into the code now....");

let a = document.getElementById("text");
let b = document.getElementsByTagName("h1");
let c = document.getElementsByClassName("box");
// let d = document.getElementsByTagName("h1").style.color = "red";

function changeText()
{
    const changeText = document.getElementsByTagName("h1");
    changeText[0].innerHTML = "Hello World";
}
function changeDirection()
{
    const changeDirection = document.getElementsByClassName("i");
    changeDirection[0].style.flexDirection = "column";
}


// 7.
function changeColor()
{
    const changeColor = document.getElementsByClassName("heading");
    // const changeColor = document.getElementsByTagName("h1");
    changeColor[0].style.color = "red";
}
function replaceText()
{
    const replaceText = document.getElementsByClassName("replace");
    replaceText[0].innerHTML = "Welcome to Elevation Academy" ;
}

    const d = new Date();

    let h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    document.getElementById("hours").innerHTML = h + "<br>Hours" ; 
    

    let ap = d.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("ampm").innerHTML = ap ;

    let s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    document.getElementById("seconds").innerHTML = s + "<br>Seconds" ;

    let m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    document.getElementById("minutes").innerHTML = m + "<br>Minutes" ;

    // function validate()
    // {
        
        

    // regexVarTest = regexVar.test(y);
    // if(regexVarTest>95)
    // {
    //     console.log("birth year" ,y);
    // }
    // else
    // {
    //     console.log("enter age > 95");
        
    // }
    // }



 //8. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function printValue()
{
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}

//9 form
document.write("<br>");
document.write("<br>");
document.write("\n");

function formDetails()
{
    var form = document.createElement("form")
    // form.setAttribute("method","get")
    // document.write("Name");
    var name = document.createElement("input");
    document.write("<br>");
    name.setAttribute("type","text");
    name.setAttribute("name","Fullname");
    name.setAttribute("placeholder","Fullname");
    document.write("<br>");
    document.write("<br>");
    var linebreak = '\n';

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    document.write("<br>");
    document.write("<br>");

    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("value","+91 - ");
    phoneNo.setAttribute("maxlength","16");
    document.write("<br>");
    document.write("<br>");

    var year = document.createElement("input");
    year.setAttribute("type","date");
    year.setAttribute("name","DOB");
    year.setAttribute("min","1995-01-01");

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    
    form.appendChild(name);
    document.write("<br>");

    form.appendChild(email);
    document.write("<br>");

    form.appendChild(phoneNo);
    document.write("<br>");

    form.appendChild(year);
    document.write("<br>");

    form.appendChild(submit);
    document.write("<br>");

    document.getElementsByClassName("form")[0].appendChild(form);
   
   
}
formDetails();