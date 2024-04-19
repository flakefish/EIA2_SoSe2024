"use strict";
var Shoppinglist;
(function (Shoppinglist) {
    document.addEventListener("DOMContentLoaded", () => {
        const productInput = document.getElementById("product");
        const amountInput = document.getElementById("amount");
        const dateInput = document.getElementById("date");
        const commentsInput = document.getElementById("comments");
        const checkInput = document.getElementById("check");
        // Setze Inputs zu den eingetragenen Mengen
        
        if (productInput) {
            productInput.addEventListener("input", () => {
                console.log("Produkt wurde hinzugefügt");
            });
        }
        if (amountInput) {
            amountInput.addEventListener("change", () => {
                console.log("Menge wurde verändert");
            });
        }
        if (dateInput) {
            dateInput.addEventListener("change", () => {
                console.log("Datum wurde verändert");
            });
        }
        if (commentsInput) {
            commentsInput.addEventListener("input", () => {
                console.log("Kommentar wurde hinzugefügt");
            });
        }
        if (checkInput) {
            checkInput.addEventListener("change", () => {
                console.log("Dein Produkt wurde gekauft werden");
        });
    }
       if (!checkInput) 
       checkInput.addEventListener("change", () => {
        console.log("Dein Produkt muss noch gekauft werden");
    });
})
    // Jegliche Konsolenausgaben, je nachdem ob etwas hinzugefügt wurde, wie bei bspw. productInput oder ob etwas gekauft/nicht gekauft
    // wurde wie bei checkInput

})(Shoppinglist || (Shoppinglist = {}));
//# sourceMappingURL=Einkaufsliste.js.map                 