const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  
  const leftArrow = document.querySelector(".arrow_left");
  const rightArrow = document.querySelector(".arrow_right");
  
  const imageHolder = document.querySelector(".banner-img");
  const tagLineElement = document.querySelector("#banner p");
  
  const dotsHolder = document.querySelector(".dots");
  const dots = [];
  
  let currentSlide = 0;
  
  // Fonction pour mettre à jour le contenu en fonction de la diapositive actuelle
  function updateContent() {
	imageHolder.src = `assets/images/slideshow/${slides[currentSlide].image}`;
	tagLineElement.innerHTML = slides[currentSlide].tagLine;
  
	// Mettez à jour les points
	for (let i = 0; i < dots.length; i++) {
	  dots[i].classList.remove("dot_selected");
	}
	dots[currentSlide].classList.add("dot_selected");
  }
  
  // Initialisation des points et ajout des événements
  for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsHolder.appendChild(dot);
	dots.push(dot);
  
	dot.addEventListener("click", () => {
	  currentSlide = i;
	  updateContent();
	});
  }
  
  // Ajout des événements pour les flèches
  leftArrow.addEventListener("click", () => {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	updateContent();
  });
  
  rightArrow.addEventListener("click", () => {
	currentSlide = (currentSlide + 1) % slides.length;
	updateContent();
  });
  
  // Initialisation du contenu
  updateContent();
  