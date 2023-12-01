export const parseInput = (input) => input.split('\n');

export const part1 = (input) => {
  const isNumber = (letter) => !Number.isNaN(Number(letter));

  return input.reduce((acc, curr) => {
    const rowLetters = curr.split('');
    const rowFinalNumber = Number(`${rowLetters.find(isNumber)}${rowLetters.findLast(isNumber)}`);

    return acc + rowFinalNumber;
  }, 0);
};

export const part2 = (input) => {
  const isNumber = (letter) => !Number.isNaN(Number(letter));

  const textNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return input.reduce((acc, row) => {
    const rowLetters = row.trim().split('');

    const firstNumberIndex =
      rowLetters.findIndex(isNumber) !== -1 ? rowLetters.findIndex(isNumber) : Infinity;
    const lastNumberIndex =
      rowLetters.findLastIndex(isNumber) !== -1 ? rowLetters.findLastIndex(isNumber) : -Infinity;

    let firstTextNumber = [Infinity, 0];
    let lastTextNumber = [-Infinity, 0];

    textNumbers.forEach((textNumber, index) => {
      const firstIndex = row.indexOf(textNumber);
      const lastIndex = row.lastIndexOf(textNumber);

      if (firstIndex > -1 && firstIndex < firstTextNumber[0]) {
        firstTextNumber = [firstIndex, index + 1];
      }
      if (lastIndex > -1 && lastIndex > lastTextNumber[0]) {
        lastTextNumber = [lastIndex, index + 1];
      }
    });

    const rowFinalNumber = Number(
      `${
        firstNumberIndex < firstTextNumber[0] ? rowLetters[firstNumberIndex] : firstTextNumber[1]
      }${lastNumberIndex > lastTextNumber[0] ? rowLetters[lastNumberIndex] : lastTextNumber[1]}`
    );

    return acc + rowFinalNumber;
  }, 0);
};
