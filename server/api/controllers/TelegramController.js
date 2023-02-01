const BaseController = require('./BaseController');

const TelegramBot = require('../services/TelegramBot');
const helperService = require('../services/HelperService');
const ApiError = require('../errors/ApiError');

class TelegramController extends BaseController {
    constructor() {
        super();
    }

    async initialize(req, res, next) {
        const bot = new TelegramBot('6023416952:AAEPaC3FnVaCpjO-wKSjyDseIxjsumeKZQE', 
            { test: "succ test", '123': 'succ test 123'}
        );
        
        res.json(bot)
    }
}

module.exports = new TelegramController();