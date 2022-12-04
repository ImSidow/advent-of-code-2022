import * as fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) throw new Error(JSON.stringify(err));

    // solution

    const score = {
        A: 'Rock',
        B: 'Paper',
        C: 'Scissors',
        X: 'Rock',
        Y: 'Paper',
        Z: 'Scissors',
    };

    const rounds = data
        .split('\n')
        .map((round) => round.split(' ').map((player) => player));

    rounds.forEach((round) => {
        const player1 = score[round[0]]
        const player2 = score[round[1]]

        if (player1 === 'Rock' && player2 === 'Paper') 
        console.log();
    });
});
