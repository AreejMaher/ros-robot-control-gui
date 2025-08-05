<script>
    let ip;

    // send requist to the esp to break the power circuit
    function sendKillRequest() {
        fetch(`http://${ip}/on?`, {
            method: 'GET', // or 'POST' if you prefer
            mode: 'no-cors' // This will suppress any response
        })
        .catch(error => {
            // handle errors
            console.error('Error:', error); 
        });
    }
</script>

<form>
    <div class="header">
        <span>Kill switch</span>
    </div>
    <input bind:value={ip} type="text" placeholder="esp_IP">
    <button on:click={sendKillRequest}>Kill</button>
</form>


<style>
    form {
        padding:10px;
        background: #e99a9a;
        border-radius: 10px;
}
</style>