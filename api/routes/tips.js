import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const tips = require('../tips.json');

// configure route
const numberOfTips = 4;

function generateRandomNumber(array) {
  // create a number, test if its in the array already and if not add it.
  const number = Math.floor(Math.random() * tips.entries.length + 1);
  if (!array.includes(number)) {
    array.push(number);
    return;
  }
  // if there is a dupe, then recursively create a new one until a non-dupe has been created
  generateRandomNumber(array);
}

// randomly generate the array positions for the tips to return
function generateRandomNumbers(amount) {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
    generateRandomNumber(numbers);
  }
  return numbers;
}

export default function tipsRoute(req, res) {
  const tipsNumbersToReturn = generateRandomNumbers(numberOfTips);

  // after the random tip numbers have been create, use those to pull the actual tips and add to an array
  const tipsToReturn = [];
  tipsNumbersToReturn.map((tip) => tipsToReturn.push(tips.entries[tip - 1]));

  // return the tips
  res.status(200).send({ message: tipsToReturn });
}
