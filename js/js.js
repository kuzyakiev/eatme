$(document).ready(function() {
	$('#fullpage').fullpage({
		onLeave: function(index, nextIndex, direction){
			var textNum = index + 1;

			$('.food-text').fadeOut(function(){

			});
			$('.food-text' + '-' + nextIndex).fadeIn(300);
		}
	});


	$("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
});