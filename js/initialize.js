var p1,p0;
// p0 = prompt("Enter First Player Name");
// p1 = prompt("Enter Second Player Name");
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
