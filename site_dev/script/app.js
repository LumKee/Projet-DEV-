function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
}) (window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-46156385-1', 'cssscript.com');
ga('send', 'pageview');


$(".diamond-grid").diamonds({
    size : 280,
    gap : 8,
    hideIncompleteRow : false,
    autoRedraw : true,
    itemSelector :".block"
});
let slidebar = document.querySelectorAll("#none")
let hamburger = document.querySelectorAll(".hamburger")
function click(){
  slidebar.style.display='block'
}
hamburger.addEventListener('click', click());

// Diamond gallery




$(document).ready(function() {
    $('.js-scrollTo').on('click', function() {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
});


$('.slider').glide({
  autoplay: false,
  arrowsWrapperClass: 'slider-arrows',
  arrowRightText: '',
  arrowLeftText: ''
  console.log("test")
});


function initMap() {
  var uluru = {
    lat: 48.859252,
    lng: 2.431387
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
