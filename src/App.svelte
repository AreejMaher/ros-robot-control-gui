<script>
	import Header from "./components/Header.svelte";
	import RGBA from "./components/colorsensor.svelte";
	import Plotting from "./components/PIDplotting.svelte";
	import Tab from "./shared/Tabs.svelte"
	import Ultrasonic from "./components/ultrasonic.svelte";
	import Odom from "./components/odom.svelte";
	import Camera from "./components/camera.svelte";
	import Stm from "./components/Stm.svelte";
	import Tof from "./components/tof.svelte";
	import Tf from "./components/tf.svelte";
	import Imu from "./components/imu.svelte";
	import Movement from "./components/movement.svelte";
	import LiDar from "./components/liDar.svelte";
	import Kill from "./components/kill.svelte";
	

	let Pages = ['Main Page','PID tuning','Additional Sensors'];
	let activePage ='Main Page';
	let mode = 'light';

	const tabHandler = (e) => {
		activePage = e.detail;
	};
	const modeHandler =(e) => {
		mode = e.detail;
	};

</script>

<Header on:SelectMode={modeHandler}/>
<main class={mode}>
	<Tab {Pages} {activePage} on:tabChange={tabHandler}/>
	{#if activePage === 'Main Page' }
	<div class="container">
	<div class="left">
		<Imu />
		<Odom />	
	</div>
			
	<div class="middle">
		<Camera class="camera"/>
	<div class="LiDar">
		<LiDar />
	</div>
	</div>

	<div class="right">
		<Stm />
		<Kill />
		<Ultrasonic />
		<Movement />
	</div>
</div>
	{:else if activePage === 'PID tuning'}
		<Plotting />
	{:else if activePage === 'Additional Sensors'}
		<RGBA />
		<Tof />
		<Tf />
	{/if}	

</main>


<style>
.container{
	display: flex;
	height: 100vh;
	width: 100%;
}
.left{
	flex : 1f ;
}
.middle{
	flex: 2; 
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
}
.LiDar{
	margin : 10px auto ;
}
.right{
	flex : 1f ;
}
* {
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
}
main {
	width: 100%;   /* Full width of the viewport */
	min-height: 100vh; /* Full height of the viewport */
}
.light {
        background-color: white;
        color: black;
    }

.dark {
	margin: 0;
	background-color: #1c1c1c;
	color: white;
}




</style>