//Si l'ecran est redimensionné
window.addEventListener('resize', adjustLayout);
const h1 = document.querySelector('h1');
const menu = document.querySelector('.menu');
const liens = document.querySelectorAll('.liens');
const h2 = document.querySelector('h2');
//appel la méthode
function adjustLayout() {

    //On récupère le container
    //Si la largeur de l'écran est inférieur ou égal à 768px
    //MOBILE
    if (window.innerWidth <= 480) {
        mobile();
    }
    //TABLETTE
    else if (window.innerWidth <= 768) {
        tablette();
    }
    //TABLETTE PAYSAGE
    else if (window.innerWidth <= 1024) {
        tablettePaysage();
    }
    else {
        //ECRAN LARGE
        ecranLarge();
    }
}

adjustLayout();

function mobile() {
    h1.style.fontSize = "20px";
}
function tablette() {


}
function tablettePaysage() {
    menu.style.height = "50px";
}
function ecranLarge() {
    if(h1) {
        h1.style.fontSize = "60px";
    }
    menu.style.height = "10%";
      // Parcourir tous les éléments sélectionnés
      liens.forEach(function(a) {
        // Modifier la largeur et la hauteur
        a.style.fontSize = "30px";
        a.style.width = "30%";
        a.style.margin = "10px";
        a.style.justifyContent = "space-between";
    });
    if(h2) {
        h2.style.fontSize = "30px";
    }
}