
var b=document.querySelector("#bulb");
var btn=document.querySelector("#btn");
var flag=0;
btn.addEventListener("click",function()
{
    if(flag===0)
   { 
    b.style.backgroundColor="yellow";flag++;
    }
    else{
        b.style.backgroundColor="white"
        flag=0;
    }
})