// Hamburger functionality

const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-content");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".hamburger-content a").forEach((link) => {
  link.addEventListener("click", () => {
    ham.classList.remove("active");
    menu.classList.remove("active");
  });
});

// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Dostęp zabroniony. Strona tylko dla osób 18+");
  window.close();
  window.location.href = "https://www.google.pl";
});
