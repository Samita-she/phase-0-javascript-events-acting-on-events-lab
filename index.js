const dodger = document.getElementById("dodger"); // Select the dodger element

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", ""); // Get current left position
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {  // Prevent moving out of bounds
        dodger.style.left = `${left - 10}px`; // Move 10px to the left
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {  // Assuming game container width is 400px
        dodger.style.left = `${left + 10}px`; // Move 10px to the right
    }
}

// Listen for key events
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
