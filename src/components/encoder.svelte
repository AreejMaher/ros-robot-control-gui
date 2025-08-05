<script>
  import ROSLIB from 'roslib/src/RosLib.js';
  import {ros} from '../shared/rosConnection.js';
  import SetPoint from './setPoint.svelte';
  export let EncValue1;
  export let EncValue2;
  export let EncValue3;
  export let EncValue4;
  export let Encoders;

  let setpoints=[0,0,0,0]
  var Set_Point = new ROSLIB.Topic({
            ros:ros,
            name: '/setPoint', 
            messageType: 'std_msgs/Float32MultiArray'
    });
    Set_Point.subscribe(function(message) {
        setpoints = message.data
    });

  let setPoint = setpoints[0] ;

  var motor = new ROSLIB.Topic({
      ros:ros,
      name: '/motorStop',
      messageType: 'std_msgs/Float32MultiArray',
  });

  const killAllHandler=()=>{
    var motorStop = new ROSLIB.Message({ 
      data: [0, 0, 0, 0]  
    });
    console.log(`motor1 Stop :${motorStop.data}`);
    motor.publish(motorStop);
  };

  var killWheel1Handler = ()=>{ 
    var motorStop = new ROSLIB.Message({ 
      data: [0, setPoint, setPoint, setPoint]
      
  });
    console.log(`motor1 Stop :${motorStop.data}`);
    motor.publish(motorStop);
  };

  var killWheel2Handler = ()=>{
    var motorStop = new ROSLIB.Message({ 
      data: [setPoint, 0, setPoint, setPoint]
      
  });
    console.log(`motor2 Stop :${motorStop.data}`); 
    Encoders.publish(motorStop);
  };

  var killWheel3Handler = ()=>{
    var motorStop = new ROSLIB.Message({ 
      data: [setPoint, 0, setPoint, setPoint]
      
  });
    console.log(`motor3 Stop :${motorStop.data}`);
    motor.publish(motorStop);
  };

  var killWheel4Handler = ()=>{
    var motorStop = new ROSLIB.Message({ 
      data: [setPoint, setPoint, setPoint, 0]
      
  });
    console.log(`motor4 Stop :${motorStop.data}`);
    motor.publish(motorStop);
  };

</script>

<h4 style="text-align: left; color: red;">Encoder Readings</h4>
<table>
    <tr>
      <th>Wheel 1</th>
      <th>Wheel 2</th>
      <th>Wheel 3</th>
      <th>Wheel 4</th>
    </tr>
    <tr> 
      <td>{EncValue1}</td>
      <td>{EncValue2}</td>
      <td>{EncValue3}</td>
      <td>{EncValue4}</td>
    </tr>
    <tr>
      <td><button on:click={killWheel1Handler} >kill</button></td>
      <td><button on:click={killWheel2Handler}>kill</button></td>
      <td><button on:click={killWheel3Handler}>kill</button></td>
      <td><button on:click={killWheel4Handler}>kill</button></td>
    </tr>
</table> 
<button class="killAll" on:click={killAllHandler}>kill all</button>
<SetPoint />



<!-- <h4 style="text-align: left; color: red;">Encoder Readings</h4>
<div class='encoder'>
  <div class="wheel1">
    <label for='Encoder'>Wheel1</label> 
      <div class="value">{EncValue1}</div>
      <button >kill</button>
  </div>
  <div class="wheel2">
    <label for='Encoder'>Wheel2</label> 
    <div class="value">{EncValue1}</div>
      <button >kill</button>
  </div>
  <div class="wheel3">
    <label for='Encoder'>Wheel3</label> 
    <div class="value">{EncValue1}</div>
      <button >kill</button>
  </div>
  <div class="wheel4">
    <label for='Encoder'>Wheel4</label> 
    <div class="value">{EncValue1}</div>
    <button >kill</button>
  </div>
</div>    -->

<style>
  .killAll{
    padding: 10px 30px;
    background: red;
    color: aliceblue;

  }
  .value{
    padding: 10px 30px; 
    background-color: white; 
    display: inline-block;
    border-radius: 5px; 
  }
  .encoder{
    align-items: left;
    width: 60%;
    height: 39%;
    display : grid ;
    grid-template-columns : 1fr 1fr 1fr 1fr;
    grid-gap : 20px ;
    color:blueviolet;
    padding: 60px;
    background: rgba(230, 230, 230, 0.888);
    margin: 0 auto; 
  }
    table, th, td {
        border-collapse: collapse;
        border: 1px solid black;
        padding: 5px;
        padding-top: 10px;
        margin: 10px;
    }
</style>