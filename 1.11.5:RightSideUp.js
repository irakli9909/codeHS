function start(){
    frontClear();
}

function frontClear(){
    if(leftIsClear()){
        turnLeft();
    }else{
        turnRight();
        turnRight();
    }
}
