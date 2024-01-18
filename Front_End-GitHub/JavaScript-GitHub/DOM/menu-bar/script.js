
var menu=document.querySelector("#menu");
var win=document.querySelector("#window");
var flag=true;
menu.addEventListener("click" ,function(){
    if(flag==true){
        flag=false;
       win.style.top="0";
       menu.innerHTML=`<i class="ri-close-line"></i>`; 
    }
    else{
        menu.innerHTML=` <i class="ri-menu-line"></i>`;
        win.style.top="-100%";
        flag=true;
    }
})