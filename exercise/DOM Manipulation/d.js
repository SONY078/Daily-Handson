
function h1Tag() {
    const element = document.getElementById('h1').innerHTML = "MERN stack";
    console.log(element);
}

// Write code to get 1st H1 element from a webpage using DOM

const element1 = document.getElementsByTagName("h1");
let h1Element = element1[0].innerText;
console.log(h1Element);



// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function time(){
 const time = new Date();
const element2 = document.getElementById('time').innerHTML = time;
// console.log(element1);
}
setInterval(time,1000);
time();

//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"


function replaceText(){
   document.getElementsByClassName('replace')[0].innerText = "Welcome to Elevation academy";  
}

// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text
$('#text').click(function(){
$('#hide').hide();
})