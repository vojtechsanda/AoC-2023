import fs from 'fs';
import solve from './solve';

const year = process.argv[2];
const dayToSolve = process.argv[3];

const days = [];
const solutions = {};
const inputs = {};

try {
  const files = fs.readdirSync(`./solutions`);

  files.forEach((file) => {
    days.push(file);
  });
} catch (err) {
  console.log(`Failed to read days from ${year}: ${err}`);
}

days.forEach(async (day) => {
  solutions[day] = import(`./solutions/${day}/index.js`);
  inputs[day] = import(`./solutions/${day}/input.js`);
});

solve(year, dayToSolve, solutions[dayToSolve], inputs[dayToSolve]);
