console.log("Yeah...!!");

function Counted()
{
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var c = new Counted();
alert(c());
alert(c());
alert(c());
alert(c());

//output : 1 2 3 4

let count = 0;
(function immediate() 
    {
        if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
    })
();


//output : 1 0 

for (var i = 0; i < 3; i++)
{
    setTimeout(function log()
    {
      console.log(i); // What is logged?
    }, 1000);
}

//output : 3 3 3 

var AreaRect = function(length)
{
    

    function Areaof(width)
    {
        var area;
        area = width * length ;
        console.log(`the area of rectangle is ${area}`);
    }
    Areaof(5);
    return Areaof;

}

var a = new AreaRect(10);
a();

//output : the area of rectangle is 50 

const StudentCount = function()
{
    student = 0;
    function Count()
    {
        student++;
        console.log(`student count is ${student}`);
    }
    return Count;
}

let students = new StudentCount();
students();
students();
students();

//output :
// student count is 1
// student count is 2
// student count is 3

//Print Output

var a = 12;
(function ()
 {
    alert(a);
})
();

//output : 12

var a = 10;
var x = (function()
{
    
  var a = 12;
  return function()
   {
         alert(a);
   };
})
();
x();

//output : 12 

var globalVar = "xyz";

(function outerFunc(outerArg)
 {
    var outerVar = 'a';
    
    (function innerFunc(innerArg)
     {
    var innerVar = 'b';
    
    console.log(
        "outerArg = "  + outerArg + "\n" +
        "innerArg = "  + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })
    (456);
})
(123);

//output:
//outerArg = 123
//innerArg = 456
//outerVar = a
//innerVar = b
//globalVar = xyz