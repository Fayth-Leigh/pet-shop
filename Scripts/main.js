//Some Helper functions

/*function checkLength($text, $min= 1, $max= 10000, $trim= true){

	if ($trim)
	{
		$text = trim($text);
	}
	if (strlen($text) < $min || strlen($text) > $max)
	{
		return false;
	}
	return true;
}


function checkTextArea(text, max) {
	if (!checkLength(text,0,max)) {
		var numChars = text.length;
		var chopped = text.substr(0, max);
		var message = 'You typed ' + numChars + ' characters.\n';
		message += 'The limit is 100.';
		message += 'Your entry will be shortened to:\n\n' + chopped;
		window.alert(message); 
	}
}*/



function reportErrors(errors) {
    var msg = "There were some problems...\n";
    for (var i = 0; i<errors.length; i++) {
    var numError = i + 1;
                msg += "\n" + numError + ". " + errors[i];
            }
            window.alert(msg);  
}

/*var options = {
    beforeSubmit: validate,
    sucess: window.alert("Your request has been submitted!")
    }*/
    

function validate(form) {
    var reFirstName = /^([A-Za-z']+ )*[A-Za-z']+$/;
    var reLastName = /^([A-Za-z']+ )*[A-Za-z']+$/;
    var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
    var reAddress = /^[a-zA-Z\s\d\/]*\d[a-zA-Z\s\d\/]*$/;
    var reCity = /^([A-Za-z']+ )*[A-Za-z']+$/;
    var reState = /^[A-Z]{2}$/;
    var reZip = /^\d{5}(\-\d{4})?$/;
    var rePhone = /^\(?([2-9]\d\d)\)?[\-\. ]?([2-9]\d\d)[\-\. ]?(\d{4})$/;
    var rePetName = /^([A-Za-z']+ )*[A-Za-z']+$/;
      
    var firstname = $('#firstname').val();
    var lastname =  $('#lastname').val();
    var email =  $('#email').val();
    var address =  $('#address').val();
    var city =  $('#city').val();
    var state =  $('#state').val();
    var zip =  $('#zip').val();
    var phone =  $('#phone').val();
    var typeofpet =  $('#typeofpet').val();
    var breed = $('#breed').val();
    var petname =  $('#petname').val();
    var errors =[];
   
  if (!reEmail.test(email)) {
            errors[errors.length] = 'You must enter a valid email address.';
        }

   if (!reFirstName.test(firstname)) {
            errors[errors.length] = 'You must enter a name.';
        }

   if (!reLastName.test(lastname)) {
        errors[errors.length] = 'You must enter a name.';
        }

    if (!reCity.test(city)) {
        errors[errors.length] = 'You must enter an address.';
        }  
        
    if (!reAddress.test(address)) {
            errors[errors.length] = 'You must enter an address.';
        }
            
   if (!reState.test(state)) {
            errors[errors.length] = 'You must enter valid State abbreviation.';
        }
        
    if (!reZip.test(zip)) {
            errors[errors.length] = 'You must enter a valid zip code.';
        }
        
   if (!rePhone.test(phone)) {
            errors[errors.length] = 'You must enter valid phone number.';
        }
    
   if (!rePetName.test(petname)) {
            errors[errors.length] = 'You must enter your pets name.';
        }
        
   if (errors.length > 0) {    
        reportErrors(errors);
        return false; 
    } 
    
    return true;
}
    


