import * as fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) throw new Error(JSON.stringify(err));

    // solution

    const type = {
        A: 'rock',
        B: 'paper',
        C: 'scissors',
        X: 'rock',
        Y: 'paper',
        Z: 'scissors',
    };
    const score = {
        rock: 1,
        paper: 2,
        scissors: 3,
    };

    const rounds = data
        .split('\n')
        .map((round) => round.split(' ').map((player) => player));

    let totalScore = 0;
    rounds.forEach((round) => {
        const player1 = type[round[0]];
        const player2 = type[round[1]];

        if (player1 === 'rock' && player2 === 'paper')
            totalScore += score[player2] + 6;
        else if (player1 === 'rock' && player2 === 'paper')
            totalScore += score[player2] + 6;
    });
});
