console.log("JS file connected");

document.getElementById("submit").addEventListener("click", function () {
  const name = document.getElementById("username").value.trim();
  const greeting = name ? `Hello, ${name}!` : "Please enter your name.";
  document.getElementById("greetingMessage").textContent = greeting;
});
