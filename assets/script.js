const slides = [
    {
        "image": "/assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "/assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "/assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "/assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let index = 0;
        // RÉCUPERER LES ÉLÉMENTS DU DOM A MODIFIER POUR LE SLIDER

// récupere la div #banner que je stocke dans la constante slider pour afficher le slider
const slider = document.querySelector('#banner');
// recupere la div img que je stocke dans la constante sliderImg pour afficher les slides
const sliderImg = document.querySelector('.banner-img');
// recupere la balise p dans la div banner que je stocke dans la constante sliderTagLine pour afficher les textes
const sliderTagLine = banner.querySelector('p');

	    // DÉCLARATION DES FONCTIONS 

//pour afficher le slider 
function showSlide(){
	sliderImg.src = slides[index].image;
	sliderTagLine.innerHTML = slides[index].tagLine; //innerHTML modifie le contenu de la balise p stockée dans la constante sliderTagLine
}

//pour afficher slide suivante
function nextSlide(){
	index++;
	if(index === slides.length){
		index = 0;
	}
	showSlide();
	dotActive();
	console.log ("slide suivante");
}
// pour afficher slide précédente
function prevSlide(){
	index--;
	if(index<0){
		index = slides.length-1;
	}
	showSlide();
    dotActive();
	console.log ("slide précedente");
}
//pour mettre a jour la classe dot_selected des bullets points
function dotActive(){
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, dotIndex)=>{
		if (dotIndex === index){
			dot.classList.add('dot_selected');
		} else{
			dot.classList.remove('dot_selected');		}
	})
}

        // RÉCUPERATION DES FLECHES + AJOUT EVENT LISTENER AU CLIC
const arrowRight = banner.querySelector('.arrow_right');
arrowRight.addEventListener('click', nextSlide);

const arrowLeft = banner.querySelector('.arrow_left');
arrowLeft.addEventListener('click', prevSlide);	

        // AJOUT DES BULLET POINTS
const dotsContainer = document.querySelector('.dots');
for (i = 0; i < slides.length; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	// ajouter les bullets points au conteneur dots
	dotsContainer.appendChild(dot);
	// ajouter la classe dot_selected sur la slide active
	if(i === index){
		dot.classList.add('dot_selected');
	} 

}