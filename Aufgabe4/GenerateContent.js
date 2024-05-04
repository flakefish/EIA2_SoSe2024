var ShoppingList2;
(function (ShoppingList2) {
    function generateContent(_data) {
        var fieldset = document.querySelector("fieldset");
        if (!fieldset)
            return;
        for (var category in _data) {
            var items = _data[category];
            var group = createSelect(items, category);
            if (group) {
                fieldset.appendChild(group);
            }
        }
    }
    ShoppingList2.generateContent = generateContent;
    function createSelect(_items, _category) {
        var group = document.createElement("div");
        group.classList.add("Entry");
        var inputDiv = document.createElement("div");
        inputDiv.classList.add("input");
        var productInput = document.createElement("input");
        productInput.type = "text";
        productInput.placeholder = "Produkt";
        inputDiv.appendChild(productInput);
        var checkInput = document.createElement("input");
        checkInput.type = "checkbox";
        checkInput.name = "Product";
        checkInput.id = "check";
        checkInput.value = "Product";
        inputDiv.appendChild(checkInput);
        var checkLabel = document.createElement("label");
        checkLabel.textContent = "Gekauft?";
        checkLabel.classList.add("purchaseText");
        checkLabel.htmlFor = "check";
        inputDiv.appendChild(checkLabel);
        group.appendChild(inputDiv);
        var inputDiv2 = document.createElement("div");
        inputDiv2.classList.add("input");
        var amountInput = document.createElement("input");
        amountInput.type = "number";
        amountInput.name = "Menge";
        amountInput.step = "1";
        amountInput.min = "0";
        amountInput.max = "30";
        amountInput.value = "0";
        inputDiv2.appendChild(amountInput);
        var commentsInput = document.createElement("input");
        commentsInput.type = "text";
        commentsInput.placeholder = "Kommentar";
        inputDiv2.appendChild(commentsInput);
        var dateInput = document.createElement("input");
        dateInput.type = "date";
        inputDiv2.appendChild(dateInput);
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.classList.add("deleteButton");
        inputDiv2.appendChild(deleteButton);
        group.appendChild(inputDiv2);
        return group;
    }
})(ShoppingList2 || (ShoppingList2 = {}));
