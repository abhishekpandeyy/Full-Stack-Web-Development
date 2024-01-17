//alert("hellooo")   checking 

var b=document.querySelector("button");

var flag=true;
b.addEventListener("click",function(){
    if(flag)
    {
        b.innerHTML="Following";
        b.style.backgroundColor="grey";
        b.style.color="white";
       flag=false;
    }
    else{
        b.innerHTML="Follow";
        b.style.backgroundColor="#0000ffb1";
        b.style.color="black";
        flag=true;
    }
})


