namespace ShoppingList2 {
    export interface Item {
            name: string;
            amount: number;
            date: string;
            comment: string;
            check: boolean;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Product: [
            { name: "Product", amount: 1, date: "27.04.2024", comment:"Habe ich", check: true },
        ]
    }
}
