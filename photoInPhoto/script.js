const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        //will hold our mediaStream data, we are waiting until the user has selected which screen or window they want to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        //we are passing the mediaStream to the videoElement as its source object
        videoElement.srcObject = mediaStream;
        //when the video has loaded its metadata, it will call the function and play it
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset the button
    button.disabled = false;
});

//On Load
selectMediaStream();