function checkAge() {
    // Get the input element by its id
    var age = document.getElementById("age");

    // Get the value of the input element and convert it to a number
    var ageValue = Number(age.value);

    // Get the message element by its id
    var message = document.getElementById("message");

    // Compare the age value with the minimum voting age
    if (ageValue >= 18) {
      // If the age value is greater than or equal to 18, display a positive message
      message.innerHTML = "You are eligible to vote.";
        
      } else {
      // If the age value is less than 18, display a negative message
      message.innerHTML = "You are not eligible to vote.";
    }
  };

