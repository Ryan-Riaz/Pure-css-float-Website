let btn = document.querySelector(".menu-btn");
btn.addEventListener("click", () => {
	console.log("CLicked");
	let mainNav = document.querySelector(".main-nav");
	mainNav.classList.toggle("show");
});
