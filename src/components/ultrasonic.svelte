<script>
    import {ros} from '../shared/rosConnection.js'

    let ultrasonicReading = 0;

    var ultrasonic = new ROSLIB.Topic({
        ros : ros,
        name : "/ultrasonic",
        messageType :"sensor_msgs/Range"
    });

    ultrasonic.subscribe(function(e){
        ultrasonicReading = e.range;
    });
    
</script>

<div class="ultrasonic">
    <div class="header">
        <span>Ultrasonic Sensor</span>
    </div>
    <div class="reading">
        <span class="label">Reading</span>
        <span class="value">{ultrasonicReading.toFixed(6)}</span>
    </div>
</div>






<style>

div {
    margin-top: 20px;
}
.ultrasonic {
    width: 380px ;
    padding: 10px 20px;
    background: #e99a9a;
    margin: 10px;
    border-radius: 10px;
}
table, th, td{
    border-collapse: collapse;
    border: 1px solid black;
    padding : 10px;
    font-size: large;
    color: #000;
    
}
</style>