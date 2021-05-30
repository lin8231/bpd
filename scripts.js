console.log("scripts");

const btn = document.getElementById("trigger-modal");
const navBtn = document.getElementById("nav-trigger-modal");
const memberBtn = document.getElementById("member-trigger-modal");

const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("modal-bg");
const cancel = document.getElementById("form-cancel");
const submit = document.getElementById("form-submit");

btn.onclick = () => {
  modal.style.display = "block";
};

navBtn.onclick = () => {
  modal.style.display = "block";
};

memberBtn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

cancel.onclick = () => {
  modal.style.display = "none";
};

submit.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
