const TelegramBot = require ('node-telegram-bot-api');
const bot = new TelegramBot('521919616:AAGQe1W3QThwuE8JgtN32Z9qfR9fAJ5ST5g', {polling: true});
const os = require('os');

bot.on('message', msg =>{
    bot.sendMessage(msg.chat.id, `Hello from "${os.type()}", bot say, I hate you "${msg
        .from.first_name}"`);
});