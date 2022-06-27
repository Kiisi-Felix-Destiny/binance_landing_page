let themeColorBtn = document.querySelector(".b-header_theme")



let darkmode = document.querySelector(".darkmode_lightmode");

/*
'rgb(30, 35, 41)'
rgb(11, 14, 17)
'rgb(24, 26, 32)'
*/

themeColorBtn.addEventListener("click",()=>{
    if(darkmode.textContent == 'dark_mode'){
        darkmode.textContent = 'light_mode'


    }else{
        darkmode.textContent = 'dark_mode'


    }
})









let menuBar = document.querySelector(".b-header_menu-bar");
let closeBtn = document.querySelector(".b-sidenav-wrapper_close-btn"); 
let sidenav = document.querySelector(".b-sidenav");
let modal = document.querySelector(".b-modal");


menuBar.onclick = () =>{
    sidenav.classList.add("show-hide")  
    modal.classList.add("show-hide")  
    document.body.style.overflowY = 'hidden'
}
closeBtn.onclick = () =>{
    sidenav.classList.remove("show-hide")  
    modal.classList.remove("show-hide")  
    document.body.style.overflowY = 'visible'
}
modal.onclick = () =>{
    sidenav.classList.remove("show-hide")  
    modal.classList.remove("show-hide") 
    document.body.style.overflowY = 'visible'
}


const toggleHeader = document.querySelectorAll(".content .header");
const toggleBtn = document.querySelectorAll(".b-toggle");

toggleHeader.forEach(toggle=>{
    let x = toggle.children.item(1);
    let detail = toggle.nextElementSibling;
    toggle.addEventListener("click",()=>{
        if (!detail.classList.contains('active')) {
            detail.classList.add('active');
            detail.style.height = 'auto';
    
            let height = detail.clientHeight + "px";
    
            detail.style.height = '0px';
    
            setTimeout(function () {
                detail.style.height = height;
            }, 0);
        } else {
            detail.style.height = '0px';
    
            detail.addEventListener('transitionend', function () {
                detail.classList.remove('active');
            }, {
                once: true
            });
        }



        if(x.textContent == 'add'){
            x.textContent = "remove"
            
        }
        else{
            x.textContent = "add"
        }

    })
})


