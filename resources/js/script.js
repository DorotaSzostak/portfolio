var vid = document.getElementById("bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
}

function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var navBtn = document.querySelector(".closebtn");

navBtn.addEventListener("click", function(){
    closeNav();
})



//var items = document.querySelectorAll('.projects__item');
//
//// get vendor transition property
//var docElemStyle = document.documentElement.style;
//var transitionProp = typeof docElemStyle.transition == 'string' ?
//    'transition' : 'WebkitTransition';
//
//window.onload = function() {
//  for ( var i=0; i < items.length; i++ ) {
//    var item = items[i];
//    // stagger transition with transitionDelay
//    item.style[ transitionProp + 'Delay' ] = ( i * 50 ) + 'ms';
//    item.classList.toggle('is-moved');
//  }
//};
