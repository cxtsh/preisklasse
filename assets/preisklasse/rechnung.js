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
        ergebnisText.innerHTML = "<p><span style='background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;'>Preisklasse 1</span>&nbsp;</p> <p>Die deutschen Bahnh&ouml;fe dieser Preisklasse verf&uuml;gen &uuml;ber eine gro&szlig;e und leistungsstarke Infrastruktur, sind stark frequentiert und technisch stufenfrei. In repr&auml;sentativen Geb&auml;uden, die im Zentrum der Gro&szlig;st&auml;dte liegen, finden Bahnreisende und Bahnhofsbesucher grunds&auml;tzlich s&auml;mtliche Dienstleistungen rund um die Bahn. Das Angebot wird erg&auml;nzt durch zahlreiche Einkaufsm&ouml;glichkeiten, wobei auf pers&ouml;nlichen Kundenservice gro&szlig;er Wert gelegt wird. Hochwertige Ausstattungsmaterialien sorgen f&uuml;r ein angenehmes Ambiente.<br /><br><i> Quelle: <a href='https://de.wikipedia.org/wiki/Preisklasse' target='_blank' rel='noopener'>Wikipedia</a>&nbsp;</p></i>";
    } else if(preisklasse == 2) {
        ergebnisText.innerHTML = "<p><span style='background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;'>Preisklasse 2</span>&nbsp;</p> <p>Die Bahnh&ouml;fe dieser Preisklasse sind h&auml;ufig wichtige Zustiegspunkte f&uuml;r den Fernverkehr oder Schnittstellen zu den gro&szlig;en Flugh&auml;fen und Hauptbahnh&ouml;fe gr&ouml;&szlig;erer St&auml;dte. Alle bedeutenden infrastrukturellen Einrichtungen sowie Dienstleistungen rund um die Bahnreise sind vorhanden. Zudem ist eine Betreuung der Reisenden in den Hauptverkehrszeiten durch Service-Mitarbeitern der Deutschen Bahn gew&auml;hrleistet. Die Ausstattung und Serviceleistungen haben ein &auml;hnlich hohes Niveau wie an Bahnh&ouml;fen der Preisklasse 1.<br /><br><i> Quelle: <a href='https://de.wikipedia.org/wiki/Preisklasse' target='_blank' rel='noopener'>Wikipedia</a>&nbsp;</p></i>";
    } else if(preisklasse == 3) {
        ergebnisText.innerHTML = "<p><span style='background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;'>Preisklasse 3</span>&nbsp;</p> <p>Bahnh&ouml;fe dieser Preisklasse sind h&auml;ufig Hauptbahnh&ouml;fe kleiner bis mittelgro&szlig;er St&auml;dte. Die verkehrliche Bedeutung bzw. die Anzahl der Reisenden an diesen Bahnh&ouml;fen ist in der Regel dementsprechend gro&szlig;. Neben moderne Fahrgastinformationsanlagen sind auch Aufz&uuml;ge und Fahrtreppen an solchen Bahnh&ouml;fen vorzufinden. Viele dieser Bahnh&ouml;fe verf&uuml;gen &uuml;ber ein Empfangsgeb&auml;ude mit verschiedenen Einkaufsm&ouml;glichkeiten.<br /><br><i> Quelle: <a href='https://de.wikipedia.org/wiki/Preisklasse' target='_blank' rel='noopener'>Wikipedia</a>&nbsp;</p></i>";
    } else if(preisklasse == 4) {
        ergebnisText.innerHTML = "<p><span style='background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;'>Preisklasse 4</span>&nbsp;</p> <p>Rund 630 Bahnh&ouml;fe sind dieser Preisklasse zugeordnet. Darunter z&auml;hlen z.B. Bahnh&ouml;fe in Ballungsr&auml;umen, die stark durch den Regional- und Stadtverkehr gepr&auml;gt sind. Die Reisenden sind daher h&auml;ufig Pendler mit kurzen Aufenthaltszeiten am Bahnhof. Die funktionale Ausstattung ist mit der eines Busbahnhofs vergleichbar und beinhaltet in der Regel Wetterschutz und Sitzgelegenheiten.<br /><br><i>Quelle: <a href='https://de.wikipedia.org/wiki/Preisklasse' target='_blank' rel='noopener'>Wikipedia</a></p></i>";
    } else if(preisklasse == 5) {
        ergebnisText.innerHTML = "<p><span style='background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;'>Preisklasse 5</span>&nbsp;</p> <p>Die Bahnh&ouml;fe dieser Preisklasse findet man in kleineren St&auml;dten und zahlreiche Stadtteilbahnh&ouml;fe, die gr&ouml;&szlig;tenteils von Pendlern genutzt werden. Diese Bahnh&ouml;fe sind weniger belebt, weshalb auf eine robuste Ausstattung geachtet wird, die Vandalismus standh&auml;lt. Statt in nicht ben&ouml;tigte Ausstattung zu investieren, werden an diesen Bahnh&ouml;fen finanzielle Mittel wirkungsvoller f&uuml;r Reinigung und Instandhaltung eingesetzt.<br /><br><i> Quelle: <a href='https://de.wikipedia.org/wiki/Preisklasse' target='_blank' rel='noopener'>Wikipedia</a>&nbsp;</p></i>";
    } else if(preisklasse == 6) {
        ergebnisText.innerHTML = "<p><span style='background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;'>Preisklasse 6</span>&nbsp;</p> <p>Die Bahnh&ouml;fe dieser Preisklasse liegen meist in d&uuml;nn besiedelten Gegenden an Standorten mit geringen Reisendenzahlen und stellen die Grundversorgung im Schienenpersonennahverkehr sicher. Die Ausstattung beschr&auml;nkt sich zumeist auf das Notwendigste. <br /><br><i> Quelle: <a href='https://de.wikipedia.org/wiki/Preisklasse' target='_blank' rel='noopener'>Wikipedia</a>&nbsp;</p></i>";
    } else if(preisklasse == 7) {
        ergebnisText.innerHTML = "<p><span style='background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;'>Preisklasse 7</span>&nbsp;</p> <p>Dieser Bahnhof bzw. Bahnhaltepunkt f&auml;llt unter die niedrigste Preisklasse (oft auch als 'Landhalte' bezeichnet). Diese Bahnh&ouml;fe haben die geringste Zahl an Reisenden und meist nur die erforderlichsten Ausstattungen die es ben&ouml;tigt. Wegen der geringen Nutzung ist es nicht erforderlich, diesen Bahnhaltepunkt barrierefrei auszubauen.<br /><br><i>Quelle: <a href='https://de.wikipedia.org/wiki/Preisklasse' target='_blank'>Wikipedia</a>&nbsp;</p></i>";
    } else {
        ergebnisText.innerHTML = "Ein Fehler ist aufgetreten. Bitte wende dich mit den eingegeben Daten an <a href='mailto:contact@cxt.sh'>contact@cxt.sh</a>. Wir entschuldigen die Unannehmlichkeiten.";
    }
}