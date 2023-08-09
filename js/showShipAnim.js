function showShipAnim() {
  const targetContainer = document.querySelector("#form");
  const shipImage = document.createElement("img");
  shipImage.setAttribute("src", "./img/ship-anim.gif");
  shipImage.classList.add("ship-anim");

  targetContainer.appendChild(shipImage);

  setTimeout(2000, () => {
    targetContainer.removeChild(shipImage);
  });
}
