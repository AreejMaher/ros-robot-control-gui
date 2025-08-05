<script>
    import {ros} from '../shared/rosConnection.js'
    let readings = [];


    let tfSub = new ROSLIB.Topic({
        ros : ros,
        name : "/tf",
        messageType :"tf2_msgs/TFMessage"
    })
    
    tfSub.subscribe(function(e){
        console.log(e.transforms)
        readings = e.transforms.map(reading => {
            return {
                frame_id : reading.header.frame_id,
                child_frame_id : reading.child_frame_id,
                translation : reading.transform.translation,
                rotation :reading.transform.rotation
            }
        })
    })
</script>

<div class="tf">
    <div class="header">
        <span>Tf</span>
    </div>
    {#each readings as reading}
            <div class="reading">
                <span class="label">From:</span>
                <span class="value">{reading.frame_id}</span>
                <span class="label">To:</span>
                <span class="value">{reading.child_frame_id}</span>
            </div>
            <div class="reading">
                <span class="label">Translation:</span>
                <span class="value">({reading.translation.x}, {reading.translation.y}, {reading.translation.z})</span>
            </div>
            <div class="reading">
                <span class="label">Rotation:</span>
                <span class="value">({reading.rotation.x}, {reading.rotation.y}, {reading.rotation.z}, {reading.rotation.w})</span>
            </div>
    {/each}
</div>

<style>
.tf {
    width: 800px ;
    padding: 10px;
    background: #e99a9a;
    margin: 10px;
}
</style>