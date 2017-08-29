var tab = [];
var indice = 0;

function formulaire (titre,phrase,description, ){
  this.titre = titre;
  this.phrase = phrase;
  this.description = description;

}

function objetContenuInput(){
  this.mesObjet = function(){
    var contenuInput = new formulaire ($("#titre").val(),$("#phrase").val(),$("#descript").val());
    tab.push(contenuInput);
    
  }

  this.mesAffichages = function(){
  $(".carte").append("<div class='affichage'><p class='background'>" + tab[indice].titre + "</p><p class='background'>" + tab[indice].phrase + "</p><p class='background'>" + tab[indice].description + "</p></div>")
  indice++;
 }

}

$("#contact-submit").click(function(){
var recupObjet = new objetContenuInput();
recupObjet.mesObjet();
recupObjet.mesAffichages();
})
