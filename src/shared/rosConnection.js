import ROSLIB from 'roslib';

	
// Connecting to ROS
var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
    });

// Checking connection and error
ros.on ('connection', function(){
    console.log("Connected to WebSocket server")
});

ros.on ('error', function(error){
    console.log("Error connecting to WebSocket server:",error)
});

ros.on ('close', function(){
    console.log("Connection to WebSocket closed")
});

export { ros };