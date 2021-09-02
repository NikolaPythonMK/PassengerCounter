let count = 0;
let countEl = document.getElementById("count-el");
let incrementButton = document.getElementById("increment-btn");
let saveButton = document.getElementById("save-btn");
let saveEntries = document.getElementById("save-entries");

incrementButton.addEventListener("click", () => countEl.textContent = ++count);

saveButton.addEventListener("click", function(){
    saveEntries.textContent += count + " - ";
    count = 0;
    countEl.textContent = 0;
    console.log(count);
});
