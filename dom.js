var button=document.getElementById("button");
var input=document.getElementById("input");
var ul=document.querySelector("ul");

function createlistelements(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addclick(){
    if(input.value.length>0)
    {
        createlistelements();
    }
}
function addenter(){
    if(input.value.length>0 && event.keyCode===13 )
    {
        createlistelements();
    }
}
button.addEventListener("click",addclick);
input.addEventListener("keypress",addenter);


//-----------------------------------------------------//

var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var css = document.querySelector("h3");

 
function setgradient(){
    body.style.background="linear-gradient(to right,"
  +color1.value
  +","
  +color2.value
  +")";

}
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);



/*color1.addEventListener("input",function(){
  body.style.background="linear-gradient(to right,"
  +color1.value
  +","
  +color2.value
  +")";
 })
 color2.addEventListener("input",function(){
     
    body.style.background="linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    +")";
   })*/


  
 

