adjustLayout();

//Si l'ecran est redimensionné
window.addEventListener('resize', adjustLayout);

//appel la méthode
function adjustLayout() {
    //On récupère le container
    const container = document.getElementById('.container');

    //Si la largeur de l'écran est inférieur ou égal à 768px
    //MOBILE
    if(window.innerWidth <= 480 ) {
            container.style.width = '100%';
    }
    //TABLETTE
    else if(window.innerWidth <=768) {

    }
    else if(window.innerWidth <= 1024) {
        
    }
}
       