// textContent
const testEl = document.querySelector("#test");

console.log(`textContent: ${testEl.textContent}`);

setTimeout(() => {
  testEl.textContent = "<h1>Good World</h1>";
}, 2000);
