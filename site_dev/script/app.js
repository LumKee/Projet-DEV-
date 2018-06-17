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
