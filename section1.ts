//REPL: https://repl.it/@DamyanPeykov/Learining-TypeScript

let varName: string = "String here";

console.log(varName);

function nameFunc(): void { //If the function does not return any value
    console.log("Helloo");
}

nameFunc();

function getInventoryItem(trackingNumber: string): {
    displayName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    originalCost: number;
} {
    return {
        displayName: "Package",
        inventoryType: "pkg",
        trackingNumber: trackingNumber,
        createDate: new Date(),
        originalCost: 12222334
    };
}

console.log(getInventoryItem("Testing"))

// Using the any type will allow you to cast any type to any other - like the normal JS
let originalCost: any = 425;
originalCost = "a lot of money"

// Using interfaces - better than the method in the getInventoryItem function above
// The big advantage is that the interface can be used with any function and with as many as we want

interface InventoryItem {
    displayName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    originalCost: number;
}

function getInventoryItemWithInterface(trackingNum: string): InventoryItem {
    return {
        displayName: "Package",
        inventoryType: "pkg",
        trackingNumber: trackingNum,
        createDate: new Date(),
        originalCost: 12222334
    };
}

console.log(getInventoryItemWithInterface("Testing 2"))
