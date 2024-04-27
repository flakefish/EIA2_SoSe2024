"use strict";
var ShoppingList2;
(function (ShoppingList2) {
    document.addEventListener("DOMContentLoaded", function () {
        generateContent(data);
        var newEntryButton = document.getElementById("newEntryButton");
        if (newEntryButton) {
            newEntryButton.addEventListener("click", function () {
                addNewEntry();
            });
        }
    });
    function addNewEntry() {
        var productInput = document.getElementById("product");
        var amountInput = document.getElementById("amount");
        var dateInput = document.getElementById("date");
        var commentsInput = document.getElementById("comments");
        var checkInput = document.getElementById("check");
        var newItem = {
            name: productInput.value,
            amount: parseFloat(amountInput.value),
            date: dateInput.value,
            comment: commentsInput.value,
            check: checkInput.checked
        };
        // Füge das neue Element der Liste hinzu
        if (data.Product) {
            data.Product.push(newItem);
        }
        else {
            data.Product = [newItem];
        }
        // Aktualisiere die Anzeige
        generateContent(data);
    }
})(ShoppingList2 || (ShoppingList2 = {}));
