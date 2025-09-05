if (document.body) {
  document.body.style.height = "2000px";
  document.body.style.width = "2000px";
}

window.onload = function () {
  const scrollPositionStr = localStorage.getItem("scrollPosition");
  if (scrollPositionStr) {
    const scrollPosition = JSON.parse(scrollPositionStr);
    if (scrollPosition) {
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }
  }
};

setInterval(() => {
  const scrollPosition = {
    x: window.scrollX,
    y: window.scrollY,
  };
  localStorage.setItem("scrollPosition", JSON.stringify(scrollPosition));
}, 1000);
