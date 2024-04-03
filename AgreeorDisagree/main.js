// Define a function to check the user's answer
function checkAnswer() {
    // Get the radio button elements by their name
    var radios = document.getElementsByName("answer");
    // Declare a variable to store the selected value
    var selectedValue;
    // Loop through the radio buttons and find the checked one
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        // Assign the value of the checked radio button to the variable
        selectedValue = radios[i].value;
        // Break the loop
        break;
      }
    }
    // Get the message element by its id
    var message = document.getElementById("message");
    // Compare the selected value with the correct answer
    if (selectedValue == "agree") {
      // If the user agrees, display a positive message
      message.innerHTML = "You are right!";
    } else {
      // If the user disagrees, display a negative message
      message.innerHTML = "You are wrong!";
    }
  }
