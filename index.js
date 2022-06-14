// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}
    document.addEventListener("keydown", function(e){
        if (e.key === "ArrowRight") {
            moveDodgerRight();
        }
    });

 function moveDodgerTop() {
    const topNumbers = dodger.style.top.replace("px", "");
    const bottom = parseInt(topNumbers, 10);
    
      if (bottom > 0) {
        dodger.style.bottom = `${bottom + 1}px`;
        }
      }
      document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowTop") {
          moveDodgerTop();
        }
      });