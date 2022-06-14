let themeColorBtn = document.querySelector(".b-header_theme")

let body = document.querySelector("body")
let headerSection = document.querySelector(".b-header")
let getStartedSection = document.querySelector(".b-get_started")
let statsSection = document.querySelector(".b-stats")
let cryptocurrenciesSection = document.querySelector(".b-cryptocurrencies-wrapper")
let signupBoxSection = document.querySelector(".b-signup_box")
let cryptoPortfolioSection = document.querySelector(".b-crypto_portfolio")
let exploreSection = document.querySelector(".b-explore")
let trustedCryptoExchangeSection = document.querySelector(".b-trusted_crypto-exchange")
let startEarningTodaySection = document.querySelector(".b-start-earning-today")

let getStartedInput = document.querySelector(".b-get_started-input")







let switchColorThemeText = document.querySelectorAll(".b-switch-color-theme")
let switchColorThemeTextLight = document.querySelectorAll(".b-switch-color-theme-light")


let darkmode = document.querySelector(".darkmode_lightmode");

//IMG THEME
let getStartedImg = document.querySelector(".b-get_started-img")


themeColorBtn.addEventListener("click",()=>{
    if(darkmode.textContent == 'dark_mode'){
        darkmode.textContent = 'light_mode'

        body.style.background = 'rgb(30, 35, 41)'
        headerSection.style.background = 'rgb(24, 26, 32)'
        getStartedSection.style.background = 'rgb(30, 35, 41)'
        statsSection.style.background = 'rgb(30, 35, 41)'
        cryptocurrenciesSection.style.background = 'rgb(24, 26, 32)'
        signupBoxSection.style.background = 'rgb(24, 26, 32)'
        cryptoPortfolioSection.style.background = 'rgb(24, 26, 32)'
        exploreSection.style.background = 'rgb(24, 26, 32)'
        trustedCryptoExchangeSection.style.background = 'rgb(24, 26, 32)'
        startEarningTodaySection.style.background = 'rgb(11, 14, 17)'
        getStartedInput.style.background = 'rgb(30, 35, 41)'

        themeColorBtn.style.color = '#fff'
        for (v of switchColorThemeText){
            v.style.color = '#fff'
        }
        for (v of switchColorThemeTextLight){
            v.style.color = 'rgb(183, 189, 198)';
        }
        //getStartedImg.style.background = `url("./images/foreground-image-dark.png")`;
        getStartedImg.classList.add("b-get_started-dark")
        


    }else{
        darkmode.textContent = 'dark_mode'

        body.style.background = '#fff'
        headerSection.style.background = '#fff'
        getStartedSection.style.background = '#fff'
        statsSection.style.background = '#fff'
        cryptocurrenciesSection.style.background = '#fff'
        signupBoxSection.style.background = '#fff'
        cryptoPortfolioSection.style.background = '#fff'
        exploreSection.style.background = '#fff'
        trustedCryptoExchangeSection.style.background = '#fff'
        startEarningTodaySection.style.background = '#fff'
        getStartedInput.style.background = '#fff'


        themeColorBtn.style.color = 'rgb(24, 26, 32)'
        for (v of switchColorThemeText){
            v.style.color = 'rgb(24, 26, 32)'
        }
        for (v of switchColorThemeTextLight){
            v.style.color = '#474D57';
        }

        //getStartedImg.style.background = `url("./images/foreground-image-light.png")`
        getStartedImg.classList.remove("b-get_started-dark")

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