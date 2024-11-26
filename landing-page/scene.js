const images = [
	'1.avif',
	'2.avif'
];

$(document).ready(function () {
	let current = 0;
	$("#mirror-content").on("click", function () {
		$(this).css({
			"background-image": `url(${images[++current % images.length]})`,
		});
	});
});
