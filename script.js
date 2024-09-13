document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const choiceImages = {
        rock: "../rock.jpg",
        paper: "../paper.jpg", 
        scissors: "../scissor.jpg" 
    }
    let player1Score = 0;
    let player2Score = 0;

    const player1ImageElem = document.getElementById('player1Image');
    const player1ScoreElem = document.getElementById('player1Score');
    const player2ImageElem = document.getElementById('player2Image');
    const player2ScoreElem = document.getElementById('player2Score');
    const gameResultElem = document.getElementById('gameResult');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        if (player1Score < 3 && player2Score < 3) {
            const player1Choice = choices[Math.floor(Math.random() * choices.length)];
            const player2Choice = choices[Math.floor(Math.random() * choices.length)];
            
            player1ImageElem.src = choiceImages[player1Choice];
            player2ImageElem.src = choiceImages[player2Choice];

            const result = determineWinner(player1Choice, player2Choice);
            if (result === 'Player 1') {
                player1Score++;
                player1ScoreElem.textContent = `Score: ${player1Score}`;
                gameResultElem.textContent = `Player 1 wins this round!`;
            } else if (result === 'Player 2') {
                player2Score++;
                player2ScoreElem.textContent = `Score: ${player2Score}`;
                gameResultElem.textContent = `Player 2 wins this round!`;
            } else {
                gameResultElem.textContent = 'It\'s a draw!';
            }

            if (player1Score === 3) {
                gameResultElem.textContent = 'Player 1 wins the game!';
                playButton.disabled = true;
            } else if (player2Score === 3) {
                gameResultElem.textContent = 'Player 2 wins the game!';
                playButton.disabled = true;
            }
        }
    });

    function determineWinner(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            return 'Draw';
        } else if (
            (player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'paper' && player2Choice === 'rock') ||
            (player1Choice === 'scissors' && player2Choice === 'paper')
        ) {
            return 'Player 1';
        } else {
            return 'Player 2';
        }
    }
});