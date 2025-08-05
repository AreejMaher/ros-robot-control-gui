<script>
    import {ros} from "../shared/rosConnection"

    let setpoints = [0.0, 0.0, 0.0, 0.0];
    let setpoint=0.0;

    const setHandler = () => {
        setpoints = [setpoint,setpoint,setpoint,setpoint]
        var SetPoint = new ROSLIB.Topic({
            ros:ros,
            name: '/setpoint', 
            messageType: 'std_msgs/Float32MultiArray'
    });
        var setPointMsg = new ROSLIB.Message({
            data : setpoints
        })
        SetPoint.publish(setPointMsg)
        console.log(`Published ${setpoints}`);
    };
</script>

<div class="setPoint">
    <label for=setpoint>setpoint</label>
    <input type="number" id=setpoint bind:value={setpoint} placeholder="Enter value" step="0.0001">
    <button on:click={setHandler}>SET</button>
</div>
<style>
.setPoint{
    color:blueviolet;
    padding: 20px;
    width: 240px;
    background: rgba(230, 230, 230, 0.888);
}
button{
    text-align: center;
    cursor: pointer;
    width : 100px;
}

</style>