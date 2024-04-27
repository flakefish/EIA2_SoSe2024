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
            for (let item of _items) {
                let checkbox: HTMLInputElement = document.createElement("input")
                checkbox.type = "checkbox";
                checkbox.setAttribute("price", item.amount.toFixed(2)); 
                checkbox.value = item.name;
                checkbox.name = "_category";
                checkbox.id = item.name;

                let label: HTMLLabelElement = document.createElement("label");
                label.textContent = item.name; 
                label.htmlFor = item.name;

                group.appendChild(checkbox);
                group.appendChild(label);
            }
            return group;
        }
    }