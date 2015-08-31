jQuery(document).ready(function($){
  // Hide the answers using jQuery
  $('.Description').hide();
  
  // If you want the first one to show as a visual hint to the user, uncomment the next line
  //  $('.faq-block:first-of-type .Description').show();
  
  $('.Careers').click( function() {
    // if you want to have all others close when you click to open an item, uncomment the next line
    // $('.Description').hide();
    
    $(this).next().animate({
      
      // The combo of height and opacity gives a nice open-and-fade effect
      height: 'toggle',
      opacity: 'toggle',
  
    });
  });
  
});