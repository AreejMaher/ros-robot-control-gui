<script>
    import {ros} from '../shared/rosConnection.js'
    import Plotting from '../components/plotting.svelte';
    import Encoder from '../components/encoder.svelte';
    import PID from "./PID.svelte"


    export let EncValue1 = 0;
    export let EncValue2 = 0;
    export let EncValue3 = 0;
    export let EncValue4 = 0;
    export let time = 0;
    export let setPoint = 0;

    var Encoders = new ROSLIB.Topic({
        ros:ros,
        name: '/speed_feedback',
        messageType: 'std_msgs/Float32MultiArray '
    });

    var subTime = new ROSLIB.Topic({
        ros:ros,
        name: '/time',
        messageType: 'std_msgs/UInt32'
    });

    var subSetPoint = new ROSLIB.Topic({
        ros:ros,
        name: '/setpoint',
        messageType: 'std_msgs/Float32MultiArray'
    });

    Encoders.subscribe(function(e){
        EncValue1 = msg.data[0];
        EncValue2 = msg.data[1];
        EncValue3 = msg.data[2];
        EncValue4 = msg.data[3];
    });


    subTime.subscribe(function(e){
        time = e.data;
        
    });

    subSetPoint.subscribe(function(e){
        setPoint = e.data;
    });


</script>

<main>
    <div class="PIDandEncoder">
        <div class="PID">
        <PID />
        </div>
        <div class="Encoder">
        <Encoder {EncValue1} {EncValue2} {EncValue3} {EncValue4} {Encoders} />
        </div>
    </div>
    <div class="Plotting">
        <Plotting {EncValue1} {EncValue2} {EncValue3} {EncValue4} {time} {setPoint}/> 
    </div>
</main>

<style>
.PIDandEncoder{
    display: flex;
}
.PID{
height: 100%;

}
.Encoder{
width: 50%;
height: 50%;
}
.Plotting{
    height: 40%;
}
</style>

