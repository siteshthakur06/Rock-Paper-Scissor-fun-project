let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updatescore();


function play(playerMove) {
    const comp = pickComp();

    let result = '';

    if (playerMove === 'scissors') {
        if (comp === 'rock') {
            result = 'you lose';
        }
        else if (comp === 'paper') {
            result = 'you win';
        }
        else if (comp === 'scissors') {
            result = 'tie';
        }
    }
    else if (playerMove === 'paper') {
        if (comp === 'rock') {
            result = 'you win';
        }
        else if (comp === 'paper') {
            result = 'tie';
        }
        else if (comp === 'scissors') {
            result = 'you lose';
        }
    }
    else if (playerMove === 'rock') {
        if (comp === 'rock') {
            result = 'tie';
        }
        else if (comp === 'paper') {
            result = 'you lose';
        }
        else if (comp === 'scissors') {
            result = 'you win';
        }
    }

    if (result === 'you win') {
        score.wins += 1;
    }
    else if (result === 'you lose') {
        score.losses += 1;
    }
    else if (result === 'tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML = ` You: 
        <img src="${playerMove}.jpg" class="allimgs" alt="">
        Computer:
        <img src="${comp}.jpg" class="allimgs" alt="">`;

}

function updatescore() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}


function pickComp() {

    const num = Math.random();
    let comp = '';
    if (num >= 0 && num < 1 / 3) {
        comp = 'rock';
    }
    else if (num >= 1 / 3 && num < 2 / 3) {
        comp = 'paper';
    }
    else if (num >= 2 / 3 && num < 1) {
        comp = 'scissors';
    }
    return comp;
}
