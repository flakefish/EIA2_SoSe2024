namespace ShoppingList2 {

    export function generateContent(_data: Data) {

        for(let category in _data) {
           // console.log(category);
           let items: Item[] = _data[category];

           let group = HTMLElement;
           switch (category) {
            case "Product":
                group = createSelect(items);

                default:
                break;
           }
          let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset")
          if (fieldset && group)
            fieldset.appendChild(group);
        }
        }
        function createSelect(_items: Item[]): HTMLElement | null {
            return null;
        }
    }