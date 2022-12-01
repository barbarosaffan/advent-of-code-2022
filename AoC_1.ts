const fs = require('fs');
const readline = require('readline');

async function solution() {
  const fileStream = fs.createReadStream('./input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let currentInventory: number = 0;
  let maxInventory: number = 0;

  for await (const line of rl) {
    if (line.length > 0) {
      currentInventory += Number(line);
    } else {
      currentInventory = 0;
    }

    if (currentInventory > maxInventory) {
      maxInventory = currentInventory;
    }
  }

  console.log(`Max elf carries ${maxInventory} calories.`);
}

async function solution2() {
  const fileStream = fs.createReadStream('./input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let currentInventory: number = 0;
  let maxFirstInventory: number = 0;
  let maxSecondInventory: number = 0;
  let maxThirdInventory: number = 0;

  for await (const line of rl) {
    if (line.length > 0) {
      currentInventory += Number(line);
    } else {
      currentInventory = 0;
    }

    if (currentInventory > maxFirstInventory && currentInventory > maxSecondInventory && currentInventory > maxThirdInventory) {
      maxThirdInventory = currentInventory;
    } else if (currentInventory > maxFirstInventory && currentInventory > maxSecondInventory) {
      maxSecondInventory = currentInventory;
    }
    else if (currentInventory > maxFirstInventory) {
      maxFirstInventory = currentInventory;
    }
  }

  console.log(`Top three elves carry ${maxFirstInventory + maxSecondInventory + maxThirdInventory} calories.`);
}

solution();
solution2();
