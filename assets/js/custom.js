$(document).ready(function(){

	$('.scroll-btn').click(function(){
		$('html,body').animate({
			scrollTop:0
		}, 1000);

		return false;
	});

	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000)

		return false;
	});

	$('.ss').click(function(){
		$('.header-serch').toggle(1000);

		return false;
	});


});