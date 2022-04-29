// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//   il prezzo del biglietto è definito in base ai km (0.21 € al km)
//   va applicato uno sconto del 20% per i minorenni
//   va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

function onlyOne(checkbox) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function promptMe() {
    let km = document.getElementById("chilometri").value * 1;

    const prezzoBigliettoAlKm =  km * 0.21;
    
    const scontoMinorenne = prezzoBigliettoAlKm * 20 / 100;
    
    const scontoOver65 = prezzoBigliettoAlKm * 40 / 100;
    
    if (document.getElementById("minorenne").checked) {
        document.getElementById("price-box").innerHTML = Math.round((prezzoBigliettoAlKm - scontoMinorenne) * 100) / 100;
    } else if (document.getElementById("over65").checked) {
        document.getElementById("price-box").innerHTML = Math.round((prezzoBigliettoAlKm - scontoOver65) * 100) / 100;
    } else {
        document.getElementById("price-box").innerHTML = Math.round((prezzoBigliettoAlKm) * 100) / 100;
    }
}
