var f = document.getElementById("heart");
document.addEventListener(
  "click",
  function (ev) {
    f.style.transform = "translateY(" + (ev.clientY - 25) + "px)";
    f.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
  },
  false
);
