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
});

// Diamond gallery

$(".diamond-grid").diamonds({
  size: 100,
  gap: 5,
  hideIncompleteRow: false,
  autoRedraw: true,
  itemSelector: ".item"
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
