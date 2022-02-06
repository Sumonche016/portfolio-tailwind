var menuList = document.querySelector('.menu-list');
var cancel = document.querySelector('.cancel-btn');
var menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = () => {
    menuList.classList.add('right-0');

}
cancel.onclick = () => {
    menuList.classList.remove('right-0');

}





window.addEventListener('scroll', function() {

    let header = document.getElementById('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);

})



$(document).ready(function() {
    $('.ripples').ripples({
        resolution: 512,
        dropRadius: 15,
        perturbance: 0.03,

    });
})


$('#nav').onePageNav({
    filter: ':not(.external)'
});

AOS.init();