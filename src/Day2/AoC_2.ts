import fs from 'fs';
import readline from 'readline';

let rpsMap = new Map<string, string>();

rpsMap.set("A", "rock");
rpsMap.set("B", "paper");
rpsMap.set("C", "scissors");
rpsMap.set("X", "rock");
rpsMap.set("Y", "paper");
rpsMap.set("Z", "scissors");

function calculateOutcome(scenario: string | undefined, choice: string | undefined): number {
    let outcome: number = 0;

    if (scenario == "lose") {
        outcome += 0;
    } else if (scenario == "draw") {
        outcome += 3;
    } else if (scenario == "win") {
        outcome += 6;
    }
    if (choice == "rock") {
        outcome += 1;
    } else if (choice == "paper") {
        outcome += 2;
    } else if (choice == "scissors") {
        outcome += 3;
    }

    return outcome;
}

function calculateOutcomeSecond(enemyChoice: string | undefined, yourChoice: string | undefined): number {
    let outcome: number = 0;

    if (enemyChoice == "rock" && yourChoice == "X") {
        outcome += 3;
    } else if (enemyChoice == "rock" && yourChoice == "Y") {
        outcome += 4;
    } else if (enemyChoice == "rock" && yourChoice == "Z") {
        outcome += 8;
    }

    if (enemyChoice == "paper" && yourChoice == "X") {
        outcome += 1;
    } else if (enemyChoice == "paper" && yourChoice == "Y") {
        outcome += 5;
    } else if (enemyChoice == "paper" && yourChoice == "Z") {
        outcome += 9;
    }

    if (enemyChoice == "scissors" && yourChoice == "X") {
        outcome += 2;
    } else if (enemyChoice == "scissors" && yourChoice == "Y") {
        outcome += 6;
    } else if (enemyChoice == "scissors" && yourChoice == "Z") {
        outcome += 7;
    }

    return outcome;
}

function calculateScenario(enemyChoice: string | undefined, yourChoice: string | undefined) {
    if (enemyChoice == "rock" && yourChoice == "paper") {
        return "win"
    } else if (enemyChoice == "rock" && yourChoice == "scissors") {
        return "lose"
    } else if (enemyChoice == "rock" && yourChoice == "rock") {
        return "draw"
    }

    if (enemyChoice == "paper" && yourChoice == "scissors") {
        return "win"
    }
    if (enemyChoice == "paper" && yourChoice == "rock") {
        return "lose"
    }
    if (enemyChoice == "paper" && yourChoice == "paper") {
        return "draw"
    }

    if (enemyChoice == "scissors" && yourChoice == "rock") {
        return "win"
    }
    if (enemyChoice == "scissors" && yourChoice == "paper") {
        return "lose"
    }
    if (enemyChoice == "scissors" && yourChoice == "scissors") {
        return "draw"
    }
}

async function solution() {
    const fileStream = fs.createReadStream('./input.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let firstPoints: number = 0;
    let secondPoints: number = 0;

    for await (const line of rl) {
        let choices: string[] = line.split(" ");
        let enemy: string | undefined = rpsMap.get(choices[0]);
        let you: string | undefined = rpsMap.get(choices[1]);

        firstPoints += calculateOutcome(calculateScenario(enemy, you), you);
        secondPoints += calculateOutcomeSecond(enemy, choices[1]);
    }

    console.log("Solution 2-1", firstPoints);
    console.log("Solution 2-2", secondPoints);
}

export function secondDayResults(){
    solution();
}

