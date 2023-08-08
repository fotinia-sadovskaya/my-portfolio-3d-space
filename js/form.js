const form = document.querySelector("#form");
const launchBtn = document.querySelector("#launch-btn");
const userEmailField = document.querySelector("#user-email");



function clearFormFields() {
  const modalFiends = formModal.querySelectorAll("input");

  modalFiends.forEach((field) => {
    field.value = "";
  });
}

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  launchBtn.setAttribute("disabled", true);

  if (userEmailField?.value?.length > 30) {
    return;
  }

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      showGooseAnim();

      setTimeout(() => {
        // launchBtn.removeAttribute('disabled')
        // clearFormFields();
      }, 2000);
    })
    .catch((error) => console.log("Sending form failed"));
});
