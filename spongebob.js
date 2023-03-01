"use strict";

// functions

function drawBrow(img, context) {
context.drawImage(img, 0, 0, 380, 72, CANVAS_WIDTH*0.5-125, CANVAS_HEIGHT/3, 250, 45);
}

function drawLeftEye(img, context) {
    context.drawImage(img, 0, 72, 193, 115, CANVAS_WIDTH*0.5-125, CANVAS_HEIGHT/3+45, 127, 68);
}

function drawRightEye(img, context) {
    context.drawImage(img, 193, 72, 187, 115, CANVAS_WIDTH*0.5-125+127, CANVAS_HEIGHT/3+45, 123, 68);
}

function drawMouth(img, context) {
    context.drawImage(img, 0, 187, 380, 110, CANVAS_WIDTH*0.5-125, CANVAS_HEIGHT/3+45+68, 250, 68);
}

function drawBody(img, context) {
    context.drawImage(img, 0, 297, 380, 34, CANVAS_WIDTH*0.5-125, CANVAS_HEIGHT/3+45+68+68, 250, 20);
}

function drawBackground(img, context) {
    context.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}


//Draw different emotions
function drawSpongeBob() {

    draw(context, drawBrow, names, 0);
    draw(context, drawLeftEye, names, 0); 
    draw(context, drawRightEye, names, 0);
    draw(context, drawMouth, names, 0);
    draw(context, drawBody, names, 0);

    if (beardCounter > 0 && beardCounter % 2 != 0 ) {
        draw(context, drawMouth, names, BEARD);
        if (leftEyeCounter > 0 && leftEyeCounter % 2 != 0) {
            draw(context, drawLeftEye, names, LEFT);
            if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
                draw(context, drawRightEye, names, RIGHT);
            }
        } else if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
            draw(context, drawRightEye, names, RIGHT);
        }
    } else if (leftEyeCounter > 0 && leftEyeCounter % 2 != 0) {
        draw(context, drawLeftEye, names, LEFT);
        if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
            draw(context, drawRightEye, names, RIGHT);
        }
    } else if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
        draw(context, drawRightEye, names, RIGHT);
    }
    
    buttonHistory.push(0);
}

function drawHappySpongeBob() {

    draw(context, drawBrow, names, HAPPINESS);  
    draw(context, drawLeftEye, names, HAPPINESS); 
     draw(context, drawRightEye, names, HAPPINESS);
     draw(context, drawMouth, names, HAPPINESS);
     draw(context, drawBody, names, HAPPINESS); 

     if (beardCounter > 0 && beardCounter % 2 != 0 ) {
        draw(context, drawMouth, names, BEARD);
        if (leftEyeCounter > 0 && leftEyeCounter % 2 != 0) {
            draw(context, drawLeftEye, names, LEFT);
            if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
                draw(context, drawRightEye, names, RIGHT);
            }
        } else if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
            draw(context, drawRightEye, names, RIGHT);
        }
    } else if (leftEyeCounter > 0 && leftEyeCounter % 2 != 0) {
        draw(context, drawLeftEye, names, LEFT);
        if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
            draw(context, drawRightEye, names, RIGHT);
        }
    } else if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
        draw(context, drawRightEye, names, RIGHT);
    }
     buttonHistory.push(HAPPINESS);
}

function drawAngrySpongeBob() {

    draw(context, drawBrow, names, ANGER);
    draw(context, drawLeftEye, names, ANGER); 
    draw(context, drawRightEye, names, ANGER);
    draw(context, drawMouth, names, ANGER);
    draw(context, drawBody, names, ANGER);

    if (beardCounter > 0 && beardCounter % 2 != 0 ) {
        draw(context, drawMouth, names, BEARD);
        if (leftEyeCounter > 0 && leftEyeCounter % 2 != 0) {
            draw(context, drawLeftEye, names, LEFT);
            if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
                draw(context, drawRightEye, names, RIGHT);
            }
        } else if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
            draw(context, drawRightEye, names, RIGHT);
        }
    } else if (leftEyeCounter > 0 && leftEyeCounter % 2 != 0) {
        draw(context, drawLeftEye, names, LEFT);
        if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
            draw(context, drawRightEye, names, RIGHT);
        }
    } else if (rightEyeCounter > 0 && rightEyeCounter % 2 != 0) {
        draw(context, drawRightEye, names, RIGHT);
    }

    buttonHistory.push(ANGER);
}

function draw(context, callback, filenames, i) {  
                                 // A 'callback' is a function that is invoked after some kind of event, 
                                 // In this example, it is called once the image has completed loading
  var img = new Image();
  img.onload = function() {      // Anonymous function, i.e. it has no name
    callback(this, context);     // Call the function stored in the variable 'callback'
                                 // 'this' refers to the containing object currently in focus, i.e. img
  }
  img.src = filenames[i];
}

//Interactive part----------------------------------------------
function getMouseXY(e) {
    var canvas = document.getElementById('canvas_spongebob');
    var boundingRect = canvas.getBoundingClientRect();
    var offsetX = boundingRect.left;
    var offsetY = boundingRect.top;
    var w = (boundingRect.width-canvas.width)/2;
    var h = (boundingRect.height-canvas.height)/2;
    offsetX += w;
    offsetY += h;
    // use clientX and clientY as getBoundingClientRect is used above
    var mx = Math.round(e.clientX-offsetX);
    var my = Math.round(e.clientY-offsetY);
    return {x: mx, y: my};
  }

  function checkContained(x, y, scope) {
    return ((x>=scope.x)
            && (x<=scope.x+scope.w)
            && (y>=scope.y)
            && (y<=scope.y+scope.h));
  }

//Draw effects
  function closeLeftEye(evt, scope, context) {
    var pos = getMouseXY(evt);
    var inside = checkContained(pos.x, pos.y, scope);
        if (inside) {
            leftEyeCounter++;

            if (leftEyeCounter % 2 != 0) {
                draw(context, drawLeftEye, names, LEFT);
            } else {
                if (buttonHistory[buttonHistory.length-1] == ANGER) {
                    draw(context, drawLeftEye, names, ANGER);
                } else {
                    if (buttonHistory[buttonHistory.length-1] == HAPPINESS) {
                        draw(context, drawLeftEye, names, HAPPINESS);
                    } else {
                        draw(context, drawLeftEye, names, 0);
                    }
                }
            } 
            
        }
  }

  function closeRightEye(evt, scope, context) {
    var pos = getMouseXY(evt);
    var inside = checkContained(pos.x, pos.y, scope);
        if (inside) {
            rightEyeCounter++;
            if (rightEyeCounter % 2 != 0) {
                draw(context, drawRightEye, names, RIGHT);
            } else {
                if (buttonHistory[buttonHistory.length-1] == ANGER) {
                    draw(context, drawRightEye, names, ANGER);
                } else {
                    if (buttonHistory[buttonHistory.length-1] == HAPPINESS) {
                        draw(context, drawRightEye, names, HAPPINESS);
                    } else {
                        draw(context, drawRightEye, names, 0);
                    }
                }
            } 
        }
  }

  function drawBeard(evt, scope, context) {
    var pos = getMouseXY(evt);
    var inside = checkContained(pos.x, pos.y, scope);
        if (inside) {
            beardCounter++;
            if ( beardCounter % 2 != 0) {
                draw(context, drawMouth, names, BEARD);
            } else {
                if (buttonHistory[buttonHistory.length-1] == ANGER) {
                    draw(context, drawMouth, names, ANGER);
                } else {
                    if (buttonHistory[buttonHistory.length-1] == HAPPINESS) {
                        draw(context, drawMouth, names, HAPPINESS);
                    } else {
                        draw(context, drawMouth, names, 0);
                    }
                }
            } 
        }
  }
  


//Main program
let names = ["spongeBob.png", "happiness.png", "anger.png", "beard.png", "close_left_eye.png", "close_right_eye.png", "background.jpg"];
let buttonHistory = [];
const HAPPINESS = 1;
const ANGER = 2;
const BEARD = 3;
const LEFT = 4;
const RIGHT = 5;

var canvas = document.getElementById("canvas_spongebob");
var context = canvas.getContext("2d");

var calmButton = document.getElementById("calmbutton");
var happyButton = document.getElementById("happybutton");
var angryButton = document.getElementById("angrybutton");

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

//Set the scope of clicking effects
var leftEye = {x: CANVAS_WIDTH*0.5-125, y: CANVAS_HEIGHT/3+45, w: 127, h: 68 };
var rightEye = {x: CANVAS_WIDTH*0.5-125+127, y: CANVAS_HEIGHT/3+45, w: 123, h: 68};
var mouth = {x: CANVAS_WIDTH*0.5-125, y: CANVAS_HEIGHT/3+45+68, w: 250, h: 68};

var leftEyeCounter = 0;
var rightEyeCounter = 0;
var beardCounter = 0;
var lastButton = buttonHistory[buttonHistory.length-1];


draw(context, drawBackground, names, 6);
canvas.addEventListener('click', function(evt) { closeLeftEye(evt, leftEye, context); });
canvas.addEventListener('click', function(evt) { closeRightEye(evt, rightEye, context); });
canvas.addEventListener('click', function(evt) { drawBeard(evt, mouth, context); });
calmButton.addEventListener("click", function() { drawSpongeBob() });
happyButton.addEventListener("click", function() { drawHappySpongeBob() });
angryButton.addEventListener("click", function() { drawAngrySpongeBob() });
  