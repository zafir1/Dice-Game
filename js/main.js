var scores,roundScore,activePlayer,dice,number;
scores = [0,0];
activePlayer = 0;
roundScore = 0;

var p1,p0;
p0 = prompt("Enter First Player Name");
p1 = prompt("Enter Second Player Name");
if(p0.length==0){
    p0 = "Player 1";
}
if(p1.length==0){
    p1 = "Player 2";
}
document.getElementById("player-1-score").textContent = 0;
document.getElementById("player-0-score").textContent = 0;
document.getElementById('player-0-name').textContent = p0;
document.getElementById('player-1-name').textContent = p1;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function rollDice(){
    return getRandomInt(6)+1;
}

number = rollDice();

function togglePlayer(){
    activePlayer = 1-activePlayer;
    activeStatus();
    diceButtonColor();
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
    document.getElementById('player-'+activePlayer+'-active').innerHTML = 'Active';
    document.getElementById('player-'+(1-activePlayer)+'-active').innerHTML = '';
}

document.querySelector('#dice').addEventListener('click',function(){
    activeStatus();
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
    activeStatus();
});

document.getElementById('hold').addEventListener('click',togglePlayer);