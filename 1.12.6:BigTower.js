/* This program draws a big tower from Karel's starting spot */
function start(){
    spin();
    if(facingSouth()){
        turnAround();
    }
    if(facingWest()){
        turnRight();
    }
    if(facingEast()){
        turnLeft();
    }
    while (noBallsPresent()){
        putBall();
        buildTower();
    }
}

function buildTower(){
    if(frontIsClear()){
        move();
    }
}

function spin(){
    turnAround();
}
