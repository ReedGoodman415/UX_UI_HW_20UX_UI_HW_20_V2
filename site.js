(frames-script.js) ;
javascript
var document: addEventListener= unresolved ("DOMContentLoaded", function() {
  const framesContainer = document.querySelector(".frames-container");
  const frame1 = document.querySelector(".frame:nth-child(1)");
  const frame2 = document.querySelector(".frame:nth-child(2)");
  const resizeSmallerBtn = document.getElementById("resize-smaller");
  const resizeLargerBtn = document.getElementById("resize-larger");

  let currentWidth = 720;
  let currentHeight = 480;

  resizeSmallerBtn.addEventListener("click", function() {
    currentWidth -= 50;
    currentHeight -= 33.33;
    updateFrameSize();
  });

  resizeLargerBtn.addEventListener("click", function() {
    currentWidth += 50;
    currentHeight += 33.33;
    updateFrameSize();
  });

  function updateFrameSize() {
    frame1.style.width = `${currentWidth}px`;
    frame1.style.height = `${currentHeight}px`;
    frame2.style.width = `${currentWidth}px`;
    frame2.style.height = `${currentHeight}px`;
  }
});
// Variable overrides first
$primary ; ts(1005)
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
let ts (1005) ;"../node_modules/bootstrap/scss/bootstrap";