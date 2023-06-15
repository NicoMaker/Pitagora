function calcola() {
    var inputType = document.getElementById("input-type").value;
    var risultatoElement = document.getElementById("risultato");
    risultatoElement.innerHTML = "";

    if (inputType === "ipotenusa") {
        var cateto1 = parseFloat(document.getElementById("cateto1").value);
        var cateto2 = parseFloat(document.getElementById("cateto2").value);

        if (isNaN(cateto1) || isNaN(cateto2)) {
            risultatoElement.innerHTML = "Inserisci entrambi i cateti.";
            return;
        }

        var ipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
        risultatoElement.innerHTML = "L'ipotenusa è: " + ipotenusa.toFixed(2);
    } else if (inputType === "cateto") {
        var ipotenusa = parseFloat(document.getElementById("ipotenusa").value);
        var cateto = parseFloat(document.getElementById("cateto").value);

        if (isNaN(ipotenusa) || isNaN(cateto)) {
            risultatoElement.innerHTML = "Inserisci l'ipotenusa e il cateto.";
            return;
        }

        if (cateto > ipotenusa) {
            risultatoElement.innerHTML = "Il cateto deve essere minore o uguale all'ipotenusa.";
            return;
        }

        var altroCateto = Math.sqrt(ipotenusa * ipotenusa - cateto * cateto);
        risultatoElement.innerHTML = "L'altro cateto è: " + altroCateto.toFixed(2);
    }
}

document.getElementById("input-type").addEventListener("change", function () {
    var ipotenusaInputs = document.getElementById("ipotenusa-inputs");
    var catetoInputs = document.getElementById("cateto-inputs");

    if (this.value === "ipotenusa") {
        ipotenusaInputs.style.display = "block";
        catetoInputs.style.display = "none";
    } else if (this.value === "cateto") {
        ipotenusaInputs.style.display = "none";
        catetoInputs.style.display = "block";
    }
});