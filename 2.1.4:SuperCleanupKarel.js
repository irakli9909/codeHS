function start() {
    clean();
    while(rightIsClear()){
        moveline();
        clean();
    }
    kuskus();
}

//this function is clean.
function clean(){
    if(ballsPresent()){
        takeBall();
    }
    while(frontIsClear()){
        move();
        if(ballsPresent()){
            takeBall();
        }
    }
    turnAround();
    while(frontIsClear()){
        move();
    }
}
//this function is move next line.
function moveline(){
    turnRight();
    move();
    turnRight();
}
//this function is dog go home and sit down.
function kuskus(){
    turnLeft();
    while(frontIsClear()){
        move();
    }
    turnLeft();
}
