let headingEl = document.getElementById("heading");
let statusEl = document.getElementById("status");
let paragraphEl = document.getElementById("paragraph");


statusEl.addEventListener("change", function(event) {
    headingEl.textContent = event.target.value;
    paragraphEl.textContent = event.target.value;
});