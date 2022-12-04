import { input } from './input';

async function solution(input: string) {
  const lines = input.split("\n");

  let currentInventory: number = 0;
  let maxInventory: number = 0;

  for await (const line of lines) {
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

async function solution2(input: string) {
  const lines = input.split("\n");

  let currentInventory: number = 0;
  let firstInventory: number = 0;
  let secondInventory: number = 0;
  let thirdInventory: number = 0;

  for await (const line of lines) {
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

export function firstDayResults() {
  solution(input);
  solution2(input);
}

firstDayResults();
