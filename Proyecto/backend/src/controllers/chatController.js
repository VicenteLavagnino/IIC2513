const { Chat, UserChat, User } = require('../models');

const createChat = async (ctx) => {
  const { name, usernames } = ctx.request.body;
  try {
    console.log(`Creating chat with name: ${name}`);
    const users = await User.findAll({
      where: {
        username: usernames
      }
    });
    console.log(`Users found: ${users.length}`);

    const userIds = users.map(user => user.id);
    console.log(`User ids found: ${userIds.length}`);
    if (userIds.length !== usernames.length) {
      ctx.status = 404;
      ctx.body = { message: 'One or more usernames not found' };
      return;
    }

    const newChat = await Chat.create({ name });
    const userChats = userIds.map(userId => ({
      chatId: newChat.id,
      userId
    }));
    await UserChat.bulkCreate(userChats, { validate: true });

    ctx.status = 201;
    ctx.body = newChat;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
};

  

const getUserChats = async (ctx) => {
  const { username } = ctx.params;
  try {
    console.log(`Fetching user with username: ${username}`);
    const user = await User.findOne({ where: { username } });
    if (!user) {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
      return;
    }
    console.log(`User found: ${user.id}`);

    const userChats = await UserChat.findAll({
      where: { userId: user.id },
      include: [{
        model: Chat,
        attributes: ['id', 'name']
      }]
    });
        
    console.log(`User chats found: ${userChats.length}`);

    if (!userChats || userChats.length === 0) {
      ctx.status = 200;
      ctx.body = [];
      return;
    }

    const chats = userChats.map(userChat => ({
      id: userChat.Chat.id,
      name: userChat.Chat.name
    }));

    ctx.status = 200;
    ctx.body = chats;
  } catch (error) {
    console.error('Error fetching user chats:', error);
    ctx.status = 500;
    ctx.body = { error: error.message };
  }
};

module.exports = { createChat, getUserChats };
