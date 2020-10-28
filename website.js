const navbar = document.querySelector(".top-nav-bar");
const sticky = navbar.offsetTop;

function stickyTop() {
	if (window.pageYOffset >= sticky) navbar.classList.add("stickyTop");
	else navbar.classList.remove("stickyTop");
}

window.onscroll = function() {stickyTop()};