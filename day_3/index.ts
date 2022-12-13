import * as fs from 'fs';

const getCustomCharCode = (char: string) => {
    if (char === char.toUpperCase()) {
        // char is uppercase
        char = char.toLowerCase();
        return char.charCodeAt(0) - 70;
    } else if (char === char.toLowerCase()) {
        // char is lowercase
        char = char.toUpperCase();
        return char.charCodeAt(0) - 64;
    }
    return 0;
};

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) throw new Error(JSON.stringify(err));

    const arr = data.split('\n');
    // comment added

    // answer 1
    let total = 0;
    arr.forEach((input) => {
        const middle = input.length / 2;
        const firstPart = input.slice(0, middle);

        let commonChar = input
            .slice(middle)
            .split('')
            .filter((char) => firstPart.includes(char))[0];
        total += getCustomCharCode(commonChar);
    });

    console.log('answer 1:', total);

    // answer 2
    let total1 = 0;
    for (let i = 0; i < arr.length; i + 3) {
        let result = arr.splice(i, 3);
        let commonChar = result[0]
            .split('')
            .filter(
                (char) => result[1].includes(char) && result[2].includes(char)
            )[0];

        total1 += getCustomCharCode(commonChar);
    }

    console.log('answer 2:', total1);
});
