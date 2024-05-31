//Si l'ecran est redimensionné
window.addEventListener('resize', adjustLayout);

//appel la méthode
function adjustLayout() {

    //On récupère le container
    const h1 = document.querySelector('h1');
    
    //Si la largeur de l'écran est inférieur ou égal à 768px
    //MOBILE
    if(window.innerWidth <= 480 ) {
        mobile();
    }
    //TABLETTE
    else if(window.innerWidth <=768) {
       tablette();
    }
    //TABLETTE PAYSAGE
    else if(window.innerWidth <= 1024) {
       tablettePaysage();
    }
    else{
        //ECRAN LARGE
        ecranLarge();
    }
}

adjustLayout();

function mobile()
{
    h1.style.fontSize = "12px";
}
function tablette()
{


}
function tablettePaysage()
{

}
function ecranLarge()
{

}