<script>
import {ros} from "../shared/rosConnection"

var cmdVel = new ROSLIB.Topic({
    ros:ros,
    name :'cmd_vel',
    messageType : 'geometry_msgs/Twist'
});

const movementHandler = (linearX,linearY,angularZ) => {
    var twist = new ROSLIB.Message({
    linear : {
        x : linearX,
        y : linearY,
        z : 0.0
    },
    angular : {
        x : 0.0,
        y : 0.0,
        z : angularZ
    }
});
cmdVel.publish(twist)
}

const forwardHandler = () => {
    console.log ("moving up")
    movementHandler(1.0, 0.0, 0.0);
};
const backwardHandler = () => {
    console.log ("moving down")
    movementHandler(-1.0, 0.0, 0.0);
};
const leftHandler = () => {
    console.log ("moving left")
    movementHandler(0.0, -1.0, 0.0);
};
const rightHandler = () => {
    console.log ("moving right")
    movementHandler(0.0, 1.0, 0.0);
};
const stopHandler = () => {
    console.log ("stopp where are you going")
    movementHandler(0.0, 0.0, 0.0);
};

</script>
<div class="container">
<button on:click={forwardHandler} class="triangle-up"></button>
<div class="horizontal-container">
<button on:click={leftHandler} class="triangle-left"></button>
<button on:click={stopHandler} class="dot"></button>
<button on:click={rightHandler} class="triangle-right"></button>
</div>
<button on:click={backwardHandler} class="triangle-down"></button>

</div>
<style>

.container{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 400px;
    height: 400;
    padding: 10px;
    background: #e99a9a;
    margin-bottom: 10px;
}
.horizontal-container {
    display: flex;
    justify-content: center; /* Center child items */
    width: 100%; 
}
.triangle-up {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid #555;
}
.triangle-down {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 100px solid #555;
    
}
.triangle-left {
    margin-top: 10px;
	width: 0;
	height: 0;
	border-top: 50px solid transparent;
	border-right: 100px solid #555;
	border-bottom: 50px solid transparent;

}
.triangle-right {
    margin-top: 10px;
	width: 0;
	height: 0;
	border-top: 50px solid transparent;
	border-left: 100px  solid #555;
	border-bottom: 50px solid transparent;
}
.dot {
  height: 90px;
  width: 90px;
  background-color: #555;
  border-radius: 50%;
  display: inline-block;
  margin : 10px 15px  ;
}
button {
    background: transparent;
    border: none; 
    padding: 0;
    cursor: pointer; 
}

</style>