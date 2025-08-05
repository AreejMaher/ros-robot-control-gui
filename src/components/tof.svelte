<script>
    import {ros} from '../shared/rosConnection.js'
    let tofRange = null;

    var tofRangeSub = new ROSLIB.Topic({
        ros : ros,
        name : '/tof',
        messageType : 'sensor_msgs/Range'
    });

    tofRangeSub.subscribe(function(e){
        tofRange = e.range;
        console.log(tofRange);
    });

</script>

<div class="tof">
    <div class="header">
    <span>TOF</span> 
    </div>
    <div class="readiing">
        <span class="label">Reading:</span>
        <span class="value">{tofRange}</span>
    </div>
</div>

<style>
.tof {
    width: 200px ;
    padding: 10px;
    background: #e99a9a;
    margin: 10px;
}
</style>