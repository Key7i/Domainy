$(document).ready(function(){
	
// external js: isotope.pkgd.js
$(window).load(function(){
// init Isotope
var $grid = $('.isotope-grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
    fitRows: {
        gutter: '.gutter-sizer'
    }
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
    });

    function Toggle() {
        $(this).find('.project-text').fadeToggle("fast");
    }
	$('.isotope-grid').on('mouseenter', '.grid-item', Toggle);
	$('.isotope-grid').on('mouseleave', '.grid-item', Toggle);
	

  // Add smooth scrolling on all links inside the navbar
  $("#navbar-scroll a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });


    // Target ID for Navbar Affix
//    $(".navbar-inverse").affix({
//        offset: { 
//            top: $("#features").outerHeight(true)
//        }
//    });

    
    /*
    $(document).on( 'scroll', function(){
        console.log('scroll top : ' + $(window).scrollTop());
        if($(window).scrollTop()>=$(".jumbotron").height())
        {
             $(".navbar").addClass("navbar-fixed-top");
        }
        
        if($(window).scrollTop()<$(".jumbotron").height())
        {
             $(".navbar").removeClass("navbar-fixed-top");
        }
    });
    */
    
    // lightcase lightbox for gallery
    $('a[data-rel^=lightcase]').lightcase();
    
}); // end of jQuery name space