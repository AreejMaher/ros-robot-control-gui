<script>
    import {ros} from '../shared/rosConnection.js'

    let Wheels = ['Wheel1','Wheel2','Wheel3','Wheel4']

    let kp1 = 0.0, ki1 = 0.0, kd1 = 0.0;
    let kp2 = 0.0, ki2 = 0.0, kd2 = 0.0;
    let kp3 = 0.0, ki3 = 0.0, kd3 = 0.0;
    let kp4 = 0.0, ki4 = 0.0, kd4 = 0.0;
    let kp = [kp1,kp2,kp3,kp4] ;
    let ki = [ki1,ki2,ki3,ki4] ;
    let kd = [kd1,kd2,kd3,kd4] ;


    const PIDHandler = () => {
    var PID_wheel_msg = new ROSLIB.Topic({
        ros :ros,
        name : '/setParam', 
        messageType : 'std_msgs/Float32MultiArray'
    });

    var PID = new ROSLIB.Message({
        data : [kp[0],ki[0],kd[0],kp[1],ki[1],kd[1],kp[2],ki[2],kd[2],kp[3],ki[3],kd[3]]
    });

    PID_wheel_msg.publish(PID);
    console.log(`Published to '/setParam': [${PID.data}]`);
    }; 


</script>
    <div class='PID'>
        {#each Wheels as Wheel , index}
        <div class="PID_wheel">
            <label for='{Wheel}'>PID_tuning {Wheel}</label> 
                <input type="number" id = '{Wheel}' bind:value={kp[index]} placeholder="kp" step="0.0001">
                <input type="number" id = '{Wheel}' bind:value={ki[index]} placeholder="ki" step="0.0001">
                <input type="number" id = '{Wheel}' bind:value={kd[index]}  placeholder="kd" step="0.0001">
        </div>
        {/each}
        <button on:click|preventDefault={PIDHandler}>Submit</button>
    </div>

<style>
.PID {
    width: 40%;
    height: 39%;
    display : grid ;
    grid-template-columns : 1fr 1fr ;
    grid-gap : 20px ;
    color:blueviolet;
    padding: 20px;
    background: rgba(230, 230, 230, 0.888);
    margin: 0 auto; 

}
h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
}

label {
    text-align: left;
}
input {
    width: 100%;
    border-radius: 6px;
}
button{
    margin: 10px auto; 
    grid-column: span 2;
    text-align: center;
    cursor: pointer;
    width : 100px;
}
</style>