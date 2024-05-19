import { program } from 'commander';

function splitNumbers(input) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = input;

    for (let i = 0; i < numbers.length; i++) {
        const regex = new RegExp(numbers[i], 'g');
        result = result.replace(regex, `${numbers[i]} `);
    }

    return result.trim();
}

program
  .option('-n, --numbers <type>', 'input string of numbers')
  .action((options) => {
    const result = splitNumbers(options.numbers);
    console.log(result);
  });

program.parse(process.argv);
