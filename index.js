require('leapjs/template/entry');
//require('leapjs-plugins');
var controller = new Leap.Controller()
// controller.on("frame", function(frame) {
//   console.log("Frame: " + frame.id + " @ " + frame.timestamp);
// });

var frameCount = 0;
controller.on("frame", function(frame) {
    if(frame.hands.length > 0)
    {
        var hand = frame.hands[0];
        var position = hand.palmPosition;
        var velocity = hand.palmVelocity;
        var direction = hand.direction;
        //console.log(hand.roll());
        var rollrad = hand.roll();
        // if(rollrad > 0.6) console.log('left', rollrad , hand.confidence);
        // else if(rollrad < -0.8) console.log('right', rollrad, hand.confidence);
        // else console.log('straight', rollrad)
        
        var pitchrad = hand.pitch();
        //console.log(pitchrad);
        if(hand.confidence > 0.7){
            if(pitchrad > 0.6){
                console.log('backward',pitchrad)
            } else if(pitchrad <-0.6){
                console.log('forward', pitchrad);
            } else console.log('straight', pitchrad)
        }


    }
    frameCount++;
});

setInterval(function() {
  var time = frameCount/2;
  console.log("received " + frameCount + " frames @ " + time + "fps");
  frameCount = 0;
}, 2000);

controller.on('ready', function() {
    console.log("ready");
});
controller.on('connect', function() {
    console.log("connect");
});
controller.on('disconnect', function() {
    console.log("disconnect");
});
controller.on('focus', function() {
    console.log("focus");
});
controller.on('blur', function() {
    console.log("blur");
});
controller.on('deviceConnected', function() {
    console.log("deviceConnected");
});
controller.on('deviceDisconnected', function() {
    console.log("deviceDisconnected");
});

controller.connect();
console.log("\nWaiting for device to connect...");