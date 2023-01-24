const timelineItems = document.querySelectorAll(".timeline-item");

function updateTimelineShadow() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    timelineItems.forEach(item => {
      item.style.setProperty("--shadow-color", "rgba(255, 255, 255, 0.1)");
    });
  } else {
    timelineItems.forEach(item => {
      item.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.1)");
    });
  }
}

updateTimelineShadow();

window.matchMedia("(prefers-color-scheme: dark)").addListener(updateTimelineShadow);

