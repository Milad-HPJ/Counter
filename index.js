let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

// Increments the count value.
function increment() {
  count += 1;
  countEl.textContent = count;
}

// Shows the previouse saves when clicking save-btn Logs the count value in the console.
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
}

// Resets the count to 0 and show the previous value adn "RESET" in the previous enterise and console.
function reset() {
  countEl.textContent = 0;
  saveEl.textContent += " RESET (" + count + ") - ";
  console.log("Rest At " + count);
  count = 0;
}
