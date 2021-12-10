var angle1=document.querySelector("#angle-1");
var angle2=document.querySelector("#angle-2");
var angle3=document.querySelector("#angle-3");
var browseBtn=document.querySelector("#btn");
var outputDiv=document.querySelector("#output");


function sumOfAngles(p,q,r){
     var sum=p+q+r;
    console.log(sum);
    if (sum==180){
        outputDiv.innerText=("Yah ! We can form a triangle")
    }else{
        outputDiv.innerText=("Oh no! we can't form a triangle!")
    }  
} 

browseBtn.addEventListener("click",calculateSumOfAngles);
function calculateSumOfAngles(){
   
   sumOfAngles(Number(angle1.value),Number(angle2.value),Number(angle3.value));
 }
    

 