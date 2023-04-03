
var MOUSE = new WebImage("resources/Stone Shovel.png")

function start() {
    add(MOUSE)
    mouseMoveMethod(updateMouse);
}

function updateMouse(e) {
    MOUSE.setPosition(e.getX(), e.getY())
}
