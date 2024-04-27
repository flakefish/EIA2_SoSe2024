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
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var item = _items_1[_i];
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.amount.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = "_category";
            checkbox.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(ShoppingList2 || (ShoppingList2 = {}));
