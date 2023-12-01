import fs from 'fs';
import path from 'path';

export const getExampleInput = async () =>
  fs.readFileSync(path.resolve(process.env.NODE_PATH, 'inputs/{{DAY}}/example.txt')).toString();

export const getInput = async () =>
  fs.readFileSync(path.resolve(process.env.NODE_PATH, 'inputs/{{DAY}}/input.txt')).toString();
