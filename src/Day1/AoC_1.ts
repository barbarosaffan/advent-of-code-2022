import fs from 'fs';
import readline from 'readline';

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
  console.log('Solution 1-1', maxInventory);
}

async function solution2() {
  const fileStream = fs.createReadStream('./input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let currentInventory: number = 0;
  let firstInventory: number = 0;
  let secondInventory: number = 0;
  let thirdInventory: number = 0;

  for await (const line of rl) {
    if (line.length > 0) {
      currentInventory += Number(line);
    } else {
      currentInventory = 0;
    }

    if (currentInventory > firstInventory) {
      thirdInventory= secondInventory;
      secondInventory = firstInventory;
      firstInventory = currentInventory;
    } else if (currentInventory > secondInventory && currentInventory != firstInventory) {
      thirdInventory = secondInventory
      secondInventory = currentInventory
    } else if (currentInventory > thirdInventory && currentInventory != secondInventory) {
      thirdInventory = currentInventory
    }

  }

  console.log("Solution 1-2", firstInventory + secondInventory + thirdInventory);
}

solution();
solution2();
