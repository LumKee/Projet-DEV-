// console.log('hello')

$('.slider').glide({
  autoplay: false,
  arrowsWrapperClass: 'slider-arrows',
  arrowRightText: '',
  arrowLeftText: ''
});

// Diamond gallery

$(".diamond-grid").diamonds({
	  size : 150,
    gap : 5,
   	hideIncompleteRow : false,
    autoRedraw : true,
    itemSelector :".item"
});

function initMap() {
        var uluru = {lat: 48.859252 , lng: 2.431387};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
