function sendData(){
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirm_password = $('#confirm_password').val();
        if(password != confirm_password){
            alert("Enter same password");
            return;
        }

        // Data to be sent to the PHP file
        var data = {
            username: username,
            email: email,
            password: password
        };

        // AJAX request
        $.ajax({
            type: 'POST',
            url: 'php/register.php', // URL to your PHP file
            data: data,
            success: function(response){
                alert("Registration Successful");
                window.location.href = "login.html";
                // Handle success
                // You can add further handling here, like showing a success message to the user.
            },
            error: function(xhr, status, error){
                // Handle errors
                console.error(xhr.responseText);
                // You can add further error handling here, like showing an error message to the user.
            }
        });
}
  
$(document).ready(function() {
    $('button').click(function(event) {
        event.preventDefault(); // Prevent default form submission
        sendData(); // Call the sendData function
    });
  }); 
