const TgBot = require('node-telegram-bot-api');

class TelegramBot {
    constructor(token, config = {}) {
        this.bot = this.create(token)
            .then(bot => {
                this.bot = bot;
                this.setCommands(config.commands);
                this.startSendingMessages(config.messages);
            })
            .catch(error => console.log(error));

        
    }

    async create(token, config = { polling: true }) {
        return new TgBot(token, config);
    }

    startSendingMessages(messages = []) {
        this.bot.on('message', message => {
            const chatId = message.chat.id;
            const msg = message.text;

            for (const mObj of messages) {
                if (msg === mObj.user_message) {
                    for (const answer of mObj.answer) {
                        if (answer.message_type === 'message')
                            this.bot.sendMessage(chatId, answer.value);
                        if (answer.message_type === 'options')
                            this.bot.sendMessage(
                                chatId, answer.value, this.getOptions(answer.options_config)
                            );
                    }
                    return;
                }
            }
            this.bot.sendMessage(chatId, 'Неизвестная команда'); 
                
        });
    }

    getOptions(config) {
        return JSON.stringify(config);
    }

    setCommands(commands = []) {
        return this.bot.setMyCommands(commands);
    }
}

module.exports = TelegramBot;