

$("#Bhide").click(function()
{
    $("p").hide();
})

$("#BOpen").click(function()
{
    $("p").show();
})

$("#Tit").click(function()
{
    $.ajax({

        url : "https://jsonplaceholder.typicode.com/todos/12",
               type : "GET",    
               success : function(response)
               {
                   console.log(response);
                //    document.getElementsByTagName("h1").innerHTML = response.title ;
                   document.getElementById("title").innerHTML = response.title ;
               }
    })
})


