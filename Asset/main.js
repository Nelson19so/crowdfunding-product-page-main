// modal
const showModal = document.querySelectorAll("#back-project");
const modal = document.getElementById("modal");
const containerPadderModal = document.getElementById("container-padder-moadl");
const closeModal = document.getElementById("closeModal");
const closeModalSuccess = document.getElementById("closeModalSuccess");
const successmsg = document.getElementById("success");
const displaysuccess = document.querySelectorAll("#displaysuccess");

showModal.forEach((modalShowUp) => {
  modalShowUp.addEventListener("click", function () {
    modal.style.display = "block";
    containerPadderModal.style.display = "block";
  });
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

displaysuccess.forEach((btnSuccess) => {
  btnSuccess.addEventListener("click", function (e) {
    e.preventDefault();
    containerPadderModal.style.display = "none";
    successmsg.style.display = "block";
  });
});

// modal ends-------------------------------------

// navbar drop down.
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

// navbar ends-------------------------

// Modal comfirm checkbox
const wrapper = document.querySelectorAll(".container-reward");

wrapper.forEach((wrappercontainer) => {
  wrappercontainer.addEventListener("click", () => {
    const btnUnderModal = wrappercontainer.querySelector(".btn--under-modal");

    const checkbox = wrappercontainer.querySelector("input[type='checkbox']");
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      btnUnderModal.style.display = "flex";
      wrappercontainer.style.border = "1.4px solid hsl(176, 50%, 47%)";
    } else {
      wrappercontainer.style.border = "";
      btnUnderModal.style.display = "none";
    }
  });
});
