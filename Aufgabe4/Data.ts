namespace Shoppinglist2 {
    interface Item {
            name: string;
            price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Product: [
            {name: "Product", price: 0.50}
        ]
    }
}