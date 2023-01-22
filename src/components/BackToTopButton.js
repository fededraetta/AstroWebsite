// Create the button
let button = document.createElement("button");
button.innerHTML = "Back to Top";

// Style the button
button.style.display = "none";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "30px";
button.style.zIndex = "99";
button.style.fontSize = "18px";
button.style.border = "none";
button.style.outline = "none";
button.style.backgroundColor = "rgb(0, 0, 0)";
button.style.color = "rgb(255, 255, 255)";
button.style.cursor = "pointer";
button.style.padding = "15px";
button.style.borderRadius = "4px";

// Add the button to the body
document.body.appendChild(button);

// Add the scroll event listener
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Add the click event listener
button.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
