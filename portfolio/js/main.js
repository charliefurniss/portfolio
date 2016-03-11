document.addEventListener("DOMContentLoaded", function() {
	console.log("hello");

	$("#simon-head").click(function(){
	    $("#simon-details").slideToggle();
	});

	$("#cellarbook-head").click(function(){
	    $("#cellarbook-details").slideToggle();
	});

	$("#trackit-head").click(function(){
	    $("#trackit-details").slideToggle();
	});

	$("#roadtrip-head").click(function(){
	    $("#roadtrip-details").slideToggle();
	});
})