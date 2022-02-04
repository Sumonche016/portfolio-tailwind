$(document).ready(function() {
    $('#ripples').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,

    });
})

// one page

$('#nav').onePageNav();


// nav 
window.addEventListener('scroll', function() {

    let header = document.getElementById('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);

})


// scrollfy
// $(function() {
//     $.scrollify({
//         section: ".example-classname",
//     });
// });