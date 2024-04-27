namespace ShoppingList2 {   
    document.addEventListener("DOMContentLoaded", () => {

        generateContent(data);

        const productInput = document.getElementById("product");
        const amountInput = document.getElementById("amount");
        const dateInput = document.getElementById("date");
        const commentsInput = document.getElementById("comments");
        const checkInput = document.getElementById("check");
    
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
                console.log("Dein Produkt soll gekauft werden");
            });
        }
    });
    }