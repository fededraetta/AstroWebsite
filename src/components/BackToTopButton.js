// Create the button
let button = document.createElement("button");

// Use Font Awesome to create an icon
button.innerHTML = '<i class="fa fa-arrow-up"></i>';

// Style the button
button.style.display = "none";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "30px";
button.style.zIndex = "99";
button.style.fontSize = "20px";
button.style.border = "none";
button.style.outline = "none";
button.style.backgroundColor = "rgba(58,67,77,0.5)";
button.style.color = "rgb(167,225,233)";
button.style.cursor = "pointer";
button.style.padding = "15px";
button.style.borderRadius = "15px";

// Add the button to the body
document.body.appendChild(button);

// Add the scroll event listener
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Add the click event listener
button.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
