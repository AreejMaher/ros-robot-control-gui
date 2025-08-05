<script>
    import {ros} from '../shared/rosConnection.js'

    let rgba = [1,0,0,1] ;

    // subscribe a Topic
    var RGBA_msg = new ROSLIB.Topic ({
        ros :ros,
        name : '/rgba_topic',
        messageType :'std_msgs/ColorRGBA'
    });

    RGBA_msg.subscribe(function(msg){
        console.log("Received RGBA values:", msg); 
        rgba = [msg.r,msg.g,msg.b,msg.a]
    });

    $: cssRgba = `rgba(${rgba[0] * 255}, ${rgba[1] * 255}, ${rgba[2] * 255}, ${rgba[3]})`;
</script>

<div class="colorSensor">
<rgba>
    <div class="header">
        <span>color sensor</span>
    </div>
    <h3>The color detected by color sensor is :</h3>
    <div class="color_box" style='background-color:{cssRgba}'></div>
</rgba>
</div>


<style>
h3{
    color: #000; 
}
.colorSensor {
    width: 200px ;
    padding: 10px;
    background: #e99a9a;
    margin: 10px;
}
.color_box{
    width: 100px;
    height: 100px;
    border: 1px solid black;
}

</style>