var PAN_RADIUS = getWidth()/3;
var HANDLE_WIDTH = getWidth()/2;
var HANDLE_HEIGHT = HANDLE_WIDTH/4;
var PAN_COLOR = Color.GRAY;

var PAN_BOTTOM_RADIUS = PAN_RADIUS-20;
var PAN_BOTTOM_COLOR = Color.BLACK;

var EGG_RADIUS = PAN_BOTTOM_RADIUS/4;
var EGG_WHITE_COLOR = Color.WHITE;
var EGG_YOLK_COLOR = Color.YELLOW; 

var HIGHLIGHT_RADIUS = EGG_RADIUS/4;
var HIGHLIGHT_COLOR = Color.WHITE;


function start() {
    var pan = new Circle(PAN_RADIUS);
    pan.setPosition(getWidth()/2 ,getHeight()/2);
    pan.setColor(PAN_COLOR);

    var panHandle = new Rectangle(HANDLE_WIDTH ,HANDLE_HEIGHT);
    panHandle.setPosition(getWidth()/2, getHeight()/2 - EGG_RADIUS);
    panHandle.setColor(PAN_COLOR);

    var panBottom = new Circle(PAN_BOTTOM_RADIUS);
    panBottom.setPosition(getWidth()/2 ,getHeight()/2);
    panBottom.setColor(PAN_BOTTOM_COLOR);

    var centerX = getWidth()/2;
    var centerY = getHeight()/2;

    var eggWhite1 = new Circle(EGG_RADIUS);
    eggWhite1.setPosition(centerX + EGG_RADIUS - 5 ,centerY - EGG_RADIUS);
    eggWhite1.setColor(EGG_WHITE_COLOR);

    var eggWhite2 = new Circle(EGG_RADIUS);
    eggWhite2.setPosition(centerX - EGG_RADIUS ,centerY - EGG_RADIUS);
    eggWhite2.setColor(EGG_WHITE_COLOR);

    var eggWhite3 = new Circle(EGG_RADIUS);
    eggWhite3.setPosition(centerX - EGG_RADIUS*2 + 6 ,centerY + 5);
    eggWhite3.setColor(EGG_WHITE_COLOR);

    var eggWhite4 = new Circle(EGG_RADIUS);
    eggWhite4.setPosition(centerX - EGG_RADIUS*2 + EGG_RADIUS +5 ,centerY + EGG_RADIUS + 8);
    eggWhite4.setColor(EGG_WHITE_COLOR);

    var eggWhite5 = new Circle(EGG_RADIUS);
    eggWhite5.setPosition(centerX + EGG_RADIUS ,centerY + EGG_RADIUS -5);
    eggWhite5.setColor(EGG_WHITE_COLOR);

    var yolk = new Circle(EGG_RADIUS);
    yolk.setPosition(getWidth()/2,getHeight()/2);
    yolk.setColor(EGG_YOLK_COLOR);

    var highlight = new Circle(HIGHLIGHT_RADIUS);
    highlight.setPosition(getWidth()/2 + 5 ,getHeight()/2 - 7);
    highlight.setColor(Color.white);

    add(pan);
    add(panHandle);
    add(panBottom);
    add(eggWhite1);
    add(eggWhite2);
    add(eggWhite3);
    add(eggWhite4);
    add(eggWhite5);
    add(yolk);
    add(highlight);


}
