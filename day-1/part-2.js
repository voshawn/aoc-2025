// Count how many times we pass zero
import { readFileSync } from "fs";

const input = readFileSync("./puzzle-input.txt", "utf-8");
const turns = input.split("\n");


let position = 50;
let countZeroes = 0;

turns.forEach((turn) => {
    // Determine direction (1 for Right, -1 for Left)
    // and the distance (magnitude)
    const direction = turn.startsWith("R") ? 1 : -1;
    const distance = parseInt(turn.slice(1));

    // SIMULATION LOOP
    // Instead of doing math, we physically tick the dial one step at a time
    for (let i = 0; i < distance; i++) {
        position += direction;

        // Handle wrapping
        // If we go above 99, wrap to 0
        if (position > 99) {
            position = 0;
        }
        // If we go below 0, wrap to 99
        else if (position < 0) {
            position = 99;
        }

        // CHECK: Did this specific click make us look at 0?
        if (position === 0) {
            countZeroes++;
        }
    }
});

console.log("Total Zeroes:", countZeroes);
