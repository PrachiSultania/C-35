var ball;
var ballPosition

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
   var posRef  = database.ref('ball/position')
   posRef.on("value", readPosition, showError)
   
}
function readPosition(data){
ballPosition = data.val();
ball.x = ballPosition.x;
ball.y = ballPosition.y;
}

function showError(){
   console.log("unable to read values from database") 
}
function draw(){
    background("white");
    if(ballPosition !== undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
        drawSprites();
    }
   
}

function changePosition(x,y){
    posRef = database.ref('ball/position').set({
        x: ballPosition.x+x,
        y: ballPosition.y+y

    })

    


}
