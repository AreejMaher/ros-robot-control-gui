<script>
    import {ros} from '../shared/rosConnection.js'

    // select the canvas Element
    let canvas;

    // scale the image
    let scale = 50;

    // Draw image using canvas
    function drawLidarData(ranges) {

        const ctx = canvas.getContext('2d');

        // reset the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Use the angle_increment from your message (changable according to lidar type, can be found in message)
        const angleIncrement = 0.017501922324299812;
        ranges.forEach((range, index) => {
            if (range !== null) {
                // converting polar (Lidar output) to cartesian to be used in drawing 
                const angle = index * angleIncrement;
                const x = range * Math.cos(angle) * scale; // Scale for visualization
                const y = range * Math.sin(angle) * scale; // Scale for visualization

                // color of the points
                ctx.fillStyle = 'black';
                
                // draw the points on the canvas
                ctx.beginPath();
                ctx.arc(canvas.width / 2 + x, canvas.height / 2 + y, 2, 0 , 2 * Math.PI);
                ctx.fill();
            }
        });
    }

    // Subscribe to lidar
    const lidarListener = new ROSLIB.Topic({
            ros: ros,
            name: '/scan', // Change if your topic name is different
            messageType: 'sensor_msgs/LaserScan'
        });

    lidarListener.subscribe((message) => {
            // console.log('Received LIDAR data:', message);
            drawLidarData(message.ranges);
        });
</script>

<canvas bind:this={canvas} width="400" height="400"></canvas>

<style>
    canvas {
        border: 1px solid black;
        background-color: #eee;

        /* width: 100%;
        height: 100%; */
    }
</style>