(function($, document, window){
	function circularHeight(){
		var cp = $(".circular-process"),
			cw = cp.innerWidth();

		cp.height(cw);
	}
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
		circularHeight();
	});

	$(window).resize(function(){
		circularHeight();
	});

	$(window).load(function(){

	});

})(jQuery, document, window);