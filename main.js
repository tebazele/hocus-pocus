let witchPointsBtn = document.getElementById('witch-points');
let kidPointsBtn = document.getElementById('kid-points');

let witchPoints = 0;
let kidPoints = 0;

function drainSouls() {
    console.log("soul drained");
    witchPoints += 1;
    drawPoints();
}

function drainSouls5() {
    witchPoints += 5;
    drawPoints();
}

function foilWitches() {
    console.log("witch foiled")
    kidPoints += 1;
    drawPoints();
}

function foilWitches3() {
    kidPoints += 3;
    drawPoints();
}

function restartGame() {
    witchPoints = 0;
    kidPoints = 0;
    drawPoints();
}

function drawPoints() {
    document.getElementById('witch-score').innerText = witchPoints;
    document.getElementById('kid-score').innerText = kidPoints;
}

drawPoints();