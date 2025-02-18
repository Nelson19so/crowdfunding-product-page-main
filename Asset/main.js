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
const navModal = document.getElementById("transparent-older");
const link = document.querySelectorAll("#link");

hambugerClose.classList.add("svg-hamgurger-hide");
navItems.classList.add("close-nav");
navModal.classList.add("close-nav-modal");

navbarBtn.addEventListener("click", function () {
  navItems.classList.toggle("display-block");
  navItems.classList.toggle("close-nav");
  navModal.classList.toggle("close-nav-modal");
  hambugerClose.classList.toggle("svg-hamgurger-hide");
  hambugerModal.classList.toggle("svg-hamgurger-hide");
});

// re-do navbar
link.forEach((linkItems) => {
  linkItems.addEventListener("click", function () {
    navbarBtn.click();
  });
});

// navbar ends -------------------------

const checkbox = document.querySelector("input[type='checkbox']");
const wrapper = document.querySelectorAll(".container-reward");

wrapper.forEach((wrapperContainer) => {
  wrapperContainer.addEventListener("click", function () {
    const btnUnderModal = wrapperContainer.querySelector(".btn--under-modal");

    document.querySelectorAll(".btn--under-modal").forEach((otherDivs) => {
      if (otherDivs != btnUnderModal) {
        otherDivs.style.display = "none";
      }
    });

    document.querySelectorAll(".container-reward").forEach((othercontainer) => {
      if (othercontainer != wrapperContainer) {
        othercontainer.style.border = "";
      }
    });

    const checkbox = wrapperContainer.querySelector("input[type='checkbox']");
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      btnUnderModal.style.display = "flex";
      wrapperContainer.style.border = "1.4px solid hsl(176, 50%, 47%)";
    } else {
      wrapperContainer.style.border = "";
      btnUnderModal.style.display = "none";
    }
  });
});
