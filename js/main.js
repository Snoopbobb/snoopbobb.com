$(function(){

	// Social media icons appear when scrolled down
	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

    	if (scroll < 500) {
    		$(".social-media").addClass("hide");
	     //>=, not <=
    	}
	    if (scroll >= 500) {
	        //clearHeader, not clearheader - caps H
	        $(".hide").removeClass("hide");
	    }

	});


	// Portfolio slide in during scroll down
	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

	    if (scroll >= 350) {
	        //clearHeader, not clearheader - caps H
	        $(".portfolio-item-hide").removeClass("portfolio-item-hide").addClass("portfolio-item animated slideInLeft");
	    }

	});


	// About slide in during scroll down
	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

	    if (scroll >= 2600) {
	        //clearHeader, not clearheader - caps H
	        $(".about-content-hide").removeClass("about-content-hide").addClass("animated slideInRight");
	    }

	});


	// Footer slide in during scrool down
	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

	    if (scroll >= 3530) {
	        //clearHeader, not clearheader - caps H
	        $(".footer-content-hide").removeClass("footer-content-hide").addClass("animated bounceInUp");
	    }

	});


	// Smooth scroll to inner page links
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
  	});

});