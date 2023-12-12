function validateForm()
{
  var flag = false;
    // Reset error messages
    resetErrorMessages();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') 
    {
        flag = true;
        document.getElementById("msg").textContent = "Please! fill the required fields.";
    }
    else
    {
    // Check if Name contain only characters
    if (!isAlpha(name)) {
      document.getElementById("namemsg").textContent = "Name must have alphabetical characters only";
      flag= true; 
    }
    else
    {
        document.getElementById("msg").textContent = "Message sent successfully";
     resetForm();
   }
  }
}

      function resetErrorMessages() {
          var errorElements = document.getElementsByClassName('error-message');
          for (var i = 0; i < errorElements.length; i++) {
              errorElements[i].textContent = '';
          }
      }
  function isAlpha(value) {
    return /^[a-zA-Z]+$/.test(value);
  }
  function resetForm() {
  var form = document.getElementById('myform');

  if (form) {
      form.reset();
      document.getElementById("namemsg").textContent ="";
  } 
  } 