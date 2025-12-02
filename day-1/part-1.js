// Count how many times we land on Zero
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
    position = (position + turnValue) % 100;
    if (position < 0) {
        position = 100 + position;
    }
    if (position === 0) {
        countZeroes = countZeroes + 1;
    }
});

console.log(countZeroes);
