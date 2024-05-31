//--------------Déclaration des variables------------------
let premiereCarte = null;
let deuxiemeCarte = null;
let nombreDeCarteDecouverte = 0;
let valeur1 = null;
let valeur2 = null;
//Nouveau tableau qui contiendra les 12 images mélangées
let newTableImages = [];
//index pour parcourir mon tableau
let index = 1;
//correspond au nombre de click 
let count = 0;

//Tableau d'images original
const cards = [
    'img/1.svg',
    'img/2.svg',
    'img/3.svg',
    'img/4.svg',
    'img/5.svg',
    'img/6.svg',
];

//--------------Fonctions------------------

//Méthode pour ajouter les doublons de mes cartes et les mélangés dans un nouveau tableau
boucleSurImages();

//function qui crée une suite aleatoire parmi nos 6 images * 2
function boucleSurImages() {

    //Melange les éléments du tableau
    cards.sort(() => Math.random() - 0.5);

    //On passe deux fois sur notre tableau d'images
    for (let i = 0; i < 2; i++) {

        //On remélanges pour éviter davoir des images qui se suivent
        cards.sort(() => Math.random() - 0.5);

        //On ajoute les images mélangées dans un nouveau tableau 
        for (let j = 0; j < cards.length; j++) {

            //On ajoute les 6 images qui se trouvent dans cards[]
            newTableImages.push(cards[j]);
        }
    }
}

//génération des différents éléments dans mon HTML
function createCards(index) {
    let flipCard = document.createElement('div');
    flipCard.id = newTableImages[index];
    flipCard.classList.add('flip-card');
    flipCard.style.display = 'flex';
    flipCard.style.flex = 'wrap';
    flipCard.style.width = '300px';
    flipCard.style.height = '300px';
    let flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');
    let flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');
    let image = document.createElement('img');
    image.style.width = '200px';
    image.src = 'img/question.svg';
    let flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');
    let imgCache = document.createElement('img');
    imgCache.src = newTableImages[index];
    imgCache.style.width = '200px';
    flipCard.appendChild(flipCardInner);
    flipCardInner.appendChild(flipCardFront);
    flipCardFront.appendChild(image);
    flipCardInner.appendChild(flipCardBack);
    flipCardBack.appendChild(imgCache);
    //retourner la carte crée
    return flipCard;
}

//Ajoute mon tableau de cartes 
init();
function init() {
    let div = document.querySelector('div');
    for (let index = 0; index < 12; index++) {
        div.appendChild(createCards(index));
    }
}


const flipcards = document.querySelectorAll('.flip-card');

// Ajouter un écouteur d'événement de clic à chaque élément
//variable qui correspond à lélément sur lequel on est en train de boucler
flipcards.forEach((flipcard) => {
    flipcard.addEventListener('click', (event) => {
        count++;
        if (count == 1) {
            premiereCarte = event.currentTarget;
            valeur1 = premiereCarte.querySelector('div');
            rotateY(valeur1,premiereCarte);
        }
        if(count == 2)
        {
            deuxiemeCarte = event.currentTarget;
            valeur2 = deuxiemeCarte.querySelector('div');
            rotateY(valeur2,deuxiemeCarte);
        }
        console.log(count);
        //Si deux cartes sont tirées
        if (premiereCarte!=null && deuxiemeCarte!=null) {
            verifCards(premiereCarte,deuxiemeCarte, valeur1,valeur2);
        }
    });
});

function rotateY(valeur, nbCarte) {
    valeur = nbCarte.querySelector('div');
    valeur.style.transform = 'rotateY(-180deg)';
}

function verifCards(premiereCarte, deuxiemeCarte, valeur1,valeur2) {

    if (premiereCarte.id === deuxiemeCarte.id) {
        //Si les deux cartes sont identiques, on les laisse visibles
        alert('Bien joué, une paire de trouvé');
    }
    else {
        //Si les deux cartes ne sont pas identiques, on les retournent
        setTimeout(() => {
            valeur1.style.transform = 'rotateY(0deg)';
            valeur2.style.transform = 'rotateY(0deg)';
            premiereCarte = null;
            deuxiemeCarte = null;
            count = 0;
        },2000);
    }
}