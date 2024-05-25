navLogo = document.querySelectorAll(".nav-logo")[0]
navWrap = document.querySelectorAll(".navigation")[0]
navLink = document.querySelectorAll(".nav-link")

function klikNav1(){    
    navWrap.style.display = "flex"

    for(var i = 0; i < 5; i++){
        navLink[i].style.display = "block"
    }

    navLogo.src = "img/icons8-close.svg"
    navLogo.style.position = "fixed"

    navLogo.onclick = klikNav2
}

function klikNav2(){    
    navWrap.style.display = "none"

    for(var i = 0; i < 5; i++){
        navLink[i].style.display = "none"
    }

    navLogo.src = "img/menu-svgrepo-com.svg"
    navLogo.style.position = "absolute"

    navLogo.onclick = klikNav1
}

navLogo.onclick = klikNav1

