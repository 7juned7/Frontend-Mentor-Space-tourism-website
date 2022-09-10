
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
menu.addEventListener("click",()=>{
    const visiblity = navigation.getAttribute("data-visible");
        if(visiblity === "false"){
        navigation.setAttribute("data-visible",true);
        open.setAttribute("data-visible",true);
        close.setAttribute("data-visible",true);
        
    }
        else{
            navigation.setAttribute("data-visible",false);
            open.setAttribute("data-visible",false);
            close.setAttribute("data-visible",false);
        
        }
      
})