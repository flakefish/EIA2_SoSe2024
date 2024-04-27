namespace ShoppingList2 {
    document.addEventListener("DOMContentLoaded", () => {
        generateContent(data);

        const newEntryButton = document.getElementById("newEntryButton");
        if (newEntryButton) {
            newEntryButton.addEventListener("click", () => {
                addNewEntry();
            });
        }
    });

    function addNewEntry() {
        const productInput = document.getElementById("product") as HTMLInputElement;
        const amountInput = document.getElementById("amount") as HTMLInputElement;
        const dateInput = document.getElementById("date") as HTMLInputElement;
        const commentsInput = document.getElementById("comments") as HTMLInputElement;
        const checkInput = document.getElementById("check") as HTMLInputElement;

        const newItem: Item = {
            name: productInput.value,
            amount: parseFloat(amountInput.value),
            date: dateInput.value,
            comment: commentsInput.value,
            check: checkInput.checked
        };

        // Füge das neue Element der Liste hinzu
        if (data.Product) {
            data.Product.push(newItem);
        } else {
            data.Product = [newItem];
        }

        // Aktualisiere die Anzeige
        generateContent(data);
    }
}