document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("changeTextBtn");
  var message = document.getElementById("message");

  button.addEventListener("click", function() {
    if (message.textContent === "Hello, World!") {
      message.textContent = "You clicked the button!";
    } else {
      message.textContent = "Hello, World!";
    }
  });
});