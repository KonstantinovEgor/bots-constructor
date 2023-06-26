const BaseController = require('./BaseController');

const TelegramBot = require('../services/TelegramBot');
const helperService = require('../services/HelperService');
const ApiError = require('../errors/ApiError');

class TelegramController extends BaseController {
    constructor() {
        super();
    }

    async get(req, res, next) {
        const pool = req.query;

        helperService.itContains(pool, ['id'], next); 
        await super.getOne('BCTelegramBots', { id: pool.id }, req, res, next, true);
    }

    async add(req, res, next) {
        try {
            const pool = req.body;

            helperService.itContains(pool, ['token', 'config'], next); 
            const candidateBot = await super.getOne('BCTelegramBots', { token: pool.token }, req, res, next, false);
            if (candidateBot)
                return next(ApiError.badRequest('Данный токен уже используется'));
            const bot = await super.add('BCTelegramBots', pool, req, res, next, false);
            
            res.status(200).json({ id: bot?.id });
        } catch (error) {

        }
    }

    async initialize(req, res, next) {
        helperService.itContains(req.body, ['id'], next); 
        const bot = await super.getOne('BCTelegramBots', { id: req.body.id }, req, res, next, false);
        if (!bot)
            return next(ApiError.badRequest('Бот не найден'));
        const { token, config } = bot?.dataValues;

        try {
            new TelegramBot(token, config);
        } catch(error) {
            console.log('tg bot error');
        }
        
        
        res.status(200).json({
            bot_id: req.body.id,
            message: 'Bot has been success initialized'
        });
    }
}

module.exports = new TelegramController();