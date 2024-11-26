const images = ["44.jpg", "33.jpg", "55.jpg"];
let currentImageIndex = 0;
const mirrorContent = document.getElementById("mirror-content");

mirrorContent.addEventListener("click", () => {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	mirrorContent.style.backgroundImage = `url(${images[currentImageIndex]})`;
});
