import { program } from 'commander';
import { readFileSync, writeFileSync } from 'fs';

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
  .requiredOption('-t, --task <type>', 'task to execute')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .action((options) => {
    let input;
    if (options.input) {
      // Если входной файл указан, читаем данные из файла
      input = readFileSync(options.input, 'utf8');
    } else {
      console.error('Input file is required');
      process.exit(1);
    }

    let result;
    switch (options.task) {
      case 'splitNumbers':
        result = splitNumbers(input);
        break;
      default:
        console.error(`Unknown task: ${options.task}`);
        process.exit(1);
    }

    if (options.output) {
      // Если выходной файл указан, записываем результат в файл
      writeFileSync(options.output, result);
    } else {
      // Или выводим результат в stdout
      console.log(result);
    }
  });

program.parse(process.argv);