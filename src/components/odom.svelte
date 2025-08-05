<script>
    import {ros} from '../shared/rosConnection.js'

    let linearVelocity = { x: 0, y: 0, z: 0 };  
    let angularVelocity = { x: 0, y: 0, z: 0 };

    var odomSub = new ROSLIB.Topic({
        ros : ros,
        name : '/odom',
        messageType : "nav_msgs/Odometry"
    })

    odomSub.subscribe(function(e){
        linearVelocity = e.twist.twist.linear;
        angularVelocity = e.twist.twist.angular;
    });


</script>
<!-- <div class="odom">
<table>
    <tr>
        <th>Odom Readings</th>
        <th>x</th>
        <th>y</th>
        <th>z</th>
    </tr>
    <tr>
        <td>Linear Velocity</td>
        <td>{linearVelocity.x.toFixed(6)}</td>
        <td>{linearVelocity.y.toFixed(6)}</td>
        <td>{linearVelocity.z.toFixed(6)}</td>
    </tr>
    <tr>
        <td>Angular Velocity</td>
        <td>{angularVelocity.x.toFixed(6)}</td>
        <td>{angularVelocity.y.toFixed(6)}</td>
        <td>{angularVelocity.z.toFixed(6)}</td>
    </tr>
</table> 
</div>  -->


<div class="odom">
    <div class="header">
        <span class="title">Odom Reading</span>
    </div>
    <div class="odom-columns">
        <div class="linear">
            <div class="header">
                <span>Linear Velocity</span>
            </div>
            <div class="reading">
                <span class="label">x:</span>
                <span class="value">{linearVelocity.x.toFixed(6)}</span>
            </div>
            <div class="reading">
                <span class="label">y:</span>
                <span class="value">{linearVelocity.y.toFixed(6)}</span>
            </div>
            <div class="reading">
                <span class="label">z:</span>
                <span class="value">{linearVelocity.z.toFixed(6)}</span>
            </div>
        </div>  
        <div class="Angular">
            <div class="header">
                <span>Linear Velocity</span>
                </div>
            <div class="reading">
                <span class="label">x:</span>
                <span class="value">{angularVelocity.x.toFixed(6)}</span>
            </div>
            <div class="reading">
                <span class="label">y:</span>
                <span class="value">{angularVelocity.y.toFixed(6)}</span>
            </div>
            <div class="reading">
                <span class="label">z:</span>
                <span class="value">{angularVelocity.z.toFixed(6)}</span>
            </div>
        </div>  
    </div>
</div>
<style>
.odom{
    width: 400px;
    padding: 10px;
    background: #e99a9a;
    margin: 10px 10px 10px 0px;
    border-radius: 5px;
    
}
.odom-columns{
    display: flex;
}

.linear, .Angular {
    flex: 1; 
    margin: 5px; 
}
.title{
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
}

/* table {
    border-collapse: collapse;
    margin: 6px 3px  ;     
    height:200px; 
    color: #000;
}

 th,td {
    text-align: center;
    padding: 8px;
    border: 1px solid #000; 
}


tr:nth-child(even) {
    background-color: #e99a9a;
}

tr:nth-child(odd) {
    background-color: #ff0000;
} */
</style>