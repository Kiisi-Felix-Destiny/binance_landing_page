let theme_color = document.querySelector(".b-header_theme")
let b_header = document.querySelector(".b-header")
let darkmode = document.querySelector(".darkmode");
console.log(b_header)

theme_color.addEventListener("click",()=>{
    if(darkmode.textContent == 'dark_mode'){
        darkmode.textContent = 'light_mode'
        b_header.style.background = 'rgb(24, 26, 32)'
        theme_color.style.color = '#fff'
    }else{
        b_header.style.background = '#fff'
        theme_color.style.color = 'rgb(24, 26, 32)'
        darkmode.textContent = 'dark_mode'
    }
})
