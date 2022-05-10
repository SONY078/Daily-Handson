console.log("Working.....");
const r = document.getElementById("message");
console.log(r);
console.log(r.innerHTML);
console.log(r.innerText);

const e = document.getElementsByClassName("message");
console.log(e);
console.log(e.innerHTML);
console.log(e.innerText);

const e1 = document.getElementsByClassName("im");
console.log(e1);
console.log(e1[0].innerHTML);
console.log(e1[0].innerText);
console.log(e1[1].innerHTML);
console.log(e1[1].innerText);
console.log(e1[2].innerHTML);
console.log(e1[2].innerText);
console.log(e1[3].innerHTML);
console.log(e1[3].innerText);

const e2 = document.getElementsByTagName("span");
console.log(e2);
console.log(e2[0].innerHTML);
console.log(e2[0].innerText);
console.log(e2[1].innerHTML);
console.log(e2[1].innerText);
console.log(e2[2].innerHTML);
console.log(e2[2].innerText);
console.log(e2[3].innerHTML);
console.log(e2[3].innerText);

function changeText()
{
    const changeText = document.getElementsByTagName("h2");
    console.log(changeText[0].innerHTML);
    changeText[0].innerText = "Prepbytes";
    console.log(changeText[0].innerHTML);
    // console.log(changeText[0].innerHTML);

}

function changeColor()
{
    const changeColor = document.getElementsByClassName("im");
    changeColor[0].style.color = "blue";
    changeColor[1].style.color = "green";
    changeColor[2].style.color = "black";
    // changeColor[3].style.bgcolor = "purple" ;
    changeColor[3].style.display = "none";
    // changeColor[0].style.font-weight = "20px";
     
}