var burger= document.querySelector('.burger');
var navbar= document.querySelector('.navbar');
var navList= document.querySelector('.nav-list');
var rightNav= document.querySelector('.rightNav');



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})