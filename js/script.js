let rain = prompt("How many inches of rain fell?");
let asterisk = "*"
console.log("Rain: " + asterisk.repeat(rain));


// alternative method 
/*
let aster = "";
for (let i = 0; i < rain; i++) {    
    aster += "*"
};
console.log("Rain: " + aster);
*/

let yield;
if (rain >= 20) {
    yield = 50 * .9;
} else if (rain < 10) {
    yield = 50 * .8;
} else {
    yield = 50;
};


let fertilizer = prompt("Did you use fertilizer?");

if (fertilizer === "yes") {
    let whichFert = prompt("Did you use premium or regular fertilizer?")
    if (whichFert === "premium") {
        console.log("The yield should be " + (yield * 1.15).toFixed(2) + " bushels per acre.");
    } else if (whichFert === "regular") {
        console.log("The yield should be " + (yield * 1.1).toFixed(2) + " bushels per acre.");
    };
} else if (fertilizer === "no") {
    console.log("The yield should be " + yield + " bushels per acre.");
}


