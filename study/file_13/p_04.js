// innerHTML
const testEl = document.querySelector("#test");

console.log(`innerHTML: ${testEl.innerHTML}`);

setTimeout(() => {
  testEl.innerHTML = "<h1>Good World</h1>";
}, 2000);
