//change a navbar scrollba

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon
    const icon = faq.querySelector(".faq_icon i");
    icon.className =
      icon.className === "fa fa-plus" ? "fa fa-minus" : "fa fa-plus";
  });
});

//show /hide nav menu
const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector(" #open-menu-btn");
const closebtn = document.querySelector(" #close-menu-btn");

menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
};
closebtn.addEventListener("click", closeNav);
