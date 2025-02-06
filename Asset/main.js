// modal
const showModal = document.getElementById("back-project");
const modal = document.getElementById("modal");
const containerPadderModal = document.getElementById("container-padder-moadl");
const closeModal = document.getElementById("closeModal");
const closeModalSuccess = document.getElementById("closeModalSuccess");
const successmsg = document.getElementById("success");
const displaysuccess = document.getElementById("displaysuccess");

showModal.addEventListener("click", function () {
  modal.style.display = "block";
  containerPadderModal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  containerPadderModal.style.display = "none";
  successmsg.style.display = "none";
});

closeModalSuccess.addEventListener("click", function () {
  modal.style.display = "none";
  containerPadderModal.style.display = "none";
  successmsg.style.display = "none";
});

displaysuccess.addEventListener("click", function () {
  containerPadderModal.style.display = "none";
  successmsg.style.display = "block";
});

// navbar
const navbarBtn = document.getElementById("navbar-drop");
const navItems = document.getElementById("navitems");
const hambugerModal = document.getElementById("hambuger-modal");
const hambugerClose = document.getElementById("hambuger-close");

hambugerClose.classList.add("svg-hamgurger-hide");
navItems.classList.add("close-nav");

navbarBtn.addEventListener("click", function () {
  navItems.classList.toggle("display-block");
  navItems.classList.toggle("close-nav");
  hambugerClose.classList.toggle("svg-hamgurger-hide");
  hambugerModal.classList.toggle("svg-hamgurger-hide");
});
