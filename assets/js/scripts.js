var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
var anchorTrigger = document.querySelector('#main-menu-mobile ul li a');
var anchorTrigger2 = document.querySelector('#main-menu-mobile ul li:nth-of-type(2) a');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

anchorTrigger.onclick = function() {
    menuContainer.classList.remove('open');
    menuTrigger.classList.remove('is-active')
    body.classList.remove('lock-scroll')
}

anchorTrigger2.onclick = function() {
    menuContainer.classList.remove('open');
    menuTrigger.classList.remove('is-active')
    body.classList.remove('lock-scroll')
}