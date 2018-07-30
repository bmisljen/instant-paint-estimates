(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  
   $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('hide');


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  $('[id^=upvotebutton]').click(function(){
	  var questionid;
	  questionid = $(this).attr("data-questionid");
	  $.ajax({
		    url: "/qanda/voteup/",
		    type:"GET",
	        dataType:'json',
	        data:{
                question_id: questionid
          },
          success: function( data ) 
          {
        	 setTimeout(function(){// wait for 5 secs(2)
        	 location.reload(); // then reload the page.(3)
        	 }, 500); 	   
          }	  
	  })
  });
  
  $('[id^=downvotebutton]').click(function(){
	  var questionid;
	  questionid = $(this).attr("data-questionid");
	  $.ajax({
		    url: "/qanda/votedown/",
		    type:"GET",
	        dataType:'json',
	        data:{
                question_id: questionid
          },
          success: function( data ) 
          {
        	 setTimeout(function(){// wait for 5 secs(2)
        	 location.reload(); // then reload the page.(3)
        	 }, 500); 	   
          }	  
	  })
  });
  
})(jQuery); // End of use strict