let count = 0;
let countEl = document.getElementById("count-el");
let incrementButton = document.getElementById("increment-btn");

incrementButton.addEventListener("click", () => countEl.innerText = ++count);
