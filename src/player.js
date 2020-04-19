function playVideo(stream, selector) {
    const videoElement = document.getElementById(selector);
    videoElement.srcObject = stream;
    videoElement.onloadedmetadata = function() {
        videoElement.play();
    }
}

module.exports = playVideo;