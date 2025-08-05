<script>
    let firmwarePath = '';
    let statusMessage = '';

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            firmwarePath = file;
        }
    };

    const uploadFirmware = async (usbPort) => {
        if (!firmwarePath) {
            statusMessage = "Please enter a firmware path.";
            return;  
        }

        try {
            const response = await fetch('http://localhost:5050/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usb_port: usbPort,
                    binFile: firmwarePath
                }),
            });

            const result = await response.json();
            if (response.ok) {
                statusMessage = `Success: ${result.message}`;
            } else {
                statusMessage = `Error: ${result.message}`;
            }
        } catch (error) {
            statusMessage = `Failed to upload firmware: ${error.message}`;
        }
    };

    const resetSTM = async (usbPort) => {
        try {
            const response = await fetch('http://localhost:5050/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usb_port: usbPort,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                statusMessage = `Success: ${result.message}`;
            } else {
                statusMessage = `Error: ${result.message}`;
            }
        } catch (error) {
            statusMessage = `Failed to upload firmware: ${error.message}`;
        }
    };

    const portOneHandler = () => {
        uploadFirmware("ttyACM0");    
    };

    const portTwoHandler = () => {
        uploadFirmware("ttyACM1");
    };

    const portThreeHandler = () => {
        uploadFirmware("ttyACM2");
    };



    const resetOneHandler = () => {
        resetSTM("/dev/ttyACM0");
    };

    const resetTwoHandler = () => {
        resetSTM("/dev/ttyACM1");
    };

    const resetThreeHandler = () => {
        resetSTM("/dev/ttyACM2");
    };



</script>

<div class="stm">
    <div class="header">
        <span>Binary File</span>
    </div>
    <input type="file" id="fileInput" accept=".bin" on:change={handleFileSelect}>
    
    <div class="portButton">
        <button on:click={portOneHandler}>STM32_0</button>
        <button on:click={portTwoHandler}>STM32_1</button>
        <button on:click={portThreeHandler}>STM32_2</button>
    </div>
    <button on:click={resetOneHandler}>Reset_0</button>
    <button on:click={resetTwoHandler}>Reset_1</button>
    <button on:click={resetThreeHandler}>Reset_2</button>
    
    <p class="status">{statusMessage}</p>
</div>

<style>
    .stm {
        width: 400px;
        padding: 10px;
        background: #e99a9a;
        margin: 10px ;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        display: inline-block;
        box-sizing: border-box;
        text-align: center; 
    }
    .portButton {
        margin-top: 10px;
    }
    button {
        margin-right: 10px;
        padding: 10px 15px;
        background-color:red;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #357ab8;
    }
    .status {
        margin-top: 15px;
        font-weight: bold;
    }
    input {
        color: white;
    }
</style>
