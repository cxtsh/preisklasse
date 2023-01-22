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
    ergebnis(preisklasse);
    
    // debugging shit
    console.log(preisklasse);
    console.log(rechnung);
    console.log(bahnsteige + ", " + bahnsteiglength + ", " + reisende + ", " + zughalte + ", " + service + ", " + barrierefrei);

}

function ergebnis(preisklasse) {
    var ergebnisText = document.getElementById("ergebnis");
    if(preisklasse == 1) {
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br><i>Der Bahnhof hat die Preisklasse " + preisklasse + ".</i><br> Zur Klasse 1 gehören die wichtigsten Fernbahnhöfe in Deutschland. Dort sind Servicemitarbeiter vorhanden, es gibt eine Reihe von Einkaufsmöglichkeiten im Bahnhof. Insgesamt zählen 21 Bahnhöfe zu dieser Preisklasse.";
    } else if(preisklasse == 2) {
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br><i>Der Bahnhof hat die Preisklasse " + preisklasse + ".</i><br> 87 Stationen (lt. Stationspreisliste 2022), die üblicherweise wichtige Halte im Fernverkehr (Bedienung durch ICE, Intercity oder EuroCity) in großen Städten sind oder eine Anbindung zu einem großen Flughafen ermöglichen, werden der Preisklasse 2 zugeordnet.";
    } else if(preisklasse == 3) {
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br><i>Der Bahnhof hat die Preisklasse " + preisklasse + ".</i><br> Die 256 Stationen (lt. Stationspreisliste 2022) der Preisklasse 3 sind häufig die zentralen Bahnhöfe kleiner bis mittelgroßer Städte. Diese sind z. B. weniger wichtige Fernverkehrshalte oder Knoten des Regionalverkehrs. Dort gibt es meist ein Empfangsgebäude mit Einkaufsmöglichkeiten für Lebensmittel und Fahrkartenverkauf. Auf Service-Mitarbeiter wird hier jedoch bisweilen verzichtet.";
    } else if(preisklasse == 4) {
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br><i>Der Bahnhof hat die Preisklasse " + preisklasse + ".</i><br> Der Preisklasse 4 werden 628 Stationen (lt. Stationspreisliste 2022) zugeordnet, die oft einen Knoten im Regionalverkehr bilden, so zum Beispiel der Bahnhof Meiningen. Die früher auch als „hoch frequentierter Nahverkehrssystemhalt/Nahverkehrsknoten“ bezeichneten Stationen richten sich zumeist an Pendler.";
    } else if(preisklasse == 5) {
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br><i>Der Bahnhof hat die Preisklasse " + preisklasse + ".</i><br> Stationen der Preisklasse 5 sind oft jene kleinerer Städte sowie zahlreiche Stadtteilbahnhöfe. Sie werden oft von Pendlern genutzt. Es gehören 992 Stationen in diese Klasse (lt. Stationspreisliste 2022).";
    } else if(preisklasse == 6) {
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br><i>Der Bahnhof hat die Preisklasse " + preisklasse + ".</i><br> Zur Preisklasse 6 gehören 2505 Stationen (lt. Stationspreisliste 2022), meist in dünn besiedelten Gegenden, deren Ausstattung sich „auf das Notwendigste“ beschränkt.";
    } else if(preisklasse == 7) {
        ergebnisText.innerHTML = "<h4>Preisklasse " + preisklasse + "</h4><br><i>Der Bahnhof hat die Preisklasse " + preisklasse + ".</i><br> Die 916 Stationen (lt. Stationspreisliste 2022) der niedrigsten Preisklasse, oft „Landhalte“, haben die geringste Zahl von Reisenden und meist nur die für einen Haltepunkt notwendigen Einrichtungen. Wegen der geringen Nutzung wird ein barrierefreier Ausbau nicht für erforderlich gehalten.";
    } else {
        ergebnisText.innerHTML = "Ein Fehler ist aufgetreten. Bitte wende dich mit den eingegeben Daten an <a href='mailto:contact@cxt.sh'>contact@cxt.sh</a>. Wir entschuldigen die Unannehmlichkeiten.";
    }
}