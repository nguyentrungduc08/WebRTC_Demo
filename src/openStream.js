function openStream(callback) {
    navigator.getUserMedia.getUserMedia({video: true, audio: false})
        .then(stream => callback(stream))
        .catch(err => console.error("openStream error: " + err));
}

module.exports = openStream;