// please don't judge my code, thanks
console.log("moin, solltest du preisklassen berechnen kommen hier gleich einige debugging values! du kannst sie ignorieren.")

function preisklasseBerechnen() {
    // dropdown menus
    bahnsteige = document.getElementById("bahnsteig").value;
    bahnsteiglength = document.getElementById("bahnsteiglength").value;
    reisende = document.getElementById("reisende").value;
    zughalte = document.getElementById("zughalte").value;

    // checkboxes
    service = document.querySelector('#service').checked;
    barrierefrei = document.querySelector("#barrierefrei").checked;

    // checkbox to number profi algorithm uwu owo
    if (service == true) {
        service = 1;
    } else {
        service = 0;
    }
    if (barrierefrei == true) {
        barrierefrei = 1;
    } else {
        service = 0;
    }

    // calculation yes yes
    rechnung = (bahnsteige / 6 * 20 / 100) +
               (bahnsteiglength / 6 * 20 / 100) +
               (reisende / 6 * 20 / 100) +
               (zughalte / 6 * 20 / 100) +
               (service / 1 * 15 / 100) +
               (barrierefrei / 1 * 5 / 100);

    preisklasse = 0;

    // preisklasse bestimmen, habe keinen schöneren weg im kopf qwq
    if(rechnung > 0.90) {
        preisklasse = 1;
    } else if(rechnung > 0.80) {
        preisklasse = 2;
    } else if(rechnung > 0.60) {
        preisklasse = 3;
    } else if(rechnung > 0.50) {
        preisklasse = 4;
    } else if(rechnung > 0.40) {
        preisklasse = 5;
    } else if(rechnung > 0.25) {
        preisklasse = 6;
    } else if(rechnung <= 0.25) {
        preisklasse = 7;
    } else {
        preisklasse = 0;
    }

    // jetz kommt die nachricht auf der page 
    if(preisklasse != 0) {
        var ergebnisText = document.getElementById("ergebnis");
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br>Der Bahnhof hat die Preisklasse " + preisklasse + ". Du kannst <a href=https://de.wikipedia.org/wiki/Preisklasse#Klasse_" + preisklasse + ">hier</a> mehr über die Preisklasse des Bahnhofes erfahren. <br>Bitte beachte dass diese Angaben ohne Gewähr sind.";
    } else {
        ergebnisText.innerHTML = "Ein Fehler ist aufgetreten. Bitte wende dich mit den eingegeben Daten an <a href='mailto:contact@cxt.sh'>contact@cxt.sh</a>. Wir entschuldigen die Unannehmlichkeiten."
    }
    
    // debugging shit
    console.log(preisklasse);
    console.log(rechnung);
    console.log(bahnsteige + ", " + bahnsteiglength + ", " + reisende + ", " + zughalte + ", " + service + ", " + barrierefrei);

}