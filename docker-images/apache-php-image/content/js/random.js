$(function() {
   console.log("Random Number:"); 
  
   function randomNumber(){ 
   $.getJSON( "/api/random/", function(random) { 
      console.log(random); 
	     var message = random.randomNumber + " (" + random.lowerBound + "-" + random.upperBound + " )"; 
	  $( '#randomJQ' ).text(message);
	  
   });
 };
 randomNumber(); 
 setInterval( randomNumber, 1000 ); 
});