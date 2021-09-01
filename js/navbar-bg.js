document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");

	function addBackground() {
		if (window.scrollY >= 30) {
			nav.classList.add("nav-bg");
		} else {
			nav.classList.remove("nav-bg");
		}
	}

	window.addEventListener("scroll", addBackground);
});
