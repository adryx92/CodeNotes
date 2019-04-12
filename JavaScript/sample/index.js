import { sum, cube } from './customModule';

let name = "Francesco";

let one = 4;
let two = 25;

let sumVal = sum(one, two);
let cubeVal = cube(one);

console.log(`Hello ${name}, sum of ${one} and ${two} is ${sumVal} and cube of ${one} is ${cubeVal}`);