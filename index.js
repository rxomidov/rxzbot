const TeleBot = require('telebot');
const bot = new TeleBot('1251223589:AAE3c4W5XfdZ81UJ9GAkwCCuaZAV124J7C8');

bot.on('text', (msg) => msg.reply.text(msg.text));
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
bot.start();