/*==== MENU SHOW ====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==== REMOVE MENU MOBILE ====*/
const navLink = document.querySelectorAll('.nav_link') 

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==== SCROLL SECTIONS ACTIVE LINK ====*/

/*==== SCROLL  REVEAL ANIMATION ====*/

/*==== SCROLL HOME ====*/

/*==== SCROLL ABOUT ====*/

/*==== SCROLL SKILLS ====*/

/*====SCROLL PORTFOLIO ====*/
