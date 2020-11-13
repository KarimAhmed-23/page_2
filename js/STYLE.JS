$(window).on("load", function(){



 $('.preloader').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});




$(document).ready(function(){
    
     
    $(".language").click(function(){
    $(".dropdown-conutry").slideToggle();
}) ;
    
    
     $(".same-height").matchHeight();
     $(".comparison-details").matchHeight();

  

    $(".our-missions p").matchHeight();
	$(".Hosting-clary-content p").matchHeight();


    $(".blog-content").matchHeight();
    
    
    
    
    
    
$(".accordion-title").click(function() {
  const $accordion_wrapper = $(this).parent();
  const $accordion_content = $(this).parent().find(".accordion-content");
  const $accordion_open = "accordion--open";

  if ($accordion_wrapper.hasClass($accordion_open)) {
    $accordion_content.slideUp();                     
    $accordion_wrapper.removeClass($accordion_open); 
  }
 
  else {
    $accordion_content.slideDown();                 
    $accordion_wrapper.addClass($accordion_open);   
  }
});
    
    
      

    
       
  $('.counter').counterUp({
    delay: 20, // the delay time in ms
    time: 1000 // the speed time in ms
  });
	
  
$(".footer-menu h5").matchHeight();

$(".footer-menu ul").matchHeight();

    
   
});



