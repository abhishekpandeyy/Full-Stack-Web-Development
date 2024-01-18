var btn=document.querySelector("button");

var growth=document.querySelector(".growth");

var num=document.querySelector("h1");


//set time interval


btn.addEventListener("click",function(){
    setTimeout(() => {
        clearInterval(int);
        growth.style.width=`0%`;
        num.innerHTML=`0%`;
        btn.innerHTML="Download Now";
        btn.style.background="white";
        btn.style.color="black";
    }, 24380);
    let count=0;
    var int = setInterval(function(){
        if(count<=100)
        {num.innerHTML=`${count}%`;
        growth.style.width=`${count}%`;} 
        else{
            btn.innerHTML="Downloaded";
            btn.style.background="green";
            btn.style.color="white";
        }
        count++;
        //console.log(count);
    },200)
})


