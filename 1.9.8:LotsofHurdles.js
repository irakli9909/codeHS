function start(){
	for(var i = 0; i < 5; i++){
	    longWey();
	}
}

function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
}


function jumpDown(){
    move();
    turnRight();
    move();
    turnLeft();
}

function longWey(){
    move();
    move();
	jumpHurdle();
	jumpDown();
    
}
