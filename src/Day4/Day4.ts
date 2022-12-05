import { input } from "./input";

const lines : string[] = input.split("\n");
const pairs : string[][] = lines.map((line) => line.split(","));

let fullyContainingPairs : number = 0;
let overlappingPairs : number = 0;

pairs.forEach((pair) => {
    const pair1 : number[] = pair[0].split("-").map((num) => parseInt(num));
    const pair2 : number[] = pair[1].split("-").map((num) => parseInt(num));

    if (pair1[0] <= pair2[0] && pair1[1] >= pair2[1]) {
        fullyContainingPairs++;
    } else if (pair2[0] <= pair1[0] && pair2[1] >= pair1[1]) {
        fullyContainingPairs++;
    } 
})

pairs.forEach((pair) => {
    const pair1 : number[] = pair[0].split("-").map((num) => parseInt(num));
    const pair2 : number[] = pair[1].split("-").map((num) => parseInt(num));

    if (pair1[0] <= pair2[0] && pair1[1] >= pair2[0]) {
        overlappingPairs++;
    } else if (pair2[0] <= pair1[0] && pair2[1] >= pair1[0]) {
        overlappingPairs++;
    }
})

console.log("Solution 4-1", fullyContainingPairs);
console.log("Solution 4-2", overlappingPairs);