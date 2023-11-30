const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

const imageHolder = document.querySelector(".banner-img");

let currentSlide = 1;


const dotsHolder = document.querySelector(".dots");
const dots = [];

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsHolder.appendChild(dot);

	dots.push(dot);
	dots[0].classList.add("dot_selected");

	dot.addEventListener("click", () => {
		currentSlide = i;
		imageHolder.src = `assets/images/slideshow/${slides[currentSlide].image}`;
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove("dot_selected");
		}
		dot.classList.add("dot_selected");
	});
}

leftArrow.addEventListener("click", () => {
	console.log("Clic sur la flèche gauche");

	if (currentSlide > 0) {
		currentSlide--;
	} else {
		currentSlide = slides.length - 1;
	}

	imageHolder.src = `assets/images/slideshow/${slides[currentSlide].image}`;

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected");
	}
	dots[currentSlide].classList.add("dot_selected");
});

rightArrow.addEventListener("click", () => {
	console.log("Clic sur la flèche droite");

	if (currentSlide < slides.length - 1) {
		currentSlide++;
	} else {
		currentSlide = 0;
	}
	imageHolder.src = `assets/images/slideshow/${slides[currentSlide].image}`;

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected");
	}
	dots[currentSlide].classList.add("dot_selected");
});

