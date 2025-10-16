// innerHTML and textContent
const textEl = document.querySelector("#textContent");
const innerEl = document.querySelector("#innerHTML");

console.log(`textContent: ${textEl.textContent}`);
console.log(`innerHTML: ${innerEl.innerHTML}`);

setTimeout(() => {
  textEl.textContent = "<strong>textContent</strong>";
  innerEl.innerHTML = "<strong>innerHTML</strong>";
}, 2000);
