$(document).ready(function() {
	$('#fullpage').fullpage({
		onLeave: function(index, nextIndex, direction){
			var textNum = index + 1;

			$('.food-text').fadeOut(function(){

			});
			$('.food-text' + '-' + nextIndex).fadeIn(300);
		}
	});
});