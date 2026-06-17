let IS_PROD = true;
const server = IS_PROD ?
    "https://video-chat-app-webrtc-k4dc.onrender.com/" :

    "http://localhost:8000"


export default server;