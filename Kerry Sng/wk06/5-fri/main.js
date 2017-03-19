
$(function(){ //on document ready
  var number = $( "#cc-number" ),
      expDate = $( "#cc-expiration-date" ),
      cvv = $( "#cc-cvv" ),
      paymentButton = $( "#submit-payment");

      //First thing we have to do is use the JQuery plugin 'inputmask' to
      //mask our inputs because currently our form inputs accepts any kind of values
      // i.e. sofsofhwef or 3e34134. So we dont want that. Our card number for example
      // should have a specific format and can only contain digits and expiration date must
      // be in a specific format i.e. mm/yyyy

      //So let's set the mask. Credit card number will be grouped in 4 numbers, seperated
      //by a space. We can set the format of the credit card number (www.freeformatter.com/credit-card-number-generator-validator.html)
      //American express has a length of 15 digits and mastercard has a length between 16-19. So we want to have at
      //least 13 digits till 19 digits. The numbers 9 below represents digits between 0 and 9.
      number.inputmask("9999 9999 9999 9[999] [999]",{"placeholder": " "} );//13 is the minimal value, [] represents the optional values
      expDate.inputmask( "mm/yyyy");
      number.inputmask("999[9]",{"placeholder": " "} );
});
