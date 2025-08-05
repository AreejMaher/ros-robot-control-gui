<script>
    import {ros} from '../shared/rosConnection.js'

    let videoSrc = "";
    let currentBlobUrl = "";

    // Subscribe to the image topic
    const imageTopic = new ROSLIB.Topic({
        ros: ros,
        name: 'camera/rgb/image_raw/compressed',
        messageType: 'sensor_msgs/CompressedImage'
    });

    imageTopic.subscribe((message) => {
        // Create a Blob URL from the image data
        const byteArray = new Uint8Array(
            atob(message.data).split('').map(c => c.charCodeAt(0))
        );
        const blob = new Blob(
            [byteArray], { type: 'image/jpeg' }
        );
        
        // Revoking the previous Blob URL
        if (currentBlobUrl) {
            URL.revokeObjectURL(currentBlobUrl);
        }
        
        currentBlobUrl = URL.createObjectURL(blob);
        videoSrc = currentBlobUrl;
    });
</script>

<main>
   <div class="header">
        <span>Robot Camera</span>
   </div>
    {#if videoSrc}
        <img src={videoSrc} alt="Camera Feed" />
    {:else}
        <p>Loading...</p>
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
        background: #e99a9a;
        border-radius: 20px;
    }
    img {
        width: 100%; /* Scale the image to fit the container */
        max-width: 600px; /* Optional max width */
    }
</style>