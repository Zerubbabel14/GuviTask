// Function to open settings
function openSettings() {
  var modal = document.getElementById("profileModal");
  modal.style.display = "block";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  var modal = document.getElementById("profileModal");
  modal.style.display = "none";
}
span.onclick = function() {
  var modal = document.getElementById("profileModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("profileModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("profileModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("profileModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
  function sendData() {
    var username = localStorage.getItem('username');
    // Serialize form data
    var formData = $('#profileForm').serializeArray();
    
    // Convert serialized form data to JSON format
    var jsonData = {};
    $.each(formData, function(index, field) {
      jsonData[field.name] = field.value;
    });  
    jsonData['username'] = username;
    // Convert JSON data to string
    var jsonString = JSON.stringify(jsonData);
    //Send AJAX request
    $.ajax({
      type: 'POST',
      url: 'php/profile.php', // Change this to your PHP script URL
      data: jsonString,
      success: function(response) {
        // Handle success response here
        console.log('Data sent successfully');
        console.log(response); // You can optionally do something with the response
        window.location.href="profile.html";
      },
      error: function(xhr, status, error) {
        console.error('Error sending data:', error);
      }
    });
  }
  
// Attach the sendData function to the form submission
$(document).ready(function() {
  $('#profileForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
      sendData(); // Call the sendData function
  });
}); 

function checkUsernameInMongoDB() {
  
  // Retrieve username from local storage
  const username = localStorage.getItem('username');
  
  // Check if username is present
  if (username) {
    // Send AJAX request to PHP script
    $.ajax({
      url: 'php/profile.php',
      type: 'GET',
      contentType: 'application/x-www-form-urlencoded',
      data: { username: username },
      success: function(response) {
        // Parse response JSON
        var responseData = JSON.parse(response);
        console.log(responseData.usedredis);
        // Handle response
        if (responseData.exists) {
          var data = responseData.data;
          $('#name').text('Name: ' + data.name);
          $('#bio').text('Bio: ' + data.bio);
          $('#contactInfo').html('Phone: ' + data.phone + '<br>Email: ' + data.email);
          $('#personalDetails').html('DOB: ' + data.dob + '<br>Address: ' + data.address);
          $('#interests').text('Interests: ' + data.interests);
          $('#education').text('Education: ' + data.education);
          $('#projects').text('Projects: ' + data.projects);
         // Reload the current window
        // window.location.reload();
        // window.location.reload();
          // Username exists, you can perform further actions here
          var modal = document.getElementById("settingsButton");
          model.style.display="None";
        } else {
          console.log('Username does not exist in MongoDB.');
          // Username doesn't exist, handle accordingly
        }
      },
      error: function(xhr, status, error) {
        console.error('Error:', status, error);
      }
    });
  } 
  }
  checkUsernameInMongoDB();
  //   function submitUpdate() {
    //     // Gather the data from the form fields
    //     var formData = {
      //         username : localStorage.getItem('username'),
      //         updateName: $('#updateName').val(),
      //         updateBio: $('#updateBio').val(),
      //         updatePhone: $('#updatePhone').val(),
      //         updateEmail: $('#updateEmail').val(),
      //         updateDob: $('#updateDob').val(),
      //         updateAddress: $('#updateAddress').val(),
      //         updateInterests: $('#updateInterests').val(),
      //         updateEducation: $('#updateEducation').val(),
      //         updateSkills: $('#updateSkills').val(),
      //         updateExperiences: $('#updateExperiences').val(),
      //         updateProjects: $('#updateProjects').val()
      //     };
      
      //     // Send the AJAX request
      //     $.ajax({
        //         url: '/GUVI-WEBASSIGNMENT/GUVI-webapp/php/profile.php', // Change 'your_php_script.php' to the path of your PHP script
        //         type: 'PUT',
        //         data: formData,
        //         success: function(response) {
          //             // Handle the success response here
          //             console.log(response);
          //         },
          //         error: function(xhr, status, error) {
            //             // Handle errors here
            //             console.error(xhr.responseText);
            //         }
            //     });
            // }
            // $(document).ready(function() {
              //     // Handle form submission
              //     $("#profileUpdateForm").submit(function(e) {
                //         e.preventDefault(); // Prevent the default form submission behavior
                
                //         // Serialize the form data
                //         var formData = $(this).serialize();
                
                //         // Send an AJAX request
                //         $.ajax({
                  //             url: '/GUVI-WEBASSIGNMENT/GUVI-webapp/php/profile.php', // Change this to your PHP server endpoint
                  //             type: 'PUT',
                  //             data: formData,
                  //             success: function(response) {
                    //                 // Handle success
                    //                 alert("Profile updated successfully");
            //                 console.log(response); // You can replace this with more sophisticated feedback
            //                 $("#updateForm").hide(); // Optionally, hide the form after successful update
            //             },
            //             error: function(xhr, status, error) {
              //                 // Handle error
              //                 alert("An error occurred");
              //                 console.log(xhr.responseText);
              //             }
              //         });
              //     });
              // });
              
              
    // function updateSettings(){
    //     var modal = document.getElementById("updateForm");
    //     modal.style.display = "block";
    //  }
    //  var span = document.getElementsByClassName("uclose")[0];
    //  span.onclick = function() {
    //     var modal = document.getElementById("updateForm");
    //     modal.style.display = "none";
    //   }
    //   span.onclick = function() {
    //     var modal = document.getElementById("updateForm");
    //     modal.style.display = "none";
    //   }