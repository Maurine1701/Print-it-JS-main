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
]

//ajoute les bullets points
const dotContainer = document.querySelector('.dots');

for (let i = 0; i < slides.length; i++) {
	const span = document.createElement('span');
	span.classList.add('dot');
	dotContainer.appendChild(span);
}

// Sélection du premier point comme point initial
const dots = dotContainer.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');


// Sélectionner les flèches gauche et droite
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Ajoute EventListener sur la flèche gauche
arrowLeft.addEventListener("click", () => {
	console.log("Flèche gauche cliquée !");

});

// Ajoute EventListener sur la flèche gauche
arrowRight.addEventListener("click", () => {
	console.log("Flèche droite cliquée !");
});
