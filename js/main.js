var scores,roundScore,activePlayer,dice,number;
scores = [0,0];
activePlayer = 0;
roundScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function rollDice(){
    return getRandomInt(6)+1;
}

number = rollDice();

function togglePlayer(){
    activePlayer = 1-activePlayer;
}

function diceButtonColor(){
    let btn = document.getElementById('dice');
    if(activePlayer===0){
        btn.classList.remove('btn-outline-success');
        btn.classList.add('btn-success');
    }else{
        btn.classList.remove('btn-success');
        btn.classList.add('btn-primary');
    }
}

function resetScores(){
    scores[0] = 0;
    scores[1] = 0;
    activePlayer = 0;
    dice = 0;
    document.getElementById('player-0-score').textContent = '0';
    document.getElementById('player-1-score').textContent = '0';
    document.getElementById('current-dice-value').textContent = 'Start rolling dice';
    diceButtonColor();
}

function checkWin(){
    if(scores[activePlayer] >= 100){
        return true;
    }
    return false;
}

function winMessage(p){
    let player = document.getElementById('player-'+p+'-name').textContent;
    alert(player + 'has scored '+ scores[p] +' and won the match.');
    resetScores();
}

function activeStatus(){
    
}

document.querySelector('#dice').addEventListener('click',function(){
    let dice = rollDice();
    document.querySelector("#current-dice-value").innerHTML = "<b>"+ dice +"</b>";
    document.querySelector('#player-'+ activePlayer + '-score').innerHTML = "<b>"+ scores[activePlayer] +"</b>";
    if(dice==1){
        togglePlayer();
        diceButtonColor();
        alert("Chance For " + document.getElementById('player-'+activePlayer+'-name').textContent);
    }else{
        scores[activePlayer] += dice;
        
    }
    document.querySelector("#current-dice-value").innerHTML = "<b>"+ dice +"</b>";
    document.querySelector('#player-'+ activePlayer + '-score').innerHTML = "<b>"+ scores[activePlayer] +"</b>";
    if(checkWin()){
        winMessage(activePlayer);
    }
});

document.getElementById('hold').addEventListener('click',togglePlayer);