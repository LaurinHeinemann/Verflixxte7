let x1;
let x2;
let anzahlWuerfeS1 = 0;
let anzahlWuerfeS2 = 0;
let punkte1 = 0;
let punkte2 = 0;
let spielerAnDerReihe = 1;

function wuerfeln1() {
    let min = 1;
    let max = 5;
    let wuerfel1 = Math.round (Math.random()*(max))+min;
    let wuerfel2 = Math.round (Math.random()*(max))+min;
    x1 = wuerfel1 + wuerfel2
    document.getElementById("wurf").innerHTML = "Wurf: " + x1
    punkte1 = punkte1 + x1
    document.getElementById("punkteS1").innerHTML = "Punkte Spieler 1: " + punkte1
    wuerfeZaehlenS1()
    if (spielerAnDerReihe === 2) {
        wuerfeln2()
    }
    if (x1 === 7) {
        verflixxteSiebenS1()
    }
}

function wuerfeln2() {
    let min = 1;
    let max = 5;
    let wuerfel1 = Math.round (Math.random()*(max))+min;
    let wuerfel2 = Math.round (Math.random()*(max))+min;
    x2 = wuerfel1 + wuerfel2
    document.getElementById("wurf").innerHTML = "Wurf: " + x2
    punkte2 = punkte2 + x2
    document.getElementById("punkteS2").innerHTML = "Punkte Spieler 2: " + punkte2
    wuerfeZaehlenS2()
    if (x2 === 7) {
        verflixxteSiebenS2()
    }
    if (anzahlWuerfeS2 >= anzahlWuerfeS1) {
        rundeBeenden2()
        spielende()
    }
}

function wuerfeZaehlenS1() {
    anzahlWuerfeS1 = anzahlWuerfeS1 + 1
    document.getElementById("wuerfeS1").innerHTML = "Anzahl Würfe Spieler 1: " + anzahlWuerfeS1
}


function wuerfeZaehlenS2() {
    anzahlWuerfeS2 = anzahlWuerfeS2 + 1
    document.getElementById("wuerfeS2").innerHTML = "Anzahl Würfe Spieler 2: " + anzahlWuerfeS2
}

function verflixxteSiebenS1() {
    punkte1 = punkte1 - 14
    spielerAnDerReihe = 2
    document.getElementById("punkteS1").innerHTML = "Punkte Spieler 1: " + punkte1
    rundeBeenden()
    document.getElementById("rundeBeendenBtn").disabled = true
}

function verflixxteSiebenS2() {
    punkte2 = punkte2 - 14
    document.getElementById("punkteS2").innerHTML = "Punkte Spieler 2: " + punkte2
    document.getElementById("wuerfelBtn2").disabled = true
    document.getElementById("neuesSpielBtn").disabled = false
    spielende()
}

function rundeBeenden() {
    spielerAnDerReihe = 2
    document.getElementById("wuerfelBtn1").disabled = true
    document.getElementById("wuerfelBtn2").disabled = false
    document.getElementById("rundeBeendenBtn").disabled = true
}

function rundeBeenden2() {
    document.getElementById("wuerfelBtn2").disabled = true
    document.getElementById("neuesSpielBtn").disabled = false
}

function spielende() {
    if (punkte1 < punkte2) {
        document.getElementById("auswertung").innerHTML = "Spieler 2 gewinnt, Herzlichen Glückwunsch!"
    } else {
        if (punkte2 < punkte1) {
            document.getElementById("auswertung").innerHTML = "Spieler 1 gewinnt, Herzlichen Glückwunsch!"
        } else {
            document.getElementById("auswertung").innerHTML = "Unentschieden! Noch eine Runde?"
        }
    }
}

function reload() {
    location.reload()
    document.getElementById("wuerfelBtn2").disabled = true
    document.getElementById("neuesSpielBtn").disabled = true
}

function spielbeschreibung() {
    document.getElementById("spielbeschreibungtf").innerHTML = "Dein Ziel ist es mehr Punkte als dein Gegner zu erreichen. Würfel solange du dich traust und beende dann deinen Zug! Pass aber auf, würfelst du eine 7 ist dein Gegner an der Reihe und dir werden 7 Punkte abgezogen. Dieser hat dann genau so viele Würfe wie du, es sei denn er würfelt selbst eine 7. Auch dann wird sein Zug beendet und 7 Punkte abgezogen."
    document.getElementById("spielbeschreibungbtn").innerHTML = "Und jetzt: Viel Glück! :)"
}