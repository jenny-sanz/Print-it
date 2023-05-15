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

// récupere la div #banner  que je stocke dans la constante slider pour afficher le slider
const slider = document.querySelector('#banner');
// recupere la div img que je stocke dans la constante sliderImg pour afficher les slides
const sliderImg = document.querySelector('.banner-img');
// recupere la balise p dans la div banner que je stocke dans la constante sliderTagLine pour afficher les textes
const sliderTagLine = banner.querySelector('p');

	// DÉCLARATION DES FONCTIONS 

//pour afficher le slider 
function showSlide(){
	sliderImg.src = slides[index].image;
	sliderTagLine.innerHTML = slides[index].tagLine;
}