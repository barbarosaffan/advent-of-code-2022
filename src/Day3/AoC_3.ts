import { input } from './input';

let upperCaseLetters = Array.from(Array(26)).map((e, i) =>
  String.fromCharCode(i + 65)
);

let lowerCaseLetters = Array.from(Array(26)).map((e, i) =>
  String.fromCharCode(i + 97)
);

let letters = [...lowerCaseLetters, ...upperCaseLetters];

let priorityMap = new Map<string, number>();

letters.forEach((letter, index) => {
  priorityMap.set(letter, index + 1);
})


async function solutionPartOne(input: string) {
  const lines = input.split("\n");
  let totalPriority: number = 0; 

  for await (const line of lines) {
    let firstCompartment : string[] = line.slice(0, line.length / 2).split("");
    let secondCompartment: string[] = line.slice(line.length / 2, line.length).split("");
    let sameLetter: string = '';

    firstCompartment.forEach((letter) => {
      if (secondCompartment.includes(letter)) {
        sameLetter = letter;
    }})
    
    if (priorityMap.get(sameLetter)) {
      totalPriority += priorityMap.get(sameLetter);
    }
  }

  console.log("Solution 3-1", totalPriority);
}

function solutionPartTwo(input: string) {
  const lines = input.split("\n");
  let groups = [];
  let totalPriority: number = 0;

  for (let i = 0; i < lines.length; i += 3) {
    if (lines[i] && lines[i + 1] && lines[i + 2]) {
    groups.push([lines[i].split(""), lines[i + 1].split(""), lines[i + 2].split("")]);
    }
  }

  groups.forEach((group) => {
    let firstCompartment = group[0];
    let secondCompartment = group[1];
    let thirdCompartment = group[2];
    let sameLetter: string = '';

    firstCompartment.forEach((letter) => {
      if (secondCompartment.includes(letter) && thirdCompartment.includes(letter)) {
        sameLetter = letter;
      }
    })

    if (priorityMap.get(sameLetter)) {
      totalPriority += priorityMap.get(sameLetter);
    }
  })

  console.log("Solution 3-2", totalPriority);
}

export function thirdDayResults(){
  solutionPartOne(input);
  solutionPartTwo(input);
}

thirdDayResults();
