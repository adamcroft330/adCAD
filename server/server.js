const WebSocket = require('ws');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const http = require('http');
const { URL } = require('url');


const wss = new WebSocket.Server({ port: 3000 });
const modelPath = path.join(__dirname, '../model/cad.js');
const clientDir = path.join(__dirname, '../client');
const nodeModulesDir = path.join(__dirname, '../node_modules');

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

const server = http.createServer((req, res) => {
    try {
        const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
        let filePath;
        if (req.url === '/') {
            filePath = path.join(clientDir, 'index.html');
        } else if (req.url.startsWith('/node_modules/')) {
            // Corrected path calculation
            filePath = path.join(nodeModulesDir, parsedUrl.pathname.substring('/node_modules/'.length));
        } else {
            filePath = path.join(clientDir, parsedUrl.pathname);
        }

        const extname = path.extname(filePath);
        let contentType = 'text/html';
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
        }
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end('Not Found');
                } else {
                    res.writeHead(500);
                    res.end('Internal server error');
                    console.log(`error: ${err}`);
                }
            } else {
                res.writeHead(200, {'Content-Type': contentType});
                res.end(content, 'utf-8');
            }
        });
    } catch (error) {
        console.log('file serving error', error);
        res.writeHead(500);
        res.end('Internal server error');
    }
});

server.listen(8080, () => {
    console.log('HTTP server started on port 8080');
});
console.log('WebSocket server started on port 3000');
