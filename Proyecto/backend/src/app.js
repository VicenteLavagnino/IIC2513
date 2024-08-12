const koa = require('koa');
const logger = require('koa-logger');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const router = require('./routes.js');
const orm = require('./models');
const http = require('http');
const WebSocket = require('ws');

const app = new koa();

app.context.orm = orm;

app.use(cors({
  origin: '*',
}));

app.use(logger());
app.use(koaBody());

app.use(router.routes());


app.use((ctx) => {
  ctx.body = 'Hello World';
});

const server = http.createServer(app.callback());
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all clients
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.context.wss = wss;

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports =  app;