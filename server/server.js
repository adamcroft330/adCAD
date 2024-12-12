const WebSocket = require('ws');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 3000 });
const modelPath = path.join(__dirname, '../model/cad.js');

function loadModel(){
  try{
    delete require.cache[require.resolve(modelPath)];
    return require(modelPath);
  } catch(e) {
    console.log('Model load failed', e);
    return { generate: () => {}};
  }
}

wss.on('connection', (ws) => {
  console.log('Client connected.');

  ws.on('message', (message) => {
    fs.writeFile(modelPath, message, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      sendModel();
    })
  });

  const sendModel = () => {
      try{
          const model = loadModel();
          const mesh = model.generate();
          ws.send(JSON.stringify(mesh));
      } catch(e){
        console.log('send model failed', e);
      }
  }
  sendModel();
  ws.on('close', () => {
      console.log('Client disconnected.');
  });
});

// Watch for model file changes and broadcast them
chokidar.watch(modelPath).on('change', () => {
  wss.clients.forEach(client => {
    if(client.readyState === WebSocket.OPEN){
        const model = loadModel();
        const mesh = model.generate();
        client.send(JSON.stringify(mesh));
    }
  });
});

console.log('WebSocket server started on port 3000');
