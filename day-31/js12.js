console.log("Working....");


const e = document.getElementsByClassName("cards");
console.log(e);

function changeDirection()
{
    const e = document.getElementsByClassName("cards");
    console.log(e);
    e[0].style.flexDirection = "column";
    // e[0].style.color = "black";
}

function changeColor()
{
    const e1 = document.getElementsByClassName("card1");
    const e2 = document.getElementsByClassName("card2");
    const e3 = document.getElementsByClassName("card3");
    const change = document.getElementsByTagName("h1");
    console.log(e1);
    console.log(change);
    change[0].innerHTML = "what's up";
    change.innerHTML = '<img src="./download.png"/>';
    // change[0].innerHTML = <div>"what's up"</div>;
    // e[0].style.flexDirection = "column";
    console.log(e2);
    console.log(e3);
    e1[0].style.backgroundColor = "black";   
    e2[0].style.backgroundColor = "blue"; 
    e3[0].style.backgroundColor = "yellow"; 
}
  

function changeRadius()
{
    const e4 = document.getElementsByClassName("card1");
    const e5 = document.getElementsByClassName("card2");
    const e6 = document.getElementsByClassName("card3");
    console.log(e4);
    console.log(e5);
    console.log(e6);
    // e[0].style.flexDirection = "column";
    // e[0].style.color = "black";  
    e4[0].style.borderRadius = "50%";  
    e5[0].style.borderRadius = "50%";  
    e6[0].style.borderRadius = "50%";  
}

function changeImage()
{
    
const imageChange = document.getElementsByTagName("img");
imageChange[0].src = "./hamster.jpg"

}

