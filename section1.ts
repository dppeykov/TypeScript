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
