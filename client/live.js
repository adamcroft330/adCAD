const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('WebSocket connection opened.');
};

socket.onmessage = (event) => {
    const meshData = JSON.parse(event.data);
    updateMesh(meshData);
};

socket.onclose = () => {
    console.log('WebSocket connection closed.');
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

function sendMessage(message){
    if(socket.readyState === WebSocket.OPEN){
        socket.send(message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('scene-canvas');
    initViewer(canvas);
    render();

    initEditor((script) => {
      sendMessage(script);
    });
});
