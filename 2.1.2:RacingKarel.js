/* This program will have Karel run around the racetrack
 * 8 times. */
function start() {
    goodDog();
}
function moving(){
    for(var i = 0; i < 8; i++)
        putBall();
}
function go(){
    while(frontIsClear()){
        move();
    }
    if(frontIsBlocked()){
        turnLeft();
    }
}

function goodDog(){
    moving();
    go();
    moving();
    go();
    moving();
    go();
    moving();
    go();
}
