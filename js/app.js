
$(document).ready(function() {
    
    $('a').on('click', function(event) { 
    	event.preventDefault(); 
    	var val = $(this).attr('href');
       	$('#par1').load(val);
    });
    
  }); 