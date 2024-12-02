// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function modElemento(){
    let titolo = document.getElementById("titolo");
    titolo.innerHTML = "Nuovo titolo h1";
    console.log(titolo);
}
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function cambiaColoreBackground(paramVersione){
    switch(paramVersione){
        case "dark": 
            cssVersione = "../StyleDiversi/styleScuro.css";
            break;
        case "light":  
            cssVersione = "../StyleDiversi/styleChiaro.css";
            break;  
        default:
            cssVersione = "../StyleDiversi/style.css";
            break;
    }
    let tagLink = document.querySelector("link");
    //modifica href
    tagLink.href = cssVersione;
}
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function modElementoFooter(){
    let indirizzo = document.getElementById("footer");
    indirizzo.innerHTML = "Nuovo indirizzo ....";
    console.log(indirizzo);
}
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function modElementoLinkAmazon() {
    // Trova il link all'interno del prodotto
    let linkAmazon = document.querySelector(".card-prodotti a");

    // Aggiungi uno stile inline per cambiare il colore
    if (linkAmazon) {
        linkAmazon.style.color = "green"; // Cambia il colore del link in verde
        console.log("Colore del link Amazon modificato in verde.");
    }
}
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine


// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


