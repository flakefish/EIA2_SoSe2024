namespace ShoppingList2 {
    export function generateContent(_data: Data) {
        const fieldset = document.querySelector("fieldset");

        if (!fieldset) return;

        for (let category in _data) {
            let items: Item[] = _data[category];
            let group = createSelect(items, category);
            if (group) {
                fieldset.appendChild(group);
            }
        }
    }

    function createSelect(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div"); 
        group.classList.add("Entry");
    
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("input");
    
        const productInput = document.createElement("input");
        productInput.type = "text";
        productInput.placeholder = "Produkt";
        inputDiv.appendChild(productInput);
    
        const checkInput = document.createElement("input");
        checkInput.type = "checkbox";
        checkInput.name = "Product";
        checkInput.id = "check";
        checkInput.value = "Product";
        inputDiv.appendChild(checkInput);
    
        const checkLabel = document.createElement("label");
        checkLabel.textContent = "Gekauft?";
        checkLabel.classList.add("purchaseText");
        checkLabel.htmlFor = "check";
        inputDiv.appendChild(checkLabel);
    
        group.appendChild(inputDiv);
    
        const inputDiv2 = document.createElement("div");
        inputDiv2.classList.add("input");
    
        const amountInput = document.createElement("input");
        amountInput.type = "number";
        amountInput.name = "Menge";
        amountInput.step = "1";
        amountInput.min = "0";
        amountInput.max = "30";
        amountInput.value = "0";
        inputDiv2.appendChild(amountInput);
    
        const commentsInput = document.createElement("input");
        commentsInput.type = "text";
        commentsInput.placeholder = "Kommentar";
        inputDiv2.appendChild(commentsInput);
    
        const dateInput = document.createElement("input");
        dateInput.type = "date";
        inputDiv2.appendChild(dateInput);
    
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.classList.add("deleteButton");
        inputDiv2.appendChild(deleteButton);
    
        group.appendChild(inputDiv2);
    
        return group;
    }
}