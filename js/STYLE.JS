$(window).on("load", function(){



 $('.preloader').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});




$(document).ready(function(){
    
     
    $(".language").click(function(){
    $(".dropdown-language").slideToggle();
}) ;
    
    
     $(".same-height").matchHeight();
  
    $(".our-missions").matchHeight();
    $(".blog-content").matchHeight();
    
    
        /*
        $(function(){
            
                let maxHeight=0;
    
    $(".same-height").each(function(){
        
        
        
        if($(this).height() > maxHeight){
            
            maxHeight = $(this).height();
        }
    })
    
    
     $(".same-height").height(maxHeight);  
     
        });
  
     
   
    */
       /* 
      if (window.innerWidth <=992){
          
  
        
       let maxHeight=0;
    
    $(".package-body").each(function(){
        
        
        
        if($(this).height() > maxHeight){
            
            maxHeight = $(this).height();
        }
    })
    
    
     $(".package-body").height(maxHeight);  
    
     
    
        } 
    
 */
    
   /* 
     $(".our-missions").each(function(){
        
        let maxHeight =0; 
        
        if($(this).height() > maxHeight){
            
            maxHeight = $(this).height();
        }
         $(".our-missions").height(maxHeight);
    });
    */

    
    
    
    
    
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
    
    
      
 /*

     $(".blog-item").each(function(){
        
                let maxHeight =0; 

        if($(this).height() > maxHeight){
            
            maxHeight = $(this).height();
        }
         
         $(".blog-item").height(maxHeight);

    });
*/

    
    
       
  $('.counter').counterUp({
    delay: 20, // the delay time in ms
    time: 1000 // the speed time in ms
  });
  


    
   
});






