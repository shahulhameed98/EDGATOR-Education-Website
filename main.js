const nav = document.querySelector("nav");
const faqs = document.querySelectorAll(".faq");
const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
// change navbar styles on scroll

window.addEventListener("scroll", () => {
	nav.classList.toggle("window-scroll", window.scrollY > 20);
});

// show/hide faq answer
faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("open");
		// change icon
		const icon = faq.querySelector(".faq__icon i");
		if (icon.className === "ri-add-fill") {
			icon.className = "ri-subtract-fill";
		} else {
			icon.className = "ri-add-fill";
		}
	});
});

// show/hide nav menu

openMenuBtn.addEventListener("click", () => {
	menu.style.display = "flex";
	closeMenuBtn.style.display = "inline-block";
	openMenuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
	menu.style.display = "none";
	closeMenuBtn.style.display = "none";
	openMenuBtn.style.display = "inline-block";
};

closeMenuBtn.addEventListener("click", closeNav);
