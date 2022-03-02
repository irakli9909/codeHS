// Constants for main ghost body
var HEAD_RADIUS = 70;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 120;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);
var BODY_COLOR = Color.blue;

// Constants for eyes
var PUPIL_RADIUS = 8;
var PUPIL_LEFT_OFFSET = 16;
var PUPIL_RIGHT_OFFSET = 40;
var EYE_RADIUS = 20;
var EYE_OFFSET = 28;
var EYE_COLOR = Color.red;
var PUPIL_COLOR = Color.black;

/* This program draws a ghost on the canvas. */
function start(){
    var centerX = getWidth()/2;
    var centerY = getHeight()/2;
    
    
    var circle = new Circle(HEAD_RADIUS);
    circle.setPosition(centerX, centerY);
    circle.setColor(BODY_COLOR);
    add(circle);
    
    var body =new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    body.setPosition(centerX - BODY_WIDTH /2, centerY);
    body.setColor(BODY_COLOR);
    add(body);
    
    //loopebi
    for(var foot =0; foot < NUM_FEET; foot++){
    var circle =new Circle(FOOT_RADIUS);
    var footCenterX = centerX - BODY_WIDTH /2+ FOOT_RADIUS;
    var footCenterY = centerY + BODY_HEIGHT;
    circle.setPosition(footCenterX +2* foot * FOOT_RADIUS, footCenterY);
    circle.setColor(BODY_COLOR);
    add(circle);
        
    }
    
    //right eye
    var circle =new Circle(EYE_RADIUS);
    circle.setPosition(centerX - EYE_OFFSET, centerY);
    circle.setColor(EYE_COLOR);
    add(circle);
    //left eye
    var circle =new Circle(EYE_RADIUS);
    circle.setPosition(centerX + EYE_OFFSET, centerY);
    circle.setColor(EYE_COLOR);
    add(circle);
    //right guga :)
    var circle =new Circle(PUPIL_RADIUS);
    circle.setPosition(centerX - PUPIL_LEFT_OFFSET, centerY);
    circle.setColor(PUPIL_COLOR);
    add(circle);
    //left guga :)
    var circle =new Circle(PUPIL_RADIUS);
    circle.setPosition(centerX + PUPIL_RIGHT_OFFSET, centerY);
    circle.setColor(PUPIL_COLOR);
    add(circle);
}
