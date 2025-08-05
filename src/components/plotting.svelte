<script>
  import { onMount } from "svelte";
  import Chart from 'chart.js/auto';
  
  export let EncValue1;
  export let EncValue2;
  export let EncValue3;
  export let EncValue4;
  
  export let time;
  export let setPoint;
  
  let oldTIme;
  let oldEnc1, oldEnc2, oldEnc3, oldEnc4;
  let EncOutput;
  
  let dataOfEnc = {
    labels : [],
    datasets: [{
      label : "Enc output 1",
      data : [],
      borderColor: 'purple',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: false,
      tension: 0
    },
    {
      label : "Enc output 2",
      data : [],
      borderColor: 'red',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: false,
      tension: 0
    },
    {
      label : "Enc output 3",
      data : [],
      borderColor: 'blue',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: false,
      tension: 0
    },
    {
      label : "Enc output 4",
      data : [],
      borderColor: 'orange',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: false,
      tension: 0
    },
    {
      label : "set point line",
      data : [],
      borderColor: 'black',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 5,
      fill: false,
      tension: 0
    }]
  }
  
  onMount(() => {
    let ctx = document.getElementById("myChart").getContext('2d');
    EncOutput = new Chart(ctx,{
      type : 'line',
      data : dataOfEnc,
      options : {
        scales: {
        x:{
          title:{
            display : true,
            text : 'Time'
          }
        },
        y:{
          title:{
            display : true,
            text : 'Enc Output'
          }
        }
      }
    }
  });
  });
  
  
  
  $: if (EncOutput && typeof time !== 'undefined' && typeof EncValue1 !== 'undefined' && typeof EncValue2 !== 'undefined' && typeof EncValue3 !== 'undefined' && typeof EncValue4 !== 'undefined'){
    if(oldTIme !== time){
      EncOutput.data.labels.push(time);
      if(EncValue1 !== oldEnc1){
        EncOutput.data.datasets[0].data.push(EncValue1);
        oldEnc1 = EncValue1;
      }
  
      if(EncValue2 !== oldEnc2){
        EncOutput.data.datasets[1].data.push(EncValue2);
        oldEnc2=EncValue2;
      }
  
      if(EncValue3 !== oldEnc3){
        EncOutput.data.datasets[2].data.push(EncValue3);
        oldEnc3=EncValue3;
      }
  
      if(EncValue4 !== oldEnc4){
        EncOutput.data.datasets[3].data.push(EncValue4);
        oldEnc4=EncValue4;
      }
  
      EncOutput.data.datasets[4].data.push(setPoint);
  
      EncOutput.update();
      oldTIme = time;
    };
    };
  </script>

<canvas id="myChart" ></canvas>


<style>
.myChart{
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
    height: 40px; /* Set your desired height */
    width: 60px; /* Set your desired width */
}
</style>