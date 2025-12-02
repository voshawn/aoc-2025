// Count how many times we pass zero
import { readFileSync } from "fs";

const input = readFileSync("./puzzle-input.txt", "utf-8");
const turns = input.split("\n");


let position = 50;
let countZeroes = 0;

const parseTurn = (turn) => {
    if (turn.startsWith("L")) {
        return parseInt(turn.slice(1)) * -1;
    } else {
        return parseInt(turn.slice(1));
    }
}

turns.forEach((turn) => {
    const turnValue = parseTurn(turn);
    console.log("turnValue", turnValue);
    let newPosition = (position + turnValue) % 100;
    if (newPosition < 0) {
        newPosition = 100 + newPosition;
    }
    console.log("newPosition", newPosition);
    // count zeros
    if (newPosition === 0) {
        countZeroes = countZeroes + 1;
        console.log("zero added", 1);
    }
    // Count full rotations
    const fullRotations = Math.trunc((position + turnValue) / 100);
    if (Math.abs(fullRotations) > 0 && newPosition !== 0) {
        countZeroes = countZeroes + Math.abs(fullRotations);
        console.log("fullRotations added", fullRotations);
    }

    // Count backward rotations pass zero
    const backRotation = position + turnValue
    if (backRotation < 0 && position !== 0) {
        countZeroes = countZeroes + 1;
        console.log("backRotation added", 1);
    }
    position = newPosition;
});

console.log("total countZeroes", countZeroes);

