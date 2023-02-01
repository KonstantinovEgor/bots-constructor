const TgBot = require('node-telegram-bot-api');

class TelegramBot {
    constructor(token, messages = {}) {
        this.bot = this.create(token)
            .then(bot => {
                this.bot = bot;
                this.startSendingMessages(messages);
            })
            .catch(error => console.log(error));

        
    }

    async create(token, config = { polling: true }) {
        return new TgBot(token, config);
    }

    startSendingMessages(messages = {}) {
        this.bot.on('message', message => {
            const chatId = message.chat.id;
            const msg = message.text;

            if (msg === '/start')
                return this.bot.sendMessage(chatId, 
                    'Приветствую тебя, друг! Для получения более подробной информации используй /help.\n' +
                    'Этот bot был создан с помощью Thend-Bots-Constructor'
                );
            if (msg === '/help')
                return this.bot.sendMessage(chatId,
                    `Доступные команды:\n` +
                    `"${Object.keys(messages).join('"  "')}".`
                ); 

            if (messages[msg])
                return this.bot.sendMessage(chatId, messages[msg]);

            return this.bot.sendMessage(chatId, 
                'Неизвестная команда, для помощи воспользуйтесь /help'
            );
        })
    }
}

module.exports = TelegramBot;