const { Message } = require('../models');
const { User } = require('../models');
const { WebSocket } = require('ws');

const sendMessage = async (ctx) => {
  const { username, chatId, text } = ctx.request.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
      return;
    }

    const message = await Message.create({ username, chatId, text });

    // Propagar el mensaje a través de WebSockets
    const wss = ctx.app.context.wss;

    if (!wss) {
      console.error('WebSocket server not found in context');
      ctx.status = 500;
      ctx.body = { error: 'WebSocket server not available' };
      return;
    }

    const messageString = JSON.stringify({ username, chatId, text });

    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(messageString);
      }
    });

    ctx.status = 201;
    ctx.body = message;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
};

const getChatMessages = async (ctx) => {
  const { chatId } = ctx.params;
  try {
    const messages = await Message.findAll({
      where: { chatId }
    });

    ctx.body = messages;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
  }
};
  

module.exports = { sendMessage, getChatMessages };