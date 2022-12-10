import * as fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) throw new Error(JSON.stringify(err));

    // solution

    const elves = data
        .split('\n\n')
        .map((data) => data.split('\n').map((calories) => Number(calories)));

    const topMostCaloriesElves = elves
        .map((elf) => elf.reduce((item, sum) => item + sum, 0))
        .sort((a, b) => b - a);

    // answer 1
    console.log('answer 1', topMostCaloriesElves[0]);

    // answer 2
    const totalOfTop3 = topMostCaloriesElves
        .splice(0, 3)
        .reduce((item, sum) => item + sum, 0);

    console.log('answer 1', totalOfTop3);
});
