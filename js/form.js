const form = document.querySelector("#form");
const launchBtn = document.querySelector("#launch-btn");

const userEmailField = document.querySelector("#user-email");


function clearFormFields() {
  const fieldName = form.querySelector('input[type="text"]');
  const fieldEmail = form.querySelector('input[type="email"]');

  fieldName.value = "";
  fieldEmail.value = "";
}

function addShipElement() {
  const targetContainer = document.querySelector("#form");
  const shipEl = document.createElement("img");
 shipEl.classList.add("ship-anim");

  targetContainer.appendChild(shipEl);
}

function showShipAnim() {
  const shipEl = document.querySelector(".ship-anim");

  shipEl.setAttribute("src", "./img/ship-anim.gif");

  setTimeout(() => {
    shipEl.removeAttribute("src");
  }, 8000);
}

addShipElement();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  launchBtn.setAttribute("disabled", true);
  launchBtn.style.opacity = "0.7";

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      showShipAnim();

      launchBtn.removeAttribute("disabled");
      clearFormFields();

      setTimeout(() => {
        launchBtn.style.opacity = "1";
      }, 8000);
    })
    .catch((error) => console.log("Sending form failed"));
});
