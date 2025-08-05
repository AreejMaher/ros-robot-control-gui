<script>
    import * as THREE from 'three'; 
    import {ros} from '../shared/rosConnection.js'
    

    let yaw = 0;
    let pitch = 0;
    let roll = 0;
    let theta_angle = 0;

    const imuTopic = new ROSLIB.Topic({
        ros: ros,
        name: "/imu",
        messageType: "sensor_msgs/Imu"
    });

    imuTopic.subscribe((message) => {
        const imu = new ROSLIB.Topic({
            ros: ros,
            name: "/imu",
            messageType: "sensor_msgs/Imu"
        });
    });

    imuTopic.subscribe((message) => {
            // Create Quaternion from IMU message
            const quaternion = new THREE.Quaternion(
                message.orientation.x,
                message.orientation.y,
                message.orientation.z,
                message.orientation.w
            );

            // Convert quaternion to Euler angles (roll, pitch, yaw)
            const euler = new THREE.Euler();
            euler.setFromQuaternion(quaternion);

            // Update reactive variables
            roll = euler.x * (180 / Math.PI);  // Convert to degrees
            pitch = euler.y * (180 / Math.PI);
            yaw = euler.z * (180 / Math.PI);
        });

</script>

<div>
<div class="imu-display">
    <div class="header">
        <span>IMU</span>
    </div>

    <div class="reading">
        <span class="label">YAW</span>
        <span class="value">{yaw.toFixed(6)}</span>
    </div>

    <div class="reading">
        <span class="label">PITCH</span>
        <span class="value">{pitch.toFixed(6)}</span>
    </div>

    <div class="reading">
        <span class="label">ROLL</span>
        <span class="value">{roll.toFixed(6)}</span>
    </div>
</div>


<div class="imu_2d">
    <span style="transform: translate(50%, 50%) rotateZ({yaw}deg);"></span>
</div>
</div>

<style>
.imu-display{
    background: #e99a9a;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.imu_2d {
    margin-top: 10px;
    width: 300px;
    height: 300px;
    background: #e99a9a;
    border-radius: 5px;
    padding: 10px;
}

.imu_2d span {
    display: block;
    width: 50%;
    height: 50%;
    transform: translate(50% , 50%) rotatez(0deg);
    background-color: red;
    position: relative;
}
.imu_2d span::after{
    content: "";
    top: -40px;
    left: calc(50% - 20px);
    border: 20px solid black;
    border-color: #00000000 #00000000 #000000 #00000000;
    position: absolute;
}
</style>