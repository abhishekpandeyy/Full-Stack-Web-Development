var button=document.querySelector(".connect");
var flag=true;
var rel=document.querySelector(".relation");
var cover=document.querySelector(".cover");
var naam=document.querySelector(".name");
var about=document.querySelector("p");
var count=0;
button.addEventListener("click",function(){
if(count<5){
var num=Math.random()*5000;
num=Math.floor(num);        
        if(flag){
            setTimeout(function(){
                rel.innerHTML="Friends";
                rel.style.color="green";
                flag=false;
                button.innerHTML="Remove Friend";
                button.style.color="#666";
                // console.log(num);
            },10)
            }
            else{
            rel.innerHTML="Stranger";
            rel.style.color="red";
            flag=true;
            button.innerHTML="Add Friend";
            button.style.color="rgb(66, 75, 254)";
            }
            count++;
            }
            else{
                cover.innerHTML=`<img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png" alt="">`; 
                naam.innerHTML="User";
                about.innerHTML="Not found";
                rel.innerHTML="";
                button.innerHTML="";
            }
})
